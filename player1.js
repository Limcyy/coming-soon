const text = document.querySelector(".text")
const startButton = document.querySelector(".startButton")

startButton.style.display = "none"
startButton.addEventListener("click", start)

function ChangeText() {
    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
    if (data.player2 == "") {
        text.innerHTML = data.player1 + " VS waiting..."
    }
    else {
        text.innerHTML = data.player1 + " VS " + data.player2
        startButton.style.display = "block"
    }
  });
}


ChangeText()




const TextInterval = setInterval( function() {
    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
    if (data.player2 !== "") {
        ChangeText()
        clearInterval(TextInterval)
    }
    
  });
}, 100)


function starting() {
    getData("https://awesomeapp-f2b19-default-rtdb.asia-southeast1.firebasedatabase.app/.json").then((data) => {
    if (data.Starting == "go") {
        window.location.href = "player1Game.html"
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