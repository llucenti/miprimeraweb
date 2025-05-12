
let nombre_field;
let pass_field;
let nacimiento_field;
let color_field;
let edad_field;
let subscribe_field;
let contact_form;


document.addEventListener("DOMContentLoaded", (event) => {
	nombre_field = document.getElementById("campo-nombre");
	pass_field = document.getElementById("campo-pass");
	nacimiento_field = document.getElementById("campo-nacimiento");
	color_field = document.getElementById("campo-favorito");
	edad_field = document.getElementById("campo-edad");
	subscribe_field = document.getElementById("subscribe");
	contact_form = document.getElementById("contact-form");
	
	subscribe_field.addEventListener("click", function(event){
		if (subscribe_field.checked) {
		alert("jajaja! Tu alma es mía");
		}
		else{
			alert("Nooooo, vuelve dame tu alma!");
		}
	});
	
	contact_form.addEventListener("submit", (event) => {
		let send = true;
		if (nombre_field.value.length <= 2 || nombre_field.value.length > 32){
			send = false;
			nombre_field.style.border = "1px solid red";
		}
		else{
			nombre_field.style.border = "1px solid green";
		}
		
		if (nacimiento_field.value == ""){
			send = false;
			nacimiento_field.style.border = "1px solid red";
		}
		else{
			let date = nacimiento_field.value.split("-");
			
			let year = parseInt(date[0]);
			let month = parseInt(date[1]);
			let day = parseInt(date[2]);
			
			if (isNan(year) || isNaN(month) || isNan(day)) {
				send = false;
				nacimiento_field.style.border = "1px solid red";
			}
			
			if (year <= 0 || year > 2025) {
				send = false;
				nacimiento_field.style.border = "1px solid red";
			}
			
			if (month <== 0 || month > 12) {
				send = false;
				nacimiento_field.style.border = "1px solid red";
			}
			
			if (day <== 0 || day > 31) {
				send = false;
				nacimiento_field.style.border = "1px solid red";
			}
			
		else{
			nombre_field.style.border = "1px solid green";
		}
		}
		
		
		send = false;
		if (!send){
			event.preventDefault();
		}
		
	});
});