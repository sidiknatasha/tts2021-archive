/*$('#sponsor-carousel').carousel({
    interval: 3000,
    cycle: true
  }); */


// When button is clicked, shows dropdown content
function showDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Closes the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
}