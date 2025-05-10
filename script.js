let allData = []

document.addEventListener("DOMContentLoaded", function () {

    let url = new URL(document.location).href;

    if (url.toString().includes("?")) {
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
                setInterval(confetti, 2000)
            }


        })
    } else {
        console.log("no games")
        document.getElementById("greeting").style.display = "flex"
        document.getElementById("games").style.display = "none"
    }

})


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};



function confetti() {

    let confettiAmnt = Math.floor(Math.random() * 50 + 40);

    for (i = 0; i <= confettiAmnt; i++) {

        let confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');

        let confettiColor = getRandomColor();
        let confettiLeft = Math.floor(Math.random() * 100);
        let confettiBottom = Math.floor(Math.random() * 20);

        let confettiAnimSection = Math.random() * 2 + 0.5;
        let confettiAnim = 'confetti' + (Math.floor(Math.random() * 4) + 1) + ' ' + confettiAnimSection + 's 1 cubic-bezier(0, 0.88, 0.44, 1.39)';

        console.log(confettiColor, confettiLeft, confettiBottom, confettiAnim);

        confettiPiece.style.backgroundColor = confettiColor;
        confettiPiece.style.left = confettiLeft + "%";
        confettiPiece.style.bottom = confettiBottom + "%";
        confettiPiece.style.animation = confettiAnim;

        let timeout = confettiAnimSection * 990;

        setTimeout(() => {

            confettiPiece.remove()

        }, timeout);

        setTimeout(() => {
            document.body.appendChild(confettiPiece);
        }, Math.floor(Math.random() * timeout) + 3)

    }
}
