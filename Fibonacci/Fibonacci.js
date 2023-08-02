const frm= document.querySelector("form");
const resp= document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //Não envia o formulário
const n = Number(frm.inNumero.value); 
let resposta = "" 

fibonacci = 0;
v1= 0;
v2 = 1;

for (i=3;i<=n;i++) {
    fibonacci = v1 + v2;
    v1 = v2;
    resposta+=(v2 = fibonacci)+"\n";
}
resp.innerText = resposta;

})