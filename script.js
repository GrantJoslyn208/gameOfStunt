const inputFlyer = document.getElementById("flyers")
const flyerContainer = document.getElementById("flyerContainer")
const flyers = []
const stunts = []

function addFlyer(){
    if(inputFlyer.value === ""){
        alert("You must write something")
    }
    else{
        flyers.push(inputFlyer.value)
    }
    inputFlyer.value = ""
}

function displayFlyers(){
    flyerContainer.innerHTML = "";
    flyers.forEach(flyer => {
        let li = document.createElement("li")
        li.textContent = flyer;
        flyerContainer.appendChild(li);
    })

}

function saveStunts(){
    localStorage.setItem("stunts", stunts)
}
function retrieveStunts(){
    stunts 
}

