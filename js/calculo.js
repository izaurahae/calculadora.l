var div= document.getElementById("resp");



function calcular(){
    let nome =document.getElementById("nome").value;
    let nota1=  parseFloat(document.getElementById("b1").value);
    let nota2=parseFloat (document.getElementById("b2").value);
    let nota3=parseFloat (document.getElementById("b3").value);
    let text;


    let media= (nota1+ nota2+ nota3)/3;
     
    if(media>=6){
        text=`<h2> A sua média é ${media.toFixed(2)}. Parabéns, ${nome} , você foi aprovado!</h2>`;
    }else{
        text=`<h2> A sua média é ${media.toFixed(2)}. Você foi reprovado, ${nome}, e precisa fazer a recuperação.</h2>`;
    }

    div.innerHTML=text;
    div.style.color="#ffffff";
    div.style.fontSize="20px";
}


