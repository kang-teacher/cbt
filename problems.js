const PROBLEMS = [
  {
    id: 1, title: "Hello, World!", category: "기초 출력", difficulty: "쉬움",
    description: "화면에 <code>Hello, World!</code>를 출력하세요.",
    examples: [{ input: "", output: "Hello, World!" }],
    testCases: [{ input: "", output: "Hello, World!" }],
    hint: "print() 함수를 사용하세요.",
    starterCode: "# 여기에 코드를 작성하세요\n"
  },
  {
    id: 2, title: "두 수의 합", category: "사칙연산", difficulty: "쉬움",
    description: "두 정수 a, b를 각각 한 줄씩 입력받아 합을 출력하세요.",
    examples: [{ input: "3\n5", output: "8" }],
    testCases: [
      { input: "3\n5", output: "8" },
      { input: "10\n20", output: "30" },
      { input: "-5\n3", output: "-2" }
    ],
    hint: "input()으로 받고 int()로 변환하세요.",
    starterCode: "a = int(input())\nb = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 3, title: "두 수의 곱", category: "사칙연산", difficulty: "쉬움",
    description: "두 정수 a, b를 각각 한 줄씩 입력받아 곱을 출력하세요.",
    examples: [{ input: "4\n6", output: "24" }],
    testCases: [
      { input: "4\n6", output: "24" },
      { input: "7\n8", output: "56" },
      { input: "-3\n5", output: "-15" }
    ],
    hint: "곱셈 연산자 *를 사용하세요.",
    starterCode: "a = int(input())\nb = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 4, title: "몫과 나머지", category: "사칙연산", difficulty: "쉬움",
    description: "두 정수 a, b를 입력받아 a를 b로 나눈 <b>몫</b>과 <b>나머지</b>를 공백으로 구분해 출력하세요.",
    examples: [{ input: "7\n3", output: "2 1" }],
    testCases: [
      { input: "7\n3", output: "2 1" },
      { input: "10\n4", output: "2 2" },
      { input: "15\n5", output: "3 0" }
    ],
    hint: "// 연산자(몫), % 연산자(나머지)를 사용하세요.",
    starterCode: "a = int(input())\nb = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 5, title: "세 수의 평균", category: "사칙연산", difficulty: "쉬움",
    description: "세 정수 a, b, c를 각각 한 줄씩 입력받아 평균을 소수점 둘째 자리까지 출력하세요.",
    examples: [{ input: "10\n20\n30", output: "20.00" }],
    testCases: [
      { input: "10\n20\n30", output: "20.00" },
      { input: "1\n2\n3", output: "2.00" },
      { input: "5\n10\n15", output: "10.00" }
    ],
    hint: 'f"{avg:.2f}" 형식으로 출력하세요.',
    starterCode: "a = int(input())\nb = int(input())\nc = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 6, title: "최댓값 구하기", category: "조건문", difficulty: "쉬움",
    description: "세 정수를 각각 한 줄씩 입력받아 가장 큰 수를 출력하세요.",
    examples: [{ input: "3\n7\n2", output: "7" }],
    testCases: [
      { input: "3\n7\n2", output: "7" },
      { input: "10\n5\n8", output: "10" },
      { input: "-1\n-3\n-2", output: "-1" }
    ],
    hint: "max() 함수 또는 if문을 사용하세요.",
    starterCode: "a = int(input())\nb = int(input())\nc = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 7, title: "짝수와 홀수", category: "조건문", difficulty: "쉬움",
    description: "정수 n을 입력받아 짝수이면 <code>짝수</code>, 홀수이면 <code>홀수</code>를 출력하세요.",
    examples: [{ input: "4", output: "짝수" }, { input: "7", output: "홀수" }],
    testCases: [
      { input: "4", output: "짝수" },
      { input: "7", output: "홀수" },
      { input: "0", output: "짝수" }
    ],
    hint: "% 2 == 0이면 짝수입니다.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 8, title: "절댓값", category: "조건문", difficulty: "쉬움",
    description: "정수 n을 입력받아 절댓값을 출력하세요.",
    examples: [{ input: "-5", output: "5" }],
    testCases: [
      { input: "-5", output: "5" },
      { input: "3", output: "3" },
      { input: "0", output: "0" }
    ],
    hint: "abs() 함수를 사용하거나 if문으로 직접 구현해보세요.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 9, title: "1부터 N까지의 합", category: "반복문", difficulty: "보통",
    description: "정수 N을 입력받아 1부터 N까지의 합을 출력하세요.",
    examples: [{ input: "5", output: "15" }],
    testCases: [
      { input: "5", output: "15" },
      { input: "10", output: "55" },
      { input: "100", output: "5050" }
    ],
    hint: "for i in range(1, N+1) 반복문 또는 N*(N+1)//2 공식을 사용하세요.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 10, title: "1부터 N까지 짝수의 합", category: "반복문", difficulty: "보통",
    description: "정수 N을 입력받아 1부터 N까지 짝수의 합을 출력하세요.",
    examples: [{ input: "10", output: "30" }],
    testCases: [
      { input: "10", output: "30" },
      { input: "5", output: "6" },
      { input: "20", output: "110" }
    ],
    hint: "range(2, N+1, 2) 또는 i % 2 == 0 조건을 사용하세요.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 11, title: "구구단 출력", category: "반복문", difficulty: "보통",
    description: "정수 N(2~9)을 입력받아 N단 구구단을 출력하세요.<br>출력 형식: <code>N x i = 결과</code> (i는 1~9)",
    examples: [{ input: "3", output: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27" }],
    testCases: [
      { input: "3", output: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27" },
      { input: "5", output: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45" }
    ],
    hint: 'for i in range(1, 10): print(f"{n} x {i} = {n*i}") 를 사용하세요.',
    starterCode: "n = int(input())\nfor i in range(1, 10):\n    # 여기에 코드를 작성하세요\n    pass\n"
  },
  {
    id: 12, title: "팩토리얼", category: "반복문", difficulty: "보통",
    description: "정수 N(0 이상)을 입력받아 N!(팩토리얼)을 출력하세요.<br>(0! = 1, 1! = 1, 2! = 2, 3! = 6, ...)",
    examples: [{ input: "5", output: "120" }],
    testCases: [
      { input: "5", output: "120" },
      { input: "0", output: "1" },
      { input: "10", output: "3628800" }
    ],
    hint: "result = 1로 시작해서 1부터 N까지 곱하세요.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 13, title: "피보나치 수열", category: "반복문", difficulty: "보통",
    description: "정수 N을 입력받아 피보나치 수열의 N번째 수를 출력하세요.<br>(1번째=1, 2번째=1, 3번째=2, 4번째=3, 5번째=5, ...)",
    examples: [{ input: "7", output: "13" }],
    testCases: [
      { input: "7", output: "13" },
      { input: "1", output: "1" },
      { input: "10", output: "55" }
    ],
    hint: "a, b = 1, 1로 시작해서 a, b = b, a+b를 반복하세요.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 14, title: "소수 판별", category: "조건문", difficulty: "보통",
    description: "정수 N(2 이상)을 입력받아 소수이면 <code>소수</code>, 아니면 <code>소수 아님</code>을 출력하세요.",
    examples: [{ input: "7", output: "소수" }, { input: "10", output: "소수 아님" }],
    testCases: [
      { input: "7", output: "소수" },
      { input: "10", output: "소수 아님" },
      { input: "2", output: "소수" },
      { input: "9", output: "소수 아님" }
    ],
    hint: "2부터 N-1까지 나누어 떨어지는 수가 있으면 소수가 아닙니다.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 15, title: "문자열 뒤집기", category: "문자열", difficulty: "쉬움",
    description: "문자열을 입력받아 뒤집어서 출력하세요.",
    examples: [{ input: "hello", output: "olleh" }],
    testCases: [
      { input: "hello", output: "olleh" },
      { input: "python", output: "nohtyp" },
      { input: "abcde", output: "edcba" }
    ],
    hint: "슬라이싱 s[::-1]을 사용하세요.",
    starterCode: "s = input()\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 16, title: "대문자 변환", category: "문자열", difficulty: "쉬움",
    description: "영어 문자열을 입력받아 모두 대문자로 변환해 출력하세요.",
    examples: [{ input: "hello world", output: "HELLO WORLD" }],
    testCases: [
      { input: "hello world", output: "HELLO WORLD" },
      { input: "python", output: "PYTHON" },
      { input: "abc123", output: "ABC123" }
    ],
    hint: ".upper() 메서드를 사용하세요.",
    starterCode: "s = input()\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 17, title: "문자 개수 세기", category: "문자열", difficulty: "보통",
    description: "첫 줄에 문자열, 둘째 줄에 찾을 문자를 입력받아 그 문자가 몇 번 등장하는지 출력하세요.",
    examples: [{ input: "banana\na", output: "3" }],
    testCases: [
      { input: "banana\na", output: "3" },
      { input: "hello\nl", output: "2" },
      { input: "python\nx", output: "0" }
    ],
    hint: ".count() 메서드를 사용하세요.",
    starterCode: "s = input()\nc = input()\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 18, title: "리스트 최솟값과 최댓값", category: "리스트", difficulty: "보통",
    description: "첫 줄에 정수 N, 다음 줄에 N개의 정수를 공백으로 구분해 입력받아 최솟값과 최댓값을 공백으로 구분해 출력하세요.",
    examples: [{ input: "5\n3 1 4 1 5", output: "1 5" }],
    testCases: [
      { input: "5\n3 1 4 1 5", output: "1 5" },
      { input: "3\n10 20 30", output: "10 30" },
      { input: "4\n-3 -1 -5 -2", output: "-5 -1" }
    ],
    hint: "min()과 max() 함수를 사용하세요.",
    starterCode: "n = int(input())\nnums = list(map(int, input().split()))\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 19, title: "최대공약수", category: "알고리즘", difficulty: "어려움",
    description: "두 정수 a, b를 입력받아 최대공약수(GCD)를 출력하세요.",
    examples: [{ input: "12\n8", output: "4" }],
    testCases: [
      { input: "12\n8", output: "4" },
      { input: "36\n24", output: "12" },
      { input: "7\n5", output: "1" }
    ],
    hint: "유클리드 호제법: gcd(a, b) = gcd(b, a % b), b가 0이면 a가 GCD",
    starterCode: "a = int(input())\nb = int(input())\n# 여기에 코드를 작성하세요\n"
  },
  {
    id: 20, title: "별 삼각형", category: "반복문", difficulty: "보통",
    description: "정수 N을 입력받아 N줄짜리 별 삼각형을 출력하세요.<br>1줄에 *, 2줄에 **, ..., N줄에 *...*",
    examples: [{ input: "4", output: "*\n**\n***\n****" }],
    testCases: [
      { input: "4", output: "*\n**\n***\n****" },
      { input: "3", output: "*\n**\n***" },
      { input: "1", output: "*" }
    ],
    hint: "for i in range(1, N+1): print('*' * i) 를 사용하세요.",
    starterCode: "n = int(input())\n# 여기에 코드를 작성하세요\n"
  }
];
