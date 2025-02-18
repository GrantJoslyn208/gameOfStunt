

/*flyers*/ {
const inputFlyer = document.getElementById("flyers")
const flyerContainer = document.getElementById("flyerContainer")
const flyers = []

inputFlyer.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addFlyer()
    }})

function addFlyer(){
    if(inputFlyer.value === ""){
        alert("You must write something")
    }
    else{
        flyers.push(inputFlyer.value)
    }
    inputFlyer.value = ""
    displayFlyers();
}

function displayFlyers(){
    flyerContainer.innerHTML = "";
    flyers.forEach(flyer => {
        let li = document.createElement("li")
        li.textContent = flyer;
        flyerContainer.appendChild(li);
    })
}
}


/* bases*/{
const inputBase = document.getElementById("bases")
const baseContainer = document.getElementById("baseContainer")
const bases = []

inputBase.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addBase()
    }})

function addBase(){
    if(inputBase.value === ""){
        alert("You must write something")
    }
    else{
        bases.push(inputBase.value)
    }
    inputBase.value = ""
    displayBases();
}

function displayBases(){
    baseContainer.innerHTML = "";
    bases.forEach(base => {
        let li = document.createElement("li")
        li.textContent = base;
        baseContainer.appendChild(li);
    })
}
}


function saveStunts(){
    localStorage.setItem("stunts", stunts)
}
function retrieveStunts(){
    stunts 
}

