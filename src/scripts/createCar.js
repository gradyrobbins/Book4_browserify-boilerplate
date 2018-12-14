/*
    Author: Grady
    Name: createCar.js
    Purpose: Produces a new car object
*/
const createCar = function(make,model) {
    return {
    
      make,
      model,
    
      toString () {
          return `a ${this.make} ${this.model}`
      },
    
      drive (destination) {
          return `You drive ${this} to ${destination}`
      }
    }
  }

export default createCar;