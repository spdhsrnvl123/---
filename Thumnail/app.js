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