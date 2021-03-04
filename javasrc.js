var formyf = 1;
function Myfunc() {
  	// body...
  	if(formyf%2==0){
  	var html = document.getElementsByTagName('html')[0];
	html.style.setProperty("--bg-color", "white");
	html.style.setProperty("--tex-color", "black");
	}else{
	var html = document.getElementsByTagName('html')[0];
	html.style.setProperty("--bg-color", "black");
	html.style.setProperty("--tex-color", "white");
	}
	formyf++;
 }
 function myFunction(x) {
  x.classList.toggle("change");
}
