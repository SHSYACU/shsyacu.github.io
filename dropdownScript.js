var $ = function(id) {
    return document.getElementById(id);
}
    
    /* Thank you Craig Buckler */
var pfx = ["webkit", "moz", "MS", "o", ""];
function PrefixedEvent(element, type, callback) {
	for (var p = 0; p < pfx.length; p++) {
		if (!pfx[p]) type = type.toLowerCase();
		element.addEventListener(pfx[p]+type, callback, false);
	}
}

function dropdownMenu() {
   if ($('logo_btn').checked == true) {
     $('nav_bar').style.display = "block";
     $('join_button').style.display = "block";
     $('headed').style.backgroundColor = "white";
     $('container').classList.add('mobileAnimClass');
   }
   
   else {
     $('nav_bar').style.display = "none";
     $('join_button').style.display = "none";
     $('headed').style.backgroundColor = "transparent";
     $('container').classList.remove('mobileAnimClass');
   }
}