var drop = document.getElementById('drop');
var menu = document.getElementById('menu');
var navlist = document.getElementById('navlist');
var topHeader = document.getElementById('topHeader');

// MOBILE MENU TOGGLE
drop.addEventListener('click',function () {
  if (navlist.style.display === "none") {
        navlist.style.display = "block";
        topHeader.style.backgroundColor = "#2b2b2b";
        drop.innerHTML = "<i class=\"fas fa-times\"></i></a>";

    } else {
        navlist.style.display = "none";
        topHeader.style.backgroundColor = "transparent";
        drop.innerHTML = "<i class=\"fas fa-bars\"></i></a>";
    };
});
