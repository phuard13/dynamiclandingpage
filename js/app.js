// dom elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Show Time
 function showTime() {
     let today = new Date(),
     hour = today.getHours(),
     min = today.getMinutes(),
     sec = today.getSeconds();

  
    // set am or pm
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr format
    hour = hour % 12 || 12; 

    // output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
 }

//  add Zero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '')  + n;
}
// set background and greetings
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
     // Morning}
     document.body.style.backgroundImage = "url('../img/morning.jpg')";
     greeting.textContent = 'Good Morning';
    } else if(hour < 18){
        // afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
    } else {
        // evening
        document.body.style.backgroundImage = "url('../img/night.jpeg')";
     greeting.textContent = 'Good Evening';
     document.body.style.color = 'white';
    }
    // Stop here for the landing page
}





//  Run
showTime();
setBgGreet();


 

































