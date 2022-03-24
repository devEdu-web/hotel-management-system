/**
 * 
 * @param {Date} checkIn 
 * @param {Date} checkOut 
 * @param {Number} pricePerHour 
 */

function price(checkIn, checkOut, pricePerHour) {
    const datesDifference = new Date(checkOut) - new Date(checkIn)
    const msToHours = (datesDifference / 1000) / 60 / 60 
    const price = pricePerHour * msToHours

    return price
}

module.exports = price