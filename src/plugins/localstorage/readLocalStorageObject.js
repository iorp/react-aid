 
function readLocalStorageObject(key) {
    const encodedObject = localStorage.getItem(key);
    
    if (!encodedObject) {
        return {}; // Return null if no object is stored under the given key
    }
    
    const decodedObject = JSON.parse(atob(encodedObject)); // Decode base64 and parse JSON
    return decodedObject;
}
export default readLocalStorageObject

// // Example usage:
// const myObject = { foo: 'bar', baz: 123 };
// writeLocalStorageObject('myObject', myObject);

// const retrievedObject = readLocalStorageObject('myObject');
// console.log(retrievedObject); // Output: { foo: 'bar', baz: 123 }