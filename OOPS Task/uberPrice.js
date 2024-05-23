class UberPriceCalculator {
    constructor (baseFare, costPerKm, costPerMinute, bookingFee) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distance, duration) {
        const fare = this.baseFare + (distance * this.costPerKm) + (duration * this.costPerMinute); 
        return fare + this.bookingFee;
    }
}

const uberCalculator = new UberPriceCalculator(50, 30, 10, 15);

const distanceInKm = 10; 
const durationInMinutes = 20;

const price = uberCalculator.calculatePrice(distanceInKm, durationInMinutes);
console.log(`The estimated Uber price is ${price.toFixed(2)} rs`);
