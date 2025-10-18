import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 사용자로부터 문자열 입력
      const inputStr = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요."
      );

      // 1. 구분자 추출 함수
      const delimiters = extractDelimiters(inputStr);

      // 2. 구분자 통한 숫자 추출 함수
      const numbers = extractNumbers(inputStr, delimiters);

      // 3. 추출한 숫자를 모두 더하는 함수
      const sum = calculateSum(numbers);

      // 결과값 출력
      MissionUtils.Console.print(`결과 : ${inputStr}`);
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
  if (inpurStr.startsWith("//") && inputStr[3] === "\n") {
    const customDelimiter = inputStr[2];
    delimitersArray.push(customDelimiter);
  }

  return delimitersArray;
}

// 숫자 추출 함수 구현
function extractNumbers(inputStr, delimiters) {}

// 숫자 합계 계산 함수 구현
function calculateSum(numbers) {}
