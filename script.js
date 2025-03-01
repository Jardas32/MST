            //    Animation-element

const Animation = function(entries, observer) {
      entries.forEach(entri => {
              if(entri.isIntersecting) {
                 entri.target.classList.add('active');
                 observer.unobserve(entri.target);
              }
      })
};

let observer = new IntersectionObserver(Animation);

let targets = document.querySelectorAll('.anim');
targets.forEach(targe => {
    observer.observe(targe);
}); 

                    // Go-UP
             
const btgoup = document.querySelector(`.btgoup`);

btgoup.addEventListener(`click`, goTop);
window.addEventListener(`scroll`, trackskroll);

function trackskroll() {
  const offset = window.pageYOffset;
  const coord = document.documentElement.clientHeight;
  if (offset > coord) {
      btgoup.classList.add('goupclass');
  }
  else {
      btgoup.classList.remove('goupclass');
    
  }
};

function goTop() {
    if (window.pageYOffset > 0 ) {
        window.scrollBy(0, -30);
        setTimeout(goTop, 0);
    }
}; 

