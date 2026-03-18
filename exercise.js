// 1) 두 개의 <button> 요소를 선택하고, 각각 다른 변수에 저장하세요.
//    - 첫 번째 버튼은 "id"를 사용하지 않고 선택하세요.
//    - 두 번째 버튼은 "id"를 사용하여 선택하세요.

const firstButton = document.querySelector("button");
const secondButton = document.getElementById("second-button");

// 2) 두 버튼 모두에 "click" 이벤트 리스너를 추가하세요 (각각 다른 함수).
//    - 클릭된 버튼을 console.dir()로 출력하세요.
//    - 첫 번째 버튼은 저장된 변수를 사용해서 출력하세요.
//    - 두 번째 버튼은 저장된 변수를 사용하지 않고 출력하세요.

// function firstButtonEventListener() {
//   console.dir(firstButton);
// }

// function secondButtonEventListener(event) {
//   console.dir(event.target);
// }

// firstButton.addEventListener("click", firstButtonEventListener);
// secondButton.addEventListener("click", secondButtonEventListener);

// 3) 페이지에 있는 설명 텍스트에서 언급된 <p> 요소들(첫 번째와 세 번째 문단)을 선택하고 저장하세요.
//    - document를 따라 내려가며(탐색하며) 해당 요소들을 선택하세요.
//    - DOM 탐색이 어렵다면 "id"를 사용해도 되지만, 가능하면 직접 탐색을 시도해보세요.

const firstParagraph = document.body.children[2].children[1];
console.log(firstParagraph);
const thirdParagraph = document.body.children[2].children[3];
console.log(thirdParagraph);

// 4) (2)에서 만든 함수들을 다음과 같이 수정하세요.
//    - 첫 번째 버튼은 세 번째 문단(버튼 바로 위의 <p>)을 제거합니다.
//    - 두 번째 버튼은 첫 번째 문단의 배경색을 파란색으로 변경합니다.

function firstButtonEventListener() {
  thirdParagraph.remove();
}

function secondButtonEventListener(event) {
  // firstParagraph.style.backgroundColor = 'blue';
    firstParagraph.className = "blue-bg"; // 클래스 이름 변경
//   firstParagraph.classList.add("blue-bg"); // 클래스 추가
}

firstButton.addEventListener("click", firstButtonEventListener);
secondButton.addEventListener("click", secondButtonEventListener);

// 5) (4)를 두 가지 방식으로 구현하세요.
//    - "inline styles"를 변경하는 방법
//    - CSS 클래스를 추가하는 방법
//    참고: 해당 클래스는 styles.css 파일에 먼저 추가해야 합니다.
