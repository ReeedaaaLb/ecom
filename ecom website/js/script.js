

var img = document.getElementById('imgMid');
var i = 0;
var images = ['jacob-vega-clj6Xe__fQ8-unsplash.jpg','jacob-vega-H9Nv9So1EEg-unsplash.jpg','jacob-vega-gUkHRjfLRik-unsplash.jpg'];



function slide() {
    if ( i > images[2]) {
     img.innerHTML = img ;   
    }
    else {
        img.innerHTML = "<img src ="+ images [i] +">";
    }
    setInterval(slide,3000);
}
  
  