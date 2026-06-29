import os
import subprocess
import sys
import tempfile

from flask import Flask, jsonify, render_template, request
from flask_cors import CORS

from problems import PROBLEMS

app = Flask(__name__)
CORS(app)

BLOCKED_PATTERNS = [
    "import os",
    "import sys",
    "import subprocess",
    "import shutil",
    "import socket",
    "import urllib",
    "import requests",
    "from os",
    "from sys",
    "from subprocess",
    "__import__",
    "open(",
    "exec(",
    "eval(",
    "compile(",
    "breakpoint(",
]


def is_safe_code(code):
    for pattern in BLOCKED_PATTERNS:
        if pattern in code:
            return False, f"사용 불가능한 코드가 포함되어 있습니다: '{pattern}'"
    return True, ""


def compare_output(actual: str, expected: str) -> bool:
    actual_lines = [line.rstrip() for line in actual.strip().splitlines()]
    expected_lines = [line.rstrip() for line in expected.strip().splitlines()]
    return actual_lines == expected_lines


def run_user_code(code: str, test_input: str = "", timeout: int = 5):
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".py", delete=False, encoding="utf-8"
    ) as f:
        f.write(code)
        fname = f.name
    try:
        result = subprocess.run(
            [sys.executable, "-u", fname],
            input=test_input,
            capture_output=True,
            text=True,
            timeout=timeout,
            encoding="utf-8",
        )
        return result.stdout, result.stderr, result.returncode
    except subprocess.TimeoutExpired:
        return "", "⏱ 실행 시간 초과 (5초)", -1
    except Exception as e:
        return "", str(e), -1
    finally:
        try:
            os.unlink(fname)
        except Exception:
            pass


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html", problems=PROBLEMS)


@app.route("/problem/<int:problem_id>")
def problem(problem_id):
    prob = next((p for p in PROBLEMS if p["id"] == problem_id), None)
    if not prob:
        return "문제를 찾을 수 없습니다", 404
    total = len(PROBLEMS)
    return render_template("problem.html", problem=prob, total=total)


@app.route("/run", methods=["POST"])
def run_code():
    data = request.get_json()
    code = data.get("code", "")
    test_input = data.get("input", "")

    safe, msg = is_safe_code(code)
    if not safe:
        return jsonify({"error": msg})

    stdout, stderr, returncode = run_user_code(code, test_input)
    return jsonify({"output": stdout, "error": stderr, "returncode": returncode})


@app.route("/submit/<int:problem_id>", methods=["POST"])
def submit(problem_id):
    prob = next((p for p in PROBLEMS if p["id"] == problem_id), None)
    if not prob:
        return jsonify({"error": "문제를 찾을 수 없습니다"}), 404

    data = request.get_json()
    code = data.get("code", "")

    safe, msg = is_safe_code(code)
    if not safe:
        return jsonify({"passed": False, "error": msg, "results": []})

    results = []
    all_passed = True

    for i, tc in enumerate(prob["test_cases"]):
        stdout, stderr, returncode = run_user_code(code, tc.get("input", ""))
        expected = tc["output"]
        passed = compare_output(stdout, expected) and returncode == 0
        if not passed:
            all_passed = False

        results.append(
            {
                "test": i + 1,
                "passed": passed,
                "input": tc.get("input", "(없음)"),
                "expected": expected,
                "actual": stdout.strip(),
                "error": stderr.strip() if stderr.strip() else None,
            }
        )

    return jsonify({"passed": all_passed, "results": results})


@app.route("/api/problems")
def api_problems():
    return jsonify(
        [
            {
                "id": p["id"],
                "title": p["title"],
                "category": p["category"],
                "difficulty": p["difficulty"],
            }
            for p in PROBLEMS
        ]
    )


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
