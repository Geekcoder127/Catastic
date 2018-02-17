var cathtml = '<img src="http://thecatapi.com/api/images/get?format=src&type=gif" id="catimg">';

window.onload = function(){
	generate();
	document.getElementById("catimg").addEventListener("click",function(){
		location.reload();
	});
}
function generate(){
	document.getElementById("catimg").outerHTML = cathtml;
}