//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.
var bntCalculate= document.querySelector("button");
bntCalculate.addEventListener("click",function(){
    //prezzo del panino
    var burgerPrice=5;
    console.log(burgerPrice);
    //aggiungere ingredienti
    var checkmark=document.querySelectorAll("input[type=checkbox]");
    for(var i=0;i<checkmark.length;i++){
        var ingredient=checkmark[i]
        if(ingredient.checked){
            burgerPrice=burgerPrice+Number(ingredient.getAttribute("data-price"));
        }
    }
    console.log(burgerPrice);
    //coupon
    var coupon = ["ABC123","QWERT543","CIAO987"];
    //controllare la presenza di coupon
    var couponValue=document.getElementById("coupon").value;
    for(var i=0;i<coupon.length;i++){
    if(couponValue.includes(coupon[i])){
        burgerPrice=burgerPrice-(burgerPrice*0.20)
        console.log(burgerPrice);
    }
}
//Stampa prezzo su pagina
document.getElementById("price").innerHTML=burgerPrice +" €";
})