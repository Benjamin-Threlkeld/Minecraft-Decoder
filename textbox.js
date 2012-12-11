function addElement(letter) {

var m = letter.toUpperCase();
var n = document.createElement("li");
var width = null;
if (m == "I" || m == "L" || m == "T"){
	width = "hw";
	//alert('Yep "'+m+'" is a half width letter');
}else {
	width = "fw";
	//alert('Nope "'+m+'" is not a half width letter');
}
n.className = n.className + "def " + width + " " + m.toLowerCase();
n.appendChild(document.createTextNode(m.toLowerCase()));
document.getElementById("txtbx").appendChild(n);
}
function removeElement() {
txtbx.removeChild(txtbx.lastChild);
}
