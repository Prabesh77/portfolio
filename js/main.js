class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const txtElement2 = document.querySelector('.txt-type2');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Jquery

$(document).ready(function() {
  $('.hamburger').click(function() {
   $(this).toggleClass('active');
   $('.navigation-menu').toggleClass('toggle-list');
  });

  
});

$(function() {
        $('.chart').easyPieChart({
             barColor: '#ef1e25',
    // The color of the track for the bar, false to disable rendering.
              trackColor: '#f2f2f2',
              // The color of the scale lines, false to disable rendering.
              scaleColor: '#dfe0e0',
              // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
              lineCap: 'round',
              // Width of the bar line in px.
              lineWidth: 5,
              // Size of the pie chart in px. It will always be a square.
              size: 150,
              // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
              animate: 2000,
              // Callback function that is called at the start of any animation (only if animate is not false).
              onStart: $.noop,
              // Callback function that is called at the end of any animation (only if animate is not false).
              onStop: $.noop
           });
        });


// my projects slider

let invalids = document.querySelectorAll(".pro > a");
let status = document.querySelector(".active");
let forms = document.querySelectorAll(".pros");

for (let i = 0; i < invalids.length; i++) {
  invalids[i].addEventListener("click", function (e) {
    e.preventDefault();

    for (let i = 0; i < invalids.length; i++) {
      invalids[i].classList.remove("active");
      forms[i].classList.remove("show");
    }
    invalids[i].classList.add("active");
    forms[i].classList.add("show");
  })
}

$(window).scroll(function() {
  if($(this).scrollTop() > 10) {
    $('#header').addClass('sticky');
  }
  else {
    $('#header').removeClass('sticky');
  }
})