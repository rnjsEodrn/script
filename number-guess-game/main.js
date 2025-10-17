//랜덤 번호 지정
//유저가 번호 입력 -> go 버튼 누름
//유저가 번호를 맞추면 -> 맞췄습니다.
//랜덤번호 < 입력번호 -> Down
//랜덤번호 > 입력번호 -> Up
//Reset 버튼을 누르면 리셋
//5번의 기회를 다쓰면 게임 종료 (버튼 disable)
//유저가 1~100 범위 밖의 숫자 입력 -> 알려주고 기회는 줄 지 않음
//유저가 입력한 번호를 다시 입력 -> 알려주고 기회는 줄 지 않음

let randomNum = 0;
let chances = 0;
let userValues = [];
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let result = document.getElementById('result');
let resetButton = document.getElementById('reset-button');
let chanceArea = document.getElementById('chance-area');

playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', clear);

function play() {
  let userValue = userInput.value;

  if(!validate(userValue)){
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 : ${chances}`;

  if (chances < 1) {
    playButton.disabled = true;
  }

  if (userValue < randomNum) {
    result.textContent = 'Up!!!';
  } else if (randomNum < userValue) {
    result.textContent = 'Down!!!';
  } else {
    result.textContent = '맞췄습니다!!!';
    playButton.disabled = true;
  }
}

function reset() {
  pickRandomNum();
  userValues = [];
  result.textContent = '결과 값이 여기 나옵니다.';
  chances = 5;
  chanceArea.textContent = `남은 기회 : ${chances}`;
  clear();
}

function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  console.log('정답', randomNum);
}

function clear() {
  userInput.value = '';
}

function validate(userValue) {
  if (userValue < 1 || 100 < userValue) {
    result.textContent = '범위를 밖의 숫자입니다. 다시 입력해주세요.';
    return false;
  }
  if (userValues.includes(userValue)) {
    result.textContent = '입력한 적 있는 숫자입니다. 다시 입력해주세요.';
    return false;
  }

  userValues.push(userValue);
  return true;
}

reset();
