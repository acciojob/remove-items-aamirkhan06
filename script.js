//your JS code here. If required.
let colors=document.getElementById("colorSelect");
colors.innerHtml=`<option>Red</option> 
				<option>Green</option> 
				<option>White</option> 
				<option>Black</option>`
document.append(colors);
function removeCol(){
	let x = document.getElementById("colorSelect");
	x.remove(x.selectedIndex)
}