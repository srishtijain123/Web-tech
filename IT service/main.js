
const faders = document.querySelectorAll('.fade-in');


const appearOptions = {
  threshold: 1, 
  rootMargin: "0px 0px -80px 0px"
} ;
   
const appearOnScroll = new IntersectionObserver(
  function(entries , apperarOnScoll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return ;
      }
      else{
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target) ;
      }
    });
  }, appearOptions);


faders.forEach(fader => {
  appearOnScroll.observe(fader);
})


var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('blockquote', .5, {x:300, opacity: 0} , "=-2");
// tl.from('span', 1, { width: 0}, "=-.5");
tl.from('#img6', 1, {top:-200, opacity: 0,ease: Power4.easeInOut}, "=-2");
tl.from('#img7', 1, {x:300, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// tl2.from("#innerbox", 1, {opacity: 0, scale: 0});
// tl2.to("#innerbox", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}

