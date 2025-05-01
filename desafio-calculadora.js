// Função principal que calcula o saldo de vitórias e retorna o nível do herói
let resultado = calcularRanked(75, 30)
console.log(resultado)

function calcularRanked(vitorias, derrotas){
	let saldo = vitorias - derrotas
    let nivel = ""; // Variável para armazenar o nível do jogador
    
     // Verificação do nível com base na quantidade de vitórias
	if (vitorias < 10) {
    	nivel = "Ferro";
    } else if (vitorias <= 20) {
    	nivel = "Bronze";
	} else if (vitorias <= 50) {
    	nivel = "Prata";
    } else if (vitorias <= 80) {
    	nivel = "Ouro";
    } else if (vitorias <= 90) {
    	nivel = "Diamante";
    } else if (vitorias <= 100) {
    	nivel = "Lendário";
    } else {
    	nivel = "Imortal"; 
    }
  	return ("O Herói tem saldo de " + saldo + " e está no nível de " + nivel);
 
}
