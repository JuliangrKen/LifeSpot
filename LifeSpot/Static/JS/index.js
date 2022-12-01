let session = new Map();

function checkAge() {
    let input = prompt("Пожалуйста, введите ваш возраст")

    if (input >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }

    return input
}

function handleSession() {
    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)
}

let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}

function printSession(session) {
    for (let result of session) {
        console.log(result)
    }
}

function filterContent() {
    const userInput = inputParseFunction()
    const elements = document.querySelectorAll('.video-container');

    elements.forEach(element => {
        const videoTitle = element.innerText

        if (!videoTitle.toLowerCase().includes(userInput.value.toLowerCase()))
            element.style.display = 'none'
        else
            element.style.display = 'inline-block'
    })
}

setTimeout(() => {
    alert("Подпишитесь на наши социальные сети!")
}, 60 * 1000)