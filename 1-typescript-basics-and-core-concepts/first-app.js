var userName = "Max";
//  const API_KEY = "abc";
// userName = 24;
userName = "Hello";
var userAge = 32;
var isValid = true;
var theUserID = "123";
//  Union Type 
var userID = "abc1";
userID = 123;
var user;
// user = "Max";
user = {
    name: "",
    age: 36,
    isAdmin: true,
    id: "bac" // 123
};
// user = {};
// Working Woth Array Tupes
//  let hobbies : Array<string>;
var hobbies; // number [] , boolean []
// {name : string ; age : number}[]
hobbies = ["Sports", "Cooking", "Reading"];
// hoppies [1, 2, 3];
function add(a, b) {
    var result = a + b;
    return result;
}
// calculate
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add);
//   interface Credentials {
//     mode: string;
//   }
var creds;
creds = {
    password: "abc",
    email: "test@example.com"
};
// Interfaces Vs. Custom types
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
