function sendReview() {
    let review = {}

    review.username = prompt("Введите ваше имя")

    if (review.username == null) return

    review.text = prompt("Введите ваш текст")

    if (review.text == null) return

    review.date = new Date().toLocaleString()

    if (confirm("Хотите ли вы позволить оставлять отзывы под вашим комментарием?")) {
        let rateReview = Object.create(review)
        rateReview.rate = 0
        addNewReview(rateReview)
        return
    }

    addNewReview(review)
}

const addNewReview = review => {
    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {
        likeCounter += '           <b style="color: chocolate">Рейтинг:</b>   ' + review.rate;
    }

    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['username']}</b>  ${review['date']}${likeCounter}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}