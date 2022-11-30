function handleSession() {
    let session = new Map();
    session.set("userAgent", window.navigator.userAgent)
    session.set("age", prompt("Пожалуйста, введите ваш возраст"))

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }

    return session
}

function printSession(session) {
    for (let result of session) {
        console.log(result)
    }
}

function filterContent(userInput) {
    const elements = document.querySelectorAll('.video-container');

    elements.forEach(element => {
        const videoTitle = element.innerText

        if (!videoTitle.toLowerCase().includes(userInput.value.toLowerCase()))
            element.style.display = 'none'
        else
            element.style.display = 'inline-block'
    })
}