//criar referencia aos elementos da pagina
const frm= document.querySelector("form");
const resp= document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    e.preventDefault(); //Não envia o formulário

    const divisores= Number(frm.inNumero.value);

    let resposta=""

    for(i=1;i<=divisores;i++){
        if(divisores%i==0){
            resposta += i + "\n";
        }
    }
    resp.innerText = resposta;
})