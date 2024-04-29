function writeLocalStorageObject(key, object) {
    if (object === null || object === undefined) {
        object = {}; // Create an empty object if object is null or undefined
    }
    
    const encodedObject = btoa(JSON.stringify(object)); // Encode object to base64
    localStorage.setItem(key, encodedObject); // Store the encoded object in localStorage
} 
 
export default writeLocalStorageObject

// // Example usage:
// const myObject = { foo: 'bar', baz: 123 };
// writeLocalStorageObject('myObject', myObject);

// const retrievedObject = readLocalStorageObject('myObject');
// console.log(retrievedObject); // Output: { foo: 'bar', baz: 123 }