// Using REST to collect arguments in a function
function mergeArrays(...arrays) {
    // Using SPREAD to merge all arrays into a single array
    const mergedArray = [].concat(...arrays);
    return mergedArray;
  }
  

  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];
  
  // Passing multiple arrays using REST
  const result = mergeArrays(array1, array2, array3);
  console.log(result);  
  
  // Using SPREAD to copy and modify an object
  const person = { name: 'John', age: 30 };
  const updatedPerson = { ...person, city: 'New York' };
  
  console.log(updatedPerson);  