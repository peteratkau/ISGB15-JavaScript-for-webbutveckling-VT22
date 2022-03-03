console.log(document.getElementById("content"));


window.onload = function(){
	console.log(document.getElementById("content"));

	let username = "Alexander";
	username = 52 + "3";

	function write(username, text){
		document.write("<b>" + username + " Wrote: </b>" + text + "<br>");
	}

	function add(tal1, tal2){
		return tal1 + tal2;
	}

	write(username, "Hej");
	write("Lisa", add(5, 8));
}