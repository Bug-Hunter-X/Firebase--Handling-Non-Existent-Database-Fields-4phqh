# Firebase: Handling Non-Existent Database Fields

This repository demonstrates a common error in Firebase applications: attempting to access a field that does not exist in your Firestore database. The code in `bug.js` shows the erroneous attempt, while `bugSolution.js` provides the correct solution. 

The problem arises when you try to access a field without checking if it exists. This leads to unexpected errors. The solution involves checking for the field's existence using a conditional operator or the `in` operator before accessing it, ensuring graceful handling of missing data.

## How to reproduce the error:
1. Clone the repository.
2. Run `npm install` to install dependencies (if any).
3. Run `node bug.js`.