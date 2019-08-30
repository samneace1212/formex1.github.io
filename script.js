var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);

var newCar = document.getElementById("div2");
var button1 = document.getElementById("AddCar");

button1.addEventListener("click", function(){

	if(newCar.value.length > 0){
	var nLi  = document.createElement("li");
var node1 = document.createTextNode(newCar.value);
nLi.appendChild(node1);

var element1 = document.getElementById("DADA");
element1.appendChild(nLi);
newCar.value = "";
}
})


