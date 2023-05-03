
const modal = document.getElementById("modal")
function modalOn() {
    modal.style.display = "flex"
}
function isModalOn() {
    return modal.style.display === "flex"
}
function modalOff() {
    modal.style.display = "none"
}
const btnModal = document.getElementById("btn-modal")
btnModal.addEventListener("click", e => {
    modalOn()
})
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modalOff()
})
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modalOff()
    }
})
window.addEventListener("keyup", e => {
    if(isModalOn() && e.key === "Escape") {
        modalOff()
    }
})
const opacityImage = document.querySelector('.opacity-image');

const callback = ([entry], observer) => {
    entry.target.style.opacity = entry.intersectionRatio;
}

const observer = new IntersectionObserver(callback, {
  threshold: [...new Array(101)].map((_, i) => i / 100)
});

observer.observe(opacityImage);
const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0;
inners.forEach((inner) => {
    inner.style.width = `${outer.clientWidth}px`;})
    innerList.style.width = `${outer.clientWidth * inners.length}px`;
    const getInterval = () => {
        return setInterval(() => {
          currentIndex++;
          currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
          innerList.style.marginLeft = `-${outer.clientWidth * currentIndex+18}px`;
        }, 2000);
      }
      
      let interval = getInterval();