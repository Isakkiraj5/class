class UberCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, time) {
        const distanceCost = distance * this.costPerKm;
        const timeCost = time * this.costPerMinute;
        const totalCost = this.baseFare + distanceCost + timeCost;
        return totalCost;
    }
}

const uberXCalculator = new UberCalculator(5, 1.5, 0.2);

const distanceInKm = 10;
const timeInMinutes = 15;

const ridePrice = uberXCalculator.calculatePrice(distanceInKm, timeInMinutes);

console.log(`UberX Ride Price: $${ridePrice.toFixed(2)}`);
