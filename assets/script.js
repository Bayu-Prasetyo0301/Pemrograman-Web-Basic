const txtElement = ['Pemusic', 'Penggiat Jogging', 'IOT', 'Web Developer', 'Traveller'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function keren() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-keren').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(keren, 500);


})();