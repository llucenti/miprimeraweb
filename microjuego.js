for (let contador = 0; contador <= 10; contador++) {

	let contador = 0;
	let numero = Math.floor(Math.random()*100)+1;	
	
	function compara_numero ()
	{
		contador++;
		
		let my_num_input = document.getElementById("field-number");
		let submit_input = document.getElementById("field-submit");
		
		let my_num = my_num_input.value;
		let resultado = document.getElementById("resultado");
		
		if (my_num > numero) {
			resultado.innerHTML = "<em class=\"error\">El número a adivinar es <strong>más pequeño</strong> que "+my_num+"</em>";
		}
		else if (my_num < numero) {
			resultado.innerHTML = "<em class=\"error\">El número a adivinar es <strong>más grande</strong> que "+my_num+"</em>";
		}
		else{
			resultado.innerHTML = "<em class=\"you-win\">¡Lo has acertado, <strong>era "+my_num+"</strong>, lo has hecho en solo "+contador+" intentos, wow!";
			contador++;
		}
		
		my_num_input.value = "";
		
		my_num_input.focus();
	}
}