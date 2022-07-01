function interest(){
	let principal  = document.getElementById("p").value;
	let time = document.getElementById("t").value;
	let rate = document.getElementById("r").value;
	let result = principal *time *rate /100;
	document.getElementById("info").innerHTML = result;
	//document.write(result);

}