
/* Task 3: Notes app code and pseudocode examples.

SKILL: Values, Data Types, and Operations
Here I create a note using data types, a value, and an operation.


PSEUDOCODE:

START

Firstly, the app will be working with values, data types and operations. Below is some pseudo code that shows how these elements may be used.
Lets suppose that I want to create a note, this is the pseudo code containing values, data types and operations:

CREATE note with:
  text = "Study JavaScript"
  priority = 1
  completed = false

IF note is completed THEN   //Here I use a condition to check if the task is done by using an "if" statement.
    DISPLAY "All tasks completed."
ELSE
    DISPLAY "You have uncompleted tasks."

END
*/

let note = {
  text: "Study JavaScript",   //I use a string here
  priority: 1,                //I use a number
  completed: false            //I use a boolean here
};

let isHighPriority = note.priority === 1; //I use a comparison operation here, which is represented by "===". It checks if the priority variable inside the note is equal to one.

console.log(note); /*This code makes use of strings, a number, and a boolean which are examples of data types. I make use of
a variable which is "note". The boolean, number and string are examples of primitive data types. I also used an operation.*/

console.log(isHighPriority);

//======================================

/*SKILL: Stringing Characters Together
This demonstrates concatenation of strings.

PSEUDOCODE:

START

//I will ask the user for the note's title and content.

SET title = "My Day"
SET content = "Studied JavaScript"

CREATE totalNote = "Title: " + title + "\nContent: " + content
//I combine the strings to create a note that has a title and content within. I am concatenating strings here, like I learend in the lesson.

DISPLAY totalNote

END
*/

let title = "My Day";
let content = "Studied JavaScript";

//This part shows string concatenation:
let message = "Title: " + title + "\nContent: " + content;

console.log(message);

//By the end, I have a note with a title and content. The content is printed on a new line. This shows string concatenation.


//===================================

/*SKILL: Control Structures and Logic
This section has to do with "if" statements and conditionals.

PSEUDOCODE:

START

IF completed status is true //Here I check whether the tasks have been completed or not by using a boolean.
    DISPLAY "Task completed!" //I display a certain message to the user depending on whether the task has been completed or not.
ELSE
    DISPLAY "Task still pending."

END
*/

if (note.completed) { //Again, I check whether or not a task has been completed by using a boolean.
  console.log("Task completed!");
} else {
  console.log("Task still pending.");
}

//=================================================
/*
SKILL: Building Arrays
This demonstrates creating and initializing arrays.

PSEUDOCODE:

START

CREATE list called notes //Here I create a list called notes.

ADD "Study" to notes //Here I add things to the list, i.e. I am initializing an array and adding strings to it. This builds an array, just like the lesson taught us.
ADD "Workout" to notes
ADD "Read" to notes

END //By the end, I have created a list of notes, as I intended to do.
*/

let notes = ["Study", "Workout", "Read"]; //Here I initialize an array and fill it with strings.
console.log(notes); //Here I list all the items in the array.

//=========================================

/*
SKILL: Using Arrays
This demonstrates accessing and modifying arrays.

PSEUDOCODE:

START

ADD "Practice coding" to notes //Here I add a note to the already existing notes list. It will be placed at the end.

SET firstNote to item at index 0 //Here I place the firstNote variable to index 0.

DISPLAY firstNote //Here I specify that the first element in the array should be displayed. 

END
*/

notes.push("Practice coding"); //Here I use the .push method to add "Practice coding" to the end of an array as I learned in the lesson pertaining to accessing arrays, using arrays, etc.
console.log(notes[0]); //Here I access the first element in the array, which is situated at position zero.
//By the end, I added a string and put it at the end of an arary using the .push method. I then accessed it by coding "notes[0]".

//===============================================

/*
SKILL: Working With Loops
This demonstrates iterating over arrays, like I learned in the working with loops lesson.

PSEUDOCODE:

START

//Here I loop through all notes to display them, like a notes app would.

SET index to 0

WHILE index is less than length of notes
    DISPLAY notes[index 0]
    INCREMENT index by 1

END

//This pseudo code works just like the JavaScript code below in the sense that it will start at the very first note/index
and then go to the next index, but it will stop once there are no more indexes.
*/

for (let i = 0; i < notes.length; i++) { //This code will print every entry in the notes, and will stop once there are no more entries in it.
//The "i = 0" means that the program should start listing notes that start at index 0, then the code says to stop once there are no more items in the array.
//The "i++" means that the code should move over one index after it displays the previous index.
  console.log(notes[i]); 
}