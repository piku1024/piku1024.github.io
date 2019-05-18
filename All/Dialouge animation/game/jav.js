$('section').mousemove(function (e) {
    var moveX = (e.pageX * -1 / 5);
    var moveY = (e.pageY * -1 / 5);
    $(this).css('background-position', moveX + 'px ' + moveY + 'px ')
})

//    $('section').on('click', function () {
//       $(this).toggleClass('clicked');
//   })   
// Get the modal
var modal = document.getElementById('id01');

// Get the button that opens the modal
var btn = document.getElementById("trigger");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}