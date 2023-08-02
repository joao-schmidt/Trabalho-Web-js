//PROBLEMA N: 1153
const frm= document.querySelector("form");
const resp= document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //Não envia o formulário
const n = Number(frm.inNumero.value); 
  
     let resposta = "" 
     let fat = 1 
  
    
     for(let i = 1; i<= n; i++) { 
         fat = fat*i 
     } 
     resposta = fat + "\n"; 
    
     resp.innerText = resposta;
    })