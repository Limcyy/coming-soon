const text = document.querySelector(".text")
const startButton = document.querySelector(".startButton")

startButton.style.display = "none"
startButton.addEventListener("click", start)

function ChangeText() {
    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
   
        text.innerHTML = data.player2 + " VS " + data.player1
        startButton.style.display = "block"
    
  });
}


ChangeText()

function starting() {
    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
    if (data.Starting == "go") {
        window.location.href = "player2Game.html"
    } 
  });
}

setInterval(starting, 500)


function start() {
    patchData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json", { Starting: "go" }).then((data) => {

  });
}












async function patchData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  
  
  async function getData(url = "") {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }






