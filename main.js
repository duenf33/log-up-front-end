const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';

// We'll be running our code as users by typing in
// `node [path to this file]` on the command line,
// followed by our email address and our password.
// (Or the email and pw we want to test!)
// We want to perform checks on that email and
// password to arrive at one of the following messages
// for the user:
//
// 1. If the email belongs to one of our registered
// users AND the password matches that user, tell them
// that they are logged in.
//
// 2. If the email belongs to one of our registered
// users but the password does not match that user,
// tell them their password is incorrect.
//
// 3. If the email does not belong to one of our
// registered users, and the email and password are
// both valid, tell them they're signed up.
//
// 4. If the email does not belong to one of our
// registered users, and the email is not valid,
// tell them their email is not valid. Preferably
// also tell them what makes a valid email.
//
// 5. If the email does not belong to one of our
// registered users, and the password is not valid,
// tell them their password is not valid. Preferably
// also tell them what makes a valid password.
//
//
// As long as given those inputs you get the right
// outputs, how your branching `if` logic works is
// up to you!
//
// Remember to test (using command-line calls to your
// app) each of those possibilities!
//
// You can and should use all four back-end functions
// from the first part of this assignment. They're
// farther down this page.
//
// You can also use the two "utility functions" below
// them if you'd like!
//

// Being sure to do all that's outlined above, write
// your code below!
const logUser1 = getEmail() == user1;
const logUser2 = getEmail() == user2;
const logUser3 = getEmail() == user3;
const passUser1 = getPassword() == password1;
const passUser2 = getPassword() == password2;
const passUser3 = getPassword() == password3;
const logUserPass1 = getEmail() == user1 && getPassword() == password1;
const logUserPass2 = getEmail() == user2 && getPassword() == password2;
const logUserPass3 = getEmail() == user3 && getPassword() == password3;

const notInDatabaseEmail = !logUser1 || !logUser2 || !logUser3;
const correctUserPassword = logUserPass1 || logUserPass2 || logUserPass3;
const incorrectPassword = logUser1 && !passUser1 || logUser2 && !passUser2 || logUser3 && !passUser3;
const regUser = (getEmail() !== user1 && getPassword() !== password1 || getEmail() !== user2 || getPassword() !== password2 || getEmail() !== user3 && getPassword() !== password3);
const NotValidEmail = !(getEmail().endsWith('@codeimmersives.com') && getEmail().length >= 20);
const NotValidPassword = getPassword().length >= 8 && getPassword().toUpperCase() !== getPassword() && getPassword().toLowerCase() !== getPassword();


if(correctUserPassword) {
  return console.log('Welcome, you are logged in');
}

if(incorrectPassword) {
  return console.log('Your Password is INCORRECT!!')
}

if(!NotValidPassword) {
  return console.log('Password input is INVALID!! please enter a correct password with one uppercase at least and 8 characters minimum. example; passWords');
}

if(NotValidEmail) {
  return console.log('This is not a valid email. Make sure after your email "@" codeimmersives.com follows');
}

if(regUser) {
  return console.log('Hello, You are signed up now!');
}

if(notInDatabaseEmail) {
  return  console.log('wrong email here')
}

// Solution to the back-end portion of this app.
// Don't need to touch this, but you can check it out!

function isValidEmail(email) {
  return email.endsWith('@codeimmersives.com') && email.length >= 20;
}

function isValidPassword(password) {
  return password.length >= 8
    && password.toUpperCase() !== password
    && password.toLowerCase() !== password;
}

function isRegisteredUser(email) {
  return email === user1 || email === user2 || email === user3;
}

function passwordMatches(email, password) {
  return email === user1 && password === password1
    || email === user2 && password === password2
    || email === user3 && password === password3;
}

// Don't touch the code below!
// These are two utility functions that you can use if
// you don't want to use `process.argv` directly.

function getEmail() {
    return process.argv[2];
}

function getPassword() {
    return process.argv[3];
}


// Scaffolding code to make sure testing works. No need to touch this either!

if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
