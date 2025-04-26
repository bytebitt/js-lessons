const promotionalQuantity = 5;
let isStudent = false;
let ticketQuantity = 5;
let buyerAge = 21;
let resultPrice = 100;

// Apply discount based on buyer's age
if (buyerAge >= 18 && buyerAge <= 25) {
    isStudent = true;
    resultPrice = 70;
} else if (buyerAge <= 12) {
    resultPrice = 50;
}

// Log ticket price after age-based discount
console.log(`ticket price before promo - $${resultPrice}`);

// Apply additional 10% discount if ticket quantity is enough
if (ticketQuantity >= promotionalQuantity) {
    resultPrice = resultPrice * 0.9;
}

// Log final ticket price after all discounts
console.log(`final ticket price - $${resultPrice}`);
