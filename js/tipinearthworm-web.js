setTimeout(tip(), 1000);
function tip(){
	var tip=confirm("Earthworm-Web is no longer updated.\nClick to go to Quinn-Web.");
	if (tip == true){
		window.location=("https://quinn0823.github.io");
	}
}