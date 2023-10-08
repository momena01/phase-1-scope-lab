// helpers.js
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    // Attempting to reassign a constant will result in an error.
    throw new Error('Assignment to constant variable.');
}
