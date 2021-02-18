// Generate Random pin
function getPin(){
    let pin = (Math.random()*10000+'').split('.')[0];
    if(pin.length < 4 ){
        console.log('Shorter pin is : ', pin);
        return getPin();
    }
    else{
       return pin
    }
}
function generatePin(){
    let pinNumber = getPin();
    console.log(pinNumber);
    const pin = document.getElementById('pin');
    pin.value = pinNumber;
    pinMatchMsg('none','none');
    document.getElementById('typed-pin').value = '';
}
// Pin calculator
const buttonContainer = document.getElementById('calc-body');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
  
    if(isNaN(digit)){
        //console.log('handle non digit');
        if(digit === 'C'){
            document.getElementById('typed-pin').value = '';
        }
        if(digit === '<'){
        console.log('ok');
    }
    }   
    else{
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// Match pin 
let count = 0;
function matchPin(){

    const typedInput = document.getElementById('typed-pin').value;
    const pin = document.getElementById('pin').value;    
   
    count += 1;
    console.log('button click: ',count);
  if(count < 4){
    if(typedInput == pin){
        pinMatchMsg('block','none')
        const typedInput = document.getElementById('typed-pin').value = '';
        const pin = document.getElementById('pin').value = '';
        document.querySelector('.action-left').innerText = '';
    }
    else{
        pinMatchMsg('none','block')
        return document.querySelector('.action-left').innerHTML = count + ' ' + 'try left'
    }
   
  }
  if(count > 3){
    document.querySelector('.action-left').innerHTML = '';
    const typedInput = document.getElementById('typed-pin').value = '';
    const pin = document.getElementById('pin').value = '';
    return document.querySelector('.notify-section').innerHTML = `<p style="color:yellow"> 3 attempts failed! caught this thief </p> <p>Refresh Thief</p>`;
      
  }
  
}
// Message
function pinMatchMsg(block,none){
        const correctPin = document.getElementById('correct');
        correctPin.style.display = block;
        const incorrectPin = document.getElementById('incorrect');
        incorrectPin.style.display = none;
}
