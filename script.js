// $(document).ready(function () {
//     $('#gototop').hide();
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) {
//           $('#gototop').show();
//         } else {
//           $('#gototop').hide();
//         }
//     });  
    
//     $('#gototop').click(function () {
//         $('#gototop').hide();
//         $('body,html').animate({
//             scrollTop: 0
//         }, 800);
//         return false;
//     });
// })

onscroll = () => {
  if(document.documentElement.scrollTop > 100){
    setTimeout(function(){ document.getElementById('gototop').classList.remove('d-none') }, 500);
  }else{
    setTimeout(function(){ document.getElementById('gototop').classList.add('d-none') }, 500);
  }
};

function gototop () {
  window.scrollTo(0, 0);
  setTimeout(function(){ document.getElementById('gototop').classList.add('d-none') }, 500);
}