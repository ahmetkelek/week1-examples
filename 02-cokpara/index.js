let sumMoney = Number.MAX_SAFE_INTEGER;
let counterDom1 = 4;
let counterDom2 = 30;
let counterDom3 = 450000;
let counterDom4 = 9500000;
let counterDom5 = 120000000;
let startBasket = 0;
let startBasket2 = 0;
let startBasket3 = 0;
let startBasket4 = 0;
let startBasket5 = 0;

let domIncrease1 = document.querySelector("#increase1");
let domIncrease2 = document.querySelector("#increase2");
let domIncrease3 = document.querySelector("#increase3");
let domIncrease4 = document.querySelector("#increase4");
let domIncrease5 = document.querySelector("#increase5");

let domToplamPara = document.querySelector("#toplamPara");
let counterDomPrice1 = document.querySelector("#counter1");
let counterDomPrice2 = document.querySelector("#counter2");
let counterDomPrice3 = document.querySelector("#counter3");
let counterDomPrice4 = document.querySelector("#counter4");
let counterDomPrice5 = document.querySelector("#counter5");
let domBasket = document.querySelector("#basket1");
let domBasket2 = document.querySelector("#basket2");
let domBasket3 = document.querySelector("#basket3");
let domBasket4 = document.querySelector("#basket4");
let domBasket5 = document.querySelector("#basket5");

let domProductPrice = document.querySelector("#productPrice1");
domProductPrice.innerHTML = `${sumMoney/counterDom1} tane kola alabilirsiniz`;

let domProductPrice2 = document.querySelector("#productPrice2");
domProductPrice2.innerHTML = `${sumMoney/counterDom2} tane kola alabilirsiniz`;

let domProductPrice3 = document.querySelector("#productPrice3");
domProductPrice3.innerHTML = `${sumMoney/counterDom3} tane kola alabilirsiniz`;

let domProductPrice4 = document.querySelector("#productPrice4");
domProductPrice4.innerHTML = `${sumMoney/counterDom4} tane kola alabilirsiniz`;

let domProductPrice5 = document.querySelector("#productPrice5");
domProductPrice5.innerHTML = `${sumMoney/counterDom5} tane kola alabilirsiniz`;

domToplamPara.innerHTML = `${sumMoney}TL`;


domBasket.innerHTML = `Sepetteki ürün sayisi: <b>${startBasket} adet</b>`;
domBasket2.innerHTML = `Sepetteki ürün sayisi: <b>${startBasket2} adet</b>`;
domBasket3.innerHTML = `Sepetteki ürün sayisi: <b>${startBasket3} adet</b>`;
domBasket4.innerHTML = `Sepetteki ürün sayisi: <b>${startBasket4} adet</b>`;
domBasket5.innerHTML = `Sepetteki ürün sayisi: <b>${startBasket5} adet</b>`;

domIncrease1.addEventListener("click", increaseBasketOne);
domIncrease2.addEventListener("click", increaseBasketTwo);
domIncrease3.addEventListener("click", increaseBasketThree);
domIncrease4.addEventListener("click", increaseBasketFour);
domIncrease5.addEventListener("click", increaseBasketFive);

function increaseBasketOne() {
  this.id == "increase1"
    ? (domBasket.innerHTML = `Sepete eklenen ürün miktarı: <b>${(startBasket += 1)} adet</b>`)
    : (domBasket.innerHTML = startBasket);
  domProductPrice.innerHTML = `${(sumMoney/counterDom1)-1} tane kola alabilirsiniz`;
  domToplamPara.innerHTML = `${(sumMoney -= 2)}TL`;
  sumMoney <= 0 ? domToplamPara.innerHTML=`${sumMoney}`: domToplamPara.innerHTML=`${sumMoney} TL`;
  if(sumMoney <= 0 ){
    document.getElementById("increase1").disabled = true;
  }
}

function increaseBasketTwo() {
  this.id == "increase2"
    ? (domBasket2.innerHTML = `Sepete eklenen ürün miktarı: <b>${(startBasket2 += 1)} adet</b>`)
    : (domBasket2.innerHTML = startBasket2);
  // counterDomPrice2.innerHTML=`${counterDom2+=30} TL`
  domProductPrice2.innerHTML = `${(sumMoney/counterDom2)-1} tane kola alabilirsiniz`;
  domToplamPara.innerHTML = `${(sumMoney -= 4)} TL`;
  sumMoney <= 0 ? domToplamPara.innerHTML=`${sumMoney}`: domToplamPara.innerHTML=`${sumMoney} TL`;
  if(sumMoney <= 0 ){
    document.getElementById("increase2").disabled = true;
  }
}
function increaseBasketThree() {
  this.id == "increase3"
    ? (domBasket3.innerHTML = `Sepete eklenen ürün miktarı: <b>${(startBasket3 += 1)} adet</b>`)
    : (domBasket3.innerHTML = startBasket3);
  // counterDomPrice3.innerHTML=`${counterDom3+=450000} TL`
  domProductPrice3.innerHTML = `${(sumMoney/counterDom3)-1} tane kola alabilirsiniz`;
  domToplamPara.innerHTML = `${(sumMoney -= 5)} TL`;
  sumMoney <= 0 ? domToplamPara.innerHTML=`${sumMoney}`: domToplamPara.innerHTML=`${sumMoney} TL`;
  if(sumMoney <= 0 ){
    document.getElementById("increase3").disabled = true;
  }
}
function increaseBasketFour() {
  this.id == "increase4"
    ? (domBasket4.innerHTML = `Sepete eklenen ürün miktarı: <b>${(startBasket4 += 1)} adet</b>`)
    : (domBasket4.innerHTML = startBasket4);
  //counterDomPrice4.innerHTML=`${counterDom4+=9500000} TL`
  domProductPrice4.innerHTML = `${(sumMoney/counterDom4)-1} tane kola alabilirsiniz`;
  domToplamPara.innerHTML = `${(sumMoney -= 10)} TL`;
  sumMoney <= 0 ? domToplamPara.innerHTML=`${sumMoney}`: domToplamPara.innerHTML=`${sumMoney} TL`;
  if(sumMoney <= 0 ){
    document.getElementById("increase4").disabled = true;
  }
}
function increaseBasketFive() {
  this.id == "increase5"
    ? (domBasket5.innerHTML = `Sepete eklenen ürün miktarı: <b>${(startBasket5 += 1)} adet</b>`)
    : (domBasket5.innerHTML = startBasket5);
  //counterDomPrice5.innerHTML=`${counterDom5+=120000000} TL`
  domProductPrice5.innerHTML = `${(sumMoney/counterDom5)-1} tane kola alabilirsiniz`;
  domToplamPara.innerHTML = `${(sumMoney -= 10)} TL`;
  sumMoney <= 0 ? domToplamPara.innerHTML=`${sumMoney}`: domToplamPara.innerHTML=`${sumMoney} TL`;
  if(sumMoney <= 0 ){
    document.getElementById("increase5").disabled = true;
  }
}
