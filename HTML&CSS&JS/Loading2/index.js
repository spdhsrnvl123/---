const Selector = document.querySelector('.container');

Selector.children[3].remove();

const ST = document.createElement('div');
ST.textContent = 'START';
Selector.append(ST);
Selector.children[3].classList.add('start');

function color_transform(e) {
    e.target.style.transform = 'rotate(360deg)'
    e.target.style.transition = 'all 2s ease'
}

Selector.children[3].addEventListener('mouseover', color_transform);