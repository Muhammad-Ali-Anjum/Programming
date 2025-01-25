function isPrime(number, callback) {
    if (number <= 1) {
      callback(false, number); // Numbers <= 1 are not prime
      return;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        callback(false, number); // Number is not prime
        return;
      }
    }
  
    callback(true, number); // Number is prime
  }
  
  // Example usage with a callback
  isPrime(17, function (isPrimeResult, number) {
    if (isPrimeResult) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is NOT a prime number.`);
    }
  });
  
  // Try with another number
  isPrime(20, function (isPrimeResult, number) {
    if (isPrimeResult) {
      console.log(`${number} is a prime number.`);
    } else {
      console.log(`${number} is NOT a prime number.`);
    }
  });
  