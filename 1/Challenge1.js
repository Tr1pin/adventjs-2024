function prepareGifts(gifts) {

    gifts = gifts.filter((gift, index) => gifts.indexOf(gift) === index);
    gifts.sort((gift1, gift2) => gift1 - gift2);
    return gifts;
}


// CODE TEST
/*const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1)

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2)

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3)*/