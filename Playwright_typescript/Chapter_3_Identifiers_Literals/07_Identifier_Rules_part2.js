// ============================================
// DIFFERENT TYPES OF CASES IN JAVASCRIPT
// ============================================

// 1. Camel Case - first word lowercase, subsequent words capitalized
// Used for: variables, functions
var firstName = "Purnima";
var myFirstName = "Purnima";
var totalAmountPaid = 5000;
function getUserDetails() {}

// 2. Snake Case - all lowercase, words separated by underscore
// Used for: constants, file names (less common in JS)
var first_name = "Purnima";
var total_amount_paid = 5000;
var user_age = 25;

// 3. Pascal Case (Upper Camel Case) - every word starts with capital
// Used for: classes, constructors
var FirstName = "Purnima";
class UserAccount {}
class BankTransaction {}
function PersonDetails() {}

// 4. Upper Snake Case (Screaming Snake Case) - all uppercase with underscores
// Used for: constants
var MAX_SIZE = 100;
var PI_VALUE = 3.14159;
var BASE_URL = "https://example.com";

// 5. Kebab Case - all lowercase, words separated by hyphens
// Note: NOT valid for JS variable names, used in CSS class names / HTML attributes
// var first-name = "Purnima"; // ✗ Invalid in JS
// Used in: CSS → .first-name { }, HTML → data-user-name

// 6. Hungarian Notation - prefix indicates data type
// Used for: legacy codebases
var strName = "Purnima";   // str = string
var intAge = 25;            // int = integer
var bIsActive = true;       // b = boolean
var arrColors = ["red", "blue", "green"]; // arr = array   



