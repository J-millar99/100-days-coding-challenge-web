// 1. h1 요소를 선택 (DOM을 사용)

let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];
console.dir(h1Element);

// 2. parent에 접근하여 h1 요소에 저장된 것을 사용 (body 접근)
console.dir(h1Element.parentElement);

// bonus. h1의 형제인 p 요소에 접근
console.dir(h1Element.nextElementSibling);

// 3. getElementById를 사용
h1Element = document.getElementById('first-title');

console.dir(h1Element);

// 4. 두 번째 p 요소를 querySelector를 사용하여 접근
let highlightedParagraph = document.querySelector('.highlighted-paragraph')

console.dir(highlightedParagraph);

// 5. 텍스트 내용을 바꾸기
highlightedParagraph.textContent = "change text";