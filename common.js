let mybutton = document.getElementById("myBtn");
        
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





// let currNum
// let ticks;
// let fresh = true;
// const time = 1000;

// const stat = document.querySelector('#number')

// function scrollNumber(digits) {
//     stat.querySelectorAll('span[data-value]').forEach((tick, i) => {
//         tick.style.transform = `translateY(-${100 * parseInt(digits[i])}%)`;
//     })

//     setTimeout(() => {
//         stat.style.width = `${digits.length * 28}px`;
//     }, 100)
// }

// function addDigit(digit, fresh) {
//     const spanList = Array(10)
//         .join(0)
//         .split(0)
//         .map((x, j) => `<span>${j}</span>`)
//         .join('')

//     stat.insertAdjacentHTML(
//         "beforeend",
//         `<span style="transform: translateY(-1000%)" data-value="${digit}">
//         ${spanList}
//       </span>`)

//     const firstDigit = stat.lastElementChild

//     setTimeout(() => {
//         firstDigit.className = "visible";
//     }, fresh ? 0 : 2000);
// }

// function removeDigit() {
//     const firstDigit = stat.lastElementChild
//     firstDigit.classList.remove("visible");
//     setTimeout(() => {
//         firstDigit.remove();
//     }, 2000);
// }

// function setup(startNum) {
//     const digits = startNum.toString().split('')

//     for (let i = 0; i < digits.length; i++) {
//         addDigit('0', true)
//     }

//     scrollNumber(['0'])

//     setTimeout(() => scrollNumber(digits), 2000)
//     currNum = startNum
// }

// function rollToNumber(idx, num) {
//     el.style.transform = `translateY(-${100 - num * 10}%)`;
// }

// function update(num) {
//     if (!num) {
//         num = Math.round(Math.random() * 100)
//     }
//     const toDigits = num.toString().split('')
//     const fromDigits = currNum.toString().split('')

//     for (let i = fromDigits.length - toDigits.length; i > 0; i--) {
//         removeDigit()
//     }
//     for (let i = toDigits.length - fromDigits.length; i > 0; i--) {
//         addDigit(toDigits[i]);
//     }

//     scrollNumber(toDigits)
//     currNum = num
// }

// setup(521)
// document.querySelectorAll(".projcard-description").forEach(function(box) {
// 	$clamp(box, {clamp: 6});
// });
// const items = document.querySelectorAll(".FAQ .accordion a");
// function toggleAccordion(){
//   this.classList.toggle('.FAQ active');
//   this.nextElementSibling.classList.toggle('.FAQ active');
// }
// items.forEach(item => item.addEventListener('click', toggleAccordion));
// // counting interval

// const counters = document.querySelectorAll('.value');
// const speed = 200;

// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
     
//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 1);
//         }else{
//           counter.innerText = value;
//         }
     
//    }
   
//    animate();
// });
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

