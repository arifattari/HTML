/*var ko name dete hein
wo koi reserve keyword nhi ho sakta
wo in {0 } se start nhi ho sakta*/

 /*var student = 'Error!Plese enter a valid password';  
 alert (student);


 var student1 = 'Walcome to JS Land.. \n Happy Coding'
alert (student1);

var student2 = 'Hello... I can run JS through my web browser'
console.log (student2);

var jug = 'water'
alert (jug);


var studentName = 'Arif';
var studentid =  400;
var studentincome = studentid * 10;
var studentTex = (2 + studentincome ) / 100 * 2;*/


var visitCount= +localStorage.getItem("visitCount");
console.log (visitCount);
 visitCount= ++visitCount;

localStorage.setItem("visitCount", visitCount);
alert ("You have visited this page" + visitCount + "times" );


/*alert (studentincome);
 console.log (studentTex);*/
//  alert (studentName + ","+ studentid);
// console.log (studentincome);

// var myName = 'ARIF';
// console.log(myName);

var email = "attariarif@gmail.com";
alert ("my email is " +email);

// 1. pre increament
var counter = 10;
var newValue = ++counter
console.log (counter);
//  console.log (newValue);

// post increment
var counter = 10;
var newValue = counter++
console.log (counter);
// console.log (newValue);

/*var counter = 10;
counter = counter + 1 ;
counter = counter + 1 ;
counter ++;
counter ++;
console.log (counter);*/

// concatenating

var greet = "hello from class";
var classNumber = 27;
var newString = greet + classNumber;
console.log (newString);

var studenID = 15416;
var studentName = 'arif';
var isStudentAvailable = 'No';
console.log ('student Id: ' + studenID + ''  + ' student name: ' + studentName + '' + ' isstudentavailable: ' + isStudentAvailable );


// promt
var name = prompt ('Tell me your name');
console.log (name);
