//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
var bntCalculate= document.querySelector("button");
bntCalculate.addEventListener("click",function(){
    //prezzo del panino
    var burgerPrice=5;
    console.log(burgerPrice);
    //aggiungere ingredienti
    var checkmark=document.querySelectorAll("input[type=checkbox]");
    console.log(checkmark);
    for(var i=0;i<checkmark.length;i++){
        var ingredient=checkmark[i]
        if(ingredient.checked){
            burgerPrice=burgerPrice+Number(ingredient.getAttribute("data-price"));
        }
    }
    console.log(burgerPrice);
})