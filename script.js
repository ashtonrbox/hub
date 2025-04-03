let allData = []

document.addEventListener("DOMContentLoaded", function () {

    let url = new URL(document.location).href;

    url.split("?")[1].split("&").forEach(data => {
        let [key, value] = data.split("=")

        if (key === "w") {

            allData.push("W")

            console.log("Wordle data found: " + value)

            document.getElementById("connectionsLink").setAttribute("href", `https://ashtonrbox.github.io/connections?w=${value}`)

            document.getElementById("wordleData").style.display = "flex"
            document.getElementById("wordlePlay").style.display = "none"

            document.getElementById("wordleData").querySelector("p").textContent = "Solved in " + value + " guesses!"

        } else if (key === "c") {

            allData.push("C")

            console.log("Connections data found: " + value)

            document.getElementById("wordleLink").setAttribute("href", `https://ashtonrbox.github.io/wordle?c=${value}`)

            document.getElementById("connectionsData").style.display = "flex"
            document.getElementById("connectionsPlay").style.display = "none"

            if (value - 4 === 1) {
                document.getElementById("connectionsData").querySelector("p").textContent = "Completed with " + (value - 4) + " mistake!"
            } else {
                document.getElementById("connectionsData").querySelector("p").textContent = "Completed with " + (value - 4) + " mistakes!"
            }
        }

        if (allData.includes("W") && allData.includes("C")) {
            console.log("ALL GAMES COMPLETED")
        }

    })

})






