The solution is to always check for the existence of the field before attempting to access it.  Here's an example using the `in` operator and optional chaining:

```javascript
const doc = {data: () => ({name: 'John Doe'})};

// Check if the field exists using the 'in' operator
let city = ('city' in doc.data()) ? doc.data().city : null;

// Alternatively, you can use optional chaining
let city2 = doc.data()?.city || null;

console.log(city); // Output: null
console.log(city2); // Output: null

const doc2 = {data: () => ({name: 'John Doe', city: 'New York'})};

city = ('city' in doc2.data()) ? doc2.data().city : null;
city2 = doc2.data()?.city || null;

console.log(city); // Output: New York
console.log(city2); // Output: New York
```

This ensures that your code handles cases where the field might be missing without throwing an error.