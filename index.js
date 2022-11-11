// jQuery(document).ready(function($) {
//     "use strict";
//     $('#customers-testimonials').owlCarousel( {
//         loop: true,
//         center: true,
//         items: 3,
//         margin: 30,
//         autoplay: true,
//         dots:true,
//         nav:true,
//         autoplayTimeout: 8500,
//         smartSpeed: 450,
//         navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//         responsive: {
//           0: {
//             items: 1
//           },
//           768: {
//             items: 2
//           },
//           1170: {
//             items: 3
//           }
//         }
//       });
//     });




function popUp(){
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = 'book';
  var cancel = document.createElement('div');
  cancel.className = 'cancel';
  cancel.innerHTML = 'close';
  cancel.onclick = function(e) { popup.parentNode.removeChild(popup) };
  var message = document.createElement('span');
  message.innerHTML = "this is a test message";
  popup.appendChild(message);
  popup.appendChild(cancel);
  document.body.appendChild(popup);
}


function openPopup() {
  document.getElementById('book').style.display = 'block';
}

function closePopup() {
  document.getElementById('book').style.display = 'none';
}





// navbar

const navbar = document.querySelector("#navbar_top");
window.onscroll = () => {
  if (window.scrollY > 800) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
