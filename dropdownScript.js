var $ = function(id) {
    return document.getElementById(id);
}
      
function dropdownMenu() {
   if ($('logo_btn').checked == true) {
     $('nav_bar').style.display = "block";
     $('join_button').style.display = "block";
   }
   
   else {
     $('nav_bar').style.display = "none";
     $('join_button').style.display = "none";
   }
}