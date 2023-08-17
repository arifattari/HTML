// Chapter 1
var student = 'Error!Plese enter a valid password';  
 alert (student);

var student1 = 'Walcome to JS Land.. \n Happy Coding';
alert (student1);

var student2 = 'Hello... I can run JS through my web browser';
console.log (student2);


// Chapter 2
var myName = 'Muhammad ARIF';
alert (myName);

var myAge = '21 Year old';
alert (myAge);

var Pizza = ' PIZZA \n PIZZ \n PIZ \n PI \n P';
alert (Pizza);

var email = "attariarif@gmail.com";
alert ("My email is " + email);


// Chapter 3
var myAge = 21;
alert (myAge);

var visitCount= +localStorage.getItem("visitCount");
console.log (visitCount);
 visitCount= ++visitCount;

localStorage.setItem("visitCount", visitCount);
alert ("You have visited this page " + visitCount + " times" );