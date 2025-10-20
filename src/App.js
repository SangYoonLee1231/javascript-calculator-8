import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 문자열 입력
      const inputStr = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요."
      );

      // 함수 1. 구분자 추출 함수
      const delimiters = extractDelimiters(inputStr);

      // 함수 2. 구분자 통한 숫자 추출 함수
      const numbers = extractNumbers(inputStr, delimiters);

      // 함수 3. 추출한 숫자를 모두 더하는 함수
      const sum = calculateSum(numbers);

      // 결과값 출력
      MissionUtils.Console.print(`결과 : ${sum}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
  }
}

export default App;

//

// 구분자 추출 함수 구현
function extractDelimiters(inputStr) {
  const delimitersArray = [",", ":"]; // 기본 구분자

  // 커스텀 구분자 처리
  if (inputStr.startsWith("//") && inputStr[3] === "\n") {
    const customDelimiter = inputStr[2];
    delimitersArray.push(customDelimiter);
  }

  return delimitersArray;
}

// 숫자 추출 함수 구현
function extractNumbers(inputStr, delimiters) {
  // 입력값이 실제 개행 문자 대신 '\n' 문자열을 포함할 수 있으므로 변환
  inputStr = inputStr.replace("\\n", "\n");

  // 커스텀 구분자가 있다면 "//;\n" 부분을 제거
  let targetStr = inputStr;
  if (inputStr.startsWith("//")) {
    targetStr = inputStr.split("\n")[1];
  }

  // 여러 구분자를 정규식으로 처리
  const regex = new RegExp(`[${delimiters.map((d) => "\\" + d).join("")}]`);
  const tokens = targetStr.split(regex);

  // 숫자로 변환 및 검증
  const numbers = tokens.map((token) => {
    const num = Number(token);
    if (isNaN(num)) throw new Error("유효하지 않은 숫자입니다.");
    if (num < 0) throw new Error("음수는 허용되지 않습니다.");
    return num;
  });

  return numbers;
}

// 숫자 합계 계산 함수 구현
function calculateSum(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
