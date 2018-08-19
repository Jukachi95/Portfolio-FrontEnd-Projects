// alert("Connected")

// Event Listener for Submit Button

const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener('click', onClick)


function onClick(e){

// console.log("clicked")

e.preventDefault
e.target.innerHTML = 'DONE'
}

// console.log(submitBtn);