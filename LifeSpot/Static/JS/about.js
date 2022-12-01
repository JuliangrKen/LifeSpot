function sendReview() {
    let review = {}

    review.username = prompt("Введите ваше имя")

    if (review.username == null) return

    review.text = prompt("Введите ваш текст")

    if (review.text == null) return

    review.date = new Date().toLocaleString()

    addNewReview(review)
}

let addNewReview = review => {
   document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
       `<p> <i> <b>${review.username}</b>  ${review.date}</i></p>` +
       `<p>${review.text}</p>`  +
       '</div>';
}