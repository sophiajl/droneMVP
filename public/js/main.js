/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$("#left").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});

$("#right").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});
