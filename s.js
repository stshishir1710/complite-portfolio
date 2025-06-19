var animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
    e.target.classList.remove('animate');
},700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}


let bar = document.querySelector(".bar");
let toggleBox = document.querySelector(".Second");
let iconBtn = document.querySelector(".iconBtn")
let sojib = document.querySelector(".body");
bar.addEventListener("click", function(){
    toggleBox.classList.toggle("hide")
    iconBtn.classList.toggle("fa-xmark");
    iconBtn.classList.toggle("fa-bar");
    
})
let requoreButton = document.querySelector(".requore");
let emailBox = document.querySelector(".Offeremail");
let popUp = document.querySelector(".p");

requoreButton.addEventListener("click", () => {
    let email = emailBox.value.trim();

    if (email === "") {
    alert("Enter your email");
    return;
    }
    popUp.innerHTML = "Successful";
    popUp.style.color = "green";
    popUp.style.fontSize= "20px";

    setTimeout(() => {
    popUp.innerHTML = "Your email: ";
    popUp.style.fontSize= "17px";
    popUp.style.color = "black";
    }, 5000);
emailBox.value = "";
});

let fristName= document.querySelector("#fname");
let secondName= document.querySelector("#sname");
let contactEmail= document.querySelector("#cemail");
let textarea= document.querySelector(".textarea");
let design= document.querySelector("#design");
let development= document.querySelector("#development");
let support= document.querySelector("#support");
let others= document.querySelector("#other");
let massageBtn= document.querySelector(".cbutton");










massageBtn.addEventListener("click", () => {
let serviceSelected = "";
if (design.checked) serviceSelected = "Design";
else if (development.checked) serviceSelected = "Development";
else if (support.checked) serviceSelected = "Support";
else if (others.checked) serviceSelected = "Others";

// Validation
if (fristName.value.trim() === "") {
    alert("First Name ফাঁকা রাখা যাবে না");
    return;
}

if (secondName.value.trim() === "") {
    alert("Second Name ফাঁকা রাখা যাবে না");
    return;
}

if (contactEmail.value.trim() === "") {
    alert("Email ফাঁকা রাখা যাবে না");
    return;
}

if (textarea.value.trim() === "") {
    alert("Message ফাঁকা রাখা যাবে না");
    return;
}

if (serviceSelected === "") {
    alert("একটা Service সিলেক্ট করুন");
return;
}

    // Show all info in alert box
    let message = `
✅ Message Sent Successfully!

👤 Name: ${fristName.value} ${secondName.value}
📧 Email: ${contactEmail.value}
💬 Message: ${textarea.value}
🛠️ Selected Service: ${serviceSelected}
    `;

    alert(message);

    // Clear all fields
    fristName.value = "";
    secondName.value = "";
    contactEmail.value = "";
    textarea.value = "";
    design.checked = false;
    development.checked = false;
    support.checked = false;
    others.checked = false;

    result.innerHTML = "Message Cleared & Sent!";
    result.style.color = "green";
});
 document.onkeydown = function(e) {
    if (
      e.keyCode == 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.keyCode == 85) // Ctrl+U
    ) {
      return false;
    }
  };