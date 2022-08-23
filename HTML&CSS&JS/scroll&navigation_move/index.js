//네비게이션바 이동
//F5눌렀을때 로딩되는 코드 구현하기
window.onload = function () {
  let navigator = document.querySelectorAll(".navigator li")
  let section = document.getElementsByTagName("section");
  var pageNum = 0;
  let totalNum = section.length;

  for (let i = 0; i < navigator.length; i++){
    navigator[i].addEventListener('click', () => {
      pageNum = i;
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior:'smooth'
      })
    movement();
    })
  }
  //스크롤 값에 따라서 각 섹션별로 section에 active를 추가 하기 위한 pageNum변수
  window.addEventListener("scroll", function (e) {
    var scroll = this.scrollY;
    for (let i = 0; i < totalNum; i++){
      if (scroll >= section[i].offsetTop - window.innerHeight/1.5 && scroll <= section[i].offsetTop - window.innerHeight/1.5 + section[i].offsetHeight) {
        pageNum = i;
        break;
      }
    }
    movement();
  })

  function movement() {
    for (var i = 0; i < totalNum; i++){
      section[i].classList.remove("active")
      navigator[i].classList.remove("active")
    }
    section[pageNum].classList.add("active")
    navigator[pageNum].classList.add("active")
  }
  movement();
}