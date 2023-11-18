let hour = document.querySelector(".hour");
let hourInput = document.querySelector(".hourInput");
let minute = document.querySelector(".minute");
let minInput = document.querySelector(".minInput");
let second = document.querySelector(".second");
let secInput = document.querySelector(".secInput");
let setBtn = document.querySelector(".setBtn");

hourInput.style.display = "none";
minInput.style.display = "none";
secInput.style.display = "none";

function setHour() {
  hourInput.style.display = "block";
  hour.style.display = "none";
}

function setMin() {
  minInput.style.display = "block"
  minute.style.display = "none"
}
function setSecond() {
  secInput.style.display = "block"
  second.style.display = "none"
}

hour.addEventListener("click", setHour);
minute.addEventListener("click", setMin);
second.addEventListener("click", setSecond);

let timers = document.querySelector(".timers")
function getHours() {
    hourInput.style.display = "none";
  hour.style.display = "block";
  minInput.style.display = "none"
  minute.style.display = "block"
  secInput.style.display = "none";
  second.style.display = "block";
    
    let newTimers = `
    <div
    class="bg-blue-type rounded d-flex align-items-center justify-content-between text-light  m-auto p-3"
  >
    <div>Set Time</div>
    <div class="d-flex">
      <h3 class="d-flex">
        <div class="text-decoration-underline hour">${hourInput.value} :</div>
       
        <div class="text-decoration-underline minute">${minInput.value} :</div>
       
        <div class="text-decoration-underline second">${secInput.value}</div>
        
      </h3>
    </div>
    <button class="btn btn-warning radious setBtn">Set</button>
  </div>`
  timers.innerHTML += newTimers;
  
}

setBtn.addEventListener('click',getHours);

