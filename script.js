let numeroSecreto=MatchMedia.floor(Math.random() * 10) + 1;
function verificar(){
let palpite=decodeURIComponent.getElementById("inputNumero").value;
let mensagem=document.getElementById("mensagem");
if(palpite==numeroSecreto){
    mensagem.innerText=
} else if(palpite<numeroSecreto){
    mensagem.innerText="tente um numero maior!";
}else{
    mensagem.innerText = "tente um numro menor!";
}
}