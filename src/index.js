const box = document.querySelector("div.box");

window.addEventListener("scroll", function() {
  console.log(window.innerHeight);
  console.log(box.getBoundingClientRect().top);

  if (box.getBoundingClientRect().top < window.innerHeight) {
    setTimeout(() => {
      box.style.background = "red";
    }, 2000);
  } else if (box.getBoundingClientRect().top > window.innerHeight) {
    box.style.background = "#009879";
  }
});

/* 
  To make the transition more smooth we could just add a 
  class to the selected element and then transtion the elment in 
  view . 

*/
