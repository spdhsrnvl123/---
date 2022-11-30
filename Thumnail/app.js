"use strict"

// INPUT IMPLEMENTING

const inputFields = document.querySelectorAll(".input__field");

const updateInputValue = (e)=>{
  const target = e.target.dataset.set;
  document.querySelector(`.${target}`).textContent = e.target.value
}

inputFields.forEach((value)=>{
  value.addEventListener("input",updateInputValue)
})

//BACKGROUND GENERATORS
//RANDOM COLOR

const randomSolidBtn = document.querySelector('.random__solid');
const randomGradientBtn = document.querySelector(".random__gradient");
const domBody = document.body; //body 접근 방법
const preview = document.querySelector(".preview");
const backgroundBtns = document.querySelector('#background__btn__container').children;
const componentsBtns = document.querySelectorAll(".component__opt");

//rgb에서 hex코드로 변환하는 코드
const randomRGB = ()=>{
  let rgb = '';
  rgb += (Math.floor(Math.random()*90+1)+150).toString(16).padStart(2,'0');
  rgb += (Math.floor(Math.random()*90+1)+150).toString(16).padStart(2,'0');
  rgb += (Math.floor(Math.random()*90+1)+150).toString(16).padStart(2,'0');
  return rgb;
}

const changeBackground = ()=>{
  const rgb = randomRGB();

  [...backgroundBtns].forEach((e)=>{
    e.classList.remove('selected');
  })

  randomSolidBtn.classList.add('selected');

  domBody.style.background = preview.style.background = "";
  domBody.style.backgroundColor = preview.style.backgroundColor = `#${rgb}`
}

randomSolidBtn.addEventListener("click",changeBackground);

const changeGradient = ()=>{
  const rgb1 = randomRGB();
  const rgb2 = randomRGB();

  [...backgroundBtns].forEach((e)=>{
    e.classList.remove('selected');
  });

  randomGradientBtn.classList.add("selected");
  domBody.style.background = `linear-gradient(to bottom, #${rgb1},#${rgb2})`;
  preview.style.background = `linear-gradient(to bottom, #${rgb1},#${rgb2})`;
}

randomGradientBtn.addEventListener("click",changeGradient);