const accounts = [
  {
      iban: 'TR95 1258 8974 4152',
      balance: 100,
  },
  {
      iban: 'TR15 5256 9852 4512',
      balance: 5040,
  },
  {
      iban: 'TR95 7456 8974 4152',
      balance: 10594,
  }
];


let sendMoney=0;
let count=0;
let balance=0;

const accountDOM=document.querySelector('.form-control');
const inputDom=document.querySelector('#moneyQuantity');
const sendButton=document.querySelector("#sendButton")
const receivedSms=document.querySelector('#received')


document.querySelector("#gonder").disabled=true;

accounts.forEach(item => {
  const optionDOM = document.createElement('option');
  optionDOM.textContent = item.iban;
  optionDOM.value = item.balance;
  accountDOM.appendChild(optionDOM);
 
});

//Hesaptaki bakiyeye gosteren kisim
accountDOM.addEventListener("change", function(){
  document.querySelector("#form_title").textContent = "Tutar: " + this.value + " TL";
  balance = Number(this.value);
//Hesaptaki bakiyeye gosteren kisim


inputDom.addEventListener("change", function(){
  sendMoney = Number(this.value);
  if(sendMoney > balance){
    document.getElementById("gonder").disabled = true;
      alert("Bakiyenizde o kadar para yok.") //gonderilen para bakiyeden fazla ise uyari ver.
  }else{
    document.getElementById("gonder").disabled = false;
  }
});
});
/*
accountDom.addEventListener('change', (event)=>{
  const result = document.querySelector('.result');
  result.textContent=`Bu hesaptaki bakiyeniz ${event.target.value} TL'dir. Maksimum göndereceğiniz miktar ${event.target.value} TL'dir.`

});
*/

//zaman sayaci
let timeleft = 120;
let countDown = setInterval(function () {
  timeleft--;
  document.querySelector("#countdowntimer").textContent = timeleft;
  if (timeleft <= 0) {
  clearInterval('countdown');
  window.location.reload();
}}, 1000);
//zaman sayaci



sendButton.addEventListener('click',(e)=>{
  e.preventDefault();
  if(sendMoney<500){
    alert('Başarılı'); 
  }
  else{
    receivedSms.style.display='block';
    receivedSms.addEventListener("keydown",(e)=>{
      if(e.key=="Enter"){
        e.preventDefault;
        if(receivedSms.value==='1234'){
          alert('Başarılı'); // Şifre 1234 girilirse başarılı uyarisi versin
        }
        else{
          if(count < 4){
            count++;
            alert('Şifre Yanlış!');
            return; // Sifreyi max 3 kez yanlis girsin.
          }else{
            alert('Hesabınız bloke oldu'); //4 olursa hesabi bloke et uyarisi versin
          }
        }
      }
    });
  }
});