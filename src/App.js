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

function extractDelimiters(inputStr) {}

function extractNumbers(inputStr, delimiters) {}

function calculateSum(numbers) {}
