# 📝썸네일을 주제로 한 바닐라 자바스크립트 연습

## ✨INPUT IMPLEMENTING

```js
//The input 이벤트는 change 이벤트와는 달리 value 속성이 바뀔 시마다 반드시 일어난다.
// 이 예시는 <input> 요소에 값을 입력하자마자 로그에 기록한다.
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

```
[input 이벤트 mdn 문서](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/input_event)


### 🚀 HTML
```html
      <div id="capture" class="preview">
        <ul class="components" id="comp__opt1">
          <li class="render title">제목을 입력하세요</li>
          <li class="render subtitle">부제목을 입력하세요</li>
          <li class="render category">분류를 입력하세요</li>
        </ul>
      </div>
      <div class="control__panel">
        <div class="inputFields">
            <input class="input__field input__title" data-set="title" type="text" spellcheck="false" placeholder=">제목을 입력하세요">
            <input class="input__field input__subtitle" data-set="subtitle" type="text" spellcheck="false" placeholder=">부제목을 입력하세요">
            <input class="input__field input__category" data-set="category" type="text" spellcheck="false" placeholder=">분류를 입력하세요">
        </div>
```
### 🚀 JavaScript
```js
const inputFields = document.querySelectorAll(".input__field");

const updateInputValue = (e)=>{
  const target = e.target.dataset.set;
  document.querySelector(`.${target}`).textContent = e.target.value
}

inputFields.forEach((value)=>{
  value.addEventListener("input",updateInputValue)
})

```
> 구현 방법
1) input__field 클래스에 속한 input 태그를 DOM 객체로 만들어준다.
2) input태그 세개를 반복문으로 input 이벤트를 설정해 준다.
3) input 이벤트가 발생할 때 마다 실행될 updateInputValue 함수를 만들어준다.
4) updateInputValue는 input DOM에 설정된 data-set 속성에 있는 값을 이용하여 preview 박스 안에있는 목록에 접근한다.<br />
-> data-set에 설정된 값이 preview 박스 안에 있는 목록에 클래스 값과 일치한다.
5) updateInputValue 함수에는 e.target.value인 이벤트 속성을 사용하여 설정해준 DOM객체에 value 값을 넣어준다.

❗️Dataset 관련해서는 블로그 참고