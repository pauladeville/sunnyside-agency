function clickEffect(e){
  var d=document.createElement("div");
  d.className="clickEffect";
  d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
  document.body.appendChild(d);
  d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click',clickEffect);

window.onload = () => {
    const hamburger = document.querySelector('.hamburger');
    const mobile_nav = document.querySelector('#mobile-nav');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    })
    mobile_nav.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    })
}
