const form = document.querySelector('#form');
const input = document.querySelectorAll('input');
const submitBtn = document.querySelector('#submitBtn');
const cardName = document.querySelector('#cardname');
const carNumbers = document.querySelector('#cardnumbers');
const cardMounth = document.querySelector('#cardmounth');
const cardYear = document.querySelector('#cardyear');
const backNumber = document.querySelector('#backnumber');
const holderWrong = document.querySelector('#holderwrong')
const numberWrong = document.querySelector('#numberwrong');
const dateWrong = document.querySelector('#datewrong');
const dateWrongs = document.querySelector('#datewrongs')
const cvcWrong = document.querySelector('#cvcwrong')


form.addEventListener('submit', function (e) {

    let cardholderName = document.querySelector('#cardholdername');
    let cardNumber = document.querySelector('#cardnumber');
    let months = document.querySelector('#months');
    let years = document.querySelector('#years');
    let cardCvc = document.querySelector('#cardcvc');

    let holderNameValue = cardholderName.value;
    let cardNumberValue = cardNumber.value;
    let monthsValue = months.value;
    let yearsValue = years.value;
    let cardCvcValue = cardCvc.value;

    if (cardholderName.value == '') {
        cardholderName.classList.add('border-wrong');
        holderWrong.classList.add('wrong-msg');
    } else {
        cardholderName.classList.add('border-success');
        holderWrong.classList.remove('wrong-msg');
        cardName.textContent = (holderNameValue);
        cardName.classList.add('card-name');
    }

    if (cardNumber.value == '') {
        cardNumber.classList.add('border-wrong');
        numberWrong.classList.add('wrong-msg');
    } else {
        cardNumber.classList.add('border-success');
        numberWrong.classList.remove('wrong-msg');
        carNumbers.textContent = (cardNumberValue);
    }

    if (months.value == '') {
        months.classList.remove('border-success');
        months.classList.add('border-wrong');
        dateWrong.classList.add('wrong-msg');
    } else {
        months.classList.add('border-success');
        cardMounth.textContent = (monthsValue);
        dateWrong.classList.remove('wrong-msg');
    }

    if (years.value == '') {
        years.classList.add('border-wrong');
        years.classList.remove('border-success');
        dateWrongs.classList.add('wrong-msg');
    } else {
        years.classList.add('border-success');
        cardYear.textContent = (yearsValue);
        dateWrongs.classList.remove('wrong-msg');
    }

    if (cardCvc.value == '') {
        cardCvc.classList.add('border-wrong');
        cvcWrong.classList.add('wrong-msg');
    } else {
        cardCvc.classList.add('border-success');
        backNumber.textContent = (cardCvcValue);
        cvcWrong.classList.remove('wrong-msg');
    }

    e.preventDefault();
})