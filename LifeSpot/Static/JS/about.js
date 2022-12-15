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

var indexValue = 1;
showImg(indexValue);
function btm_slide(num) { showImg(indexValue = num); }
function side_slide(num) { showImg(indexValue += num); }
function showImg(num) {
    var i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btm-slides span');
    if (num > img.length)
        indexValue = 1;
    if (num < 1)
        indexValue = img.length;
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.background = "rgba(255,255,255,0.2)";
    }
    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "rgba(255,255,255,0.7)";
}
