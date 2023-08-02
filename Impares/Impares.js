//criar referencia aos elementos da pagina
const frm= document.querySelector("form");
const resp= document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //Não envia o formulário
//obter número informado 
const x = Number(frm.inNumero.value); 
  
let resposta = "" 

//criar um laço de repetição de 1 até n 
for(let i = 1; i<= x; i++) { 
    if(i%2 != 0) 
    resposta = resposta + i + "\n"; 
} 

// alterara o conteúdo da tag pre 
resp.innerText = resposta;
})