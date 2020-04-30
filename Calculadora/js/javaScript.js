	var numeroEmTela = '';
	var numerosConcatenados = '';
function inputs(primeiroNumero){
	//document.querySelector("#txtstart").value = primeiroNumero;	
	numeroEmTela += primeiroNumero;
	document.querySelector("#txtstart").value = numeroEmTela;	
};

function soma(){
	
	var contS = numeroEmTela.match(/.+/);	
	var primeiroNumero = parseFloat(numeroEmTela);	
	if(contS){
		var lugarSoma = numeroEmTela.indexOf("+");
		var tamanhoString = numeroEmTela.length;
		var segundoNumero = numeroEmTela.substring(lugarSoma + 1, tamanhoString);		
	 }
	var resultadoSoma = primeiroNumero + parseFloat(segundoNumero);
	numeroEmTela = resultadoSoma;
	document.querySelector("#txtstart").value = resultadoSoma;	
}

function div(){
	
	var contS = numeroEmTela.match("/");	
	var primeiroNumero = parseFloat(numeroEmTela);	
	if(contS){
		var lugarSoma = numeroEmTela.indexOf("/");
		
		var tamanhoString = numeroEmTela.length;
		var segundoNumero = numeroEmTela.substring(lugarSoma + 1, tamanhoString);		
	}
	var resultadoDiv = primeiroNumero / parseFloat(segundoNumero);
	numeroEmTela = resultadoDiv;
	document.querySelector("#txtstart").value = resultadoDiv;	
}

function sub(){
	
	var contS = numeroEmTela.match(/.-/);
	console.log(contS)	
	var primeiroNumero = parseFloat(numeroEmTela);	
	if(contS){
		var lugarSoma = numeroEmTela.indexOf("-");		
		var tamanhoString = numeroEmTela.length;
		var segundoNumero = numeroEmTela.substring(lugarSoma + 1, tamanhoString);		
	}
	var resultadoSub = primeiroNumero - parseFloat(segundoNumero);
	numeroEmTela = resultadoSub;
	document.querySelector("#txtstart").value = numeroEmTela;	
}

function mult(){
	
	var contS = numeroEmTela.match(/.*/);
	console.log(contS)	
	var primeiroNumero = parseFloat(numeroEmTela);	
	if(contS){
		var lugarSoma = numeroEmTela.indexOf("*");		
		var tamanhoString = numeroEmTela.length;
		var segundoNumero = numeroEmTela.substring(lugarSoma + 1, tamanhoString);		
	}
	var resultadoMult = primeiroNumero * parseFloat(segundoNumero);
	numeroEmTela = resultadoMult;
	document.querySelector("#txtstart").value = resultadoMult ;	
}

function Limpar() {
	numeroEmTela = '';
	document.querySelector("#txtstart").value = numeroEmTela;	
}

function conta(){
	if(numeroEmTela.indexOf("+") >= 0){
		
		return soma();	
	}
	else if(numeroEmTela.indexOf("/") >= 0){
		return div();
	}
	else if(numeroEmTela.indexOf("-") >= 0){
		
		return sub();
	}
	else if(numeroEmTela.indexOf("*") >= 0){
		return mult();
	}


}

