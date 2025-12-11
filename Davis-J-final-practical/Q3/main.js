/*  Question 3 - Practical - Stick note app (mostly on your own but you may use the storage.js)

     NOTICE: you have to create all the document query selectors and such here! We are not providing these!
        This is a very simple app esp if you remember our local storage PE, but you need to do the ground work yourself
        on this one! Be sure you are getting the value and setting the value of the text area correctly!

        There are some TODO comments but you are welcome to accomplish this however you want as long as it works!

        This should be easier than than the PE as we just need to store a single string and not a JSON array!

        If you can't get it working with storage.js you can do it as a last ditch effort without! but the two functions
        make this a breeze if you remember how to use them!
*/

//We did the import for you, and the functions you need have already been exported and ready to use
import { writeToLocalStorage, readFromLocalStorage } from './storage.js';

//START CODING BELOW HERE!:

let noteElement = document.querySelector("#note");
let savedNote = "";

// TODO: In storage.js rename your sticky name app variable on line 3

// TODO: On page load, read any existing note and display it in the textarea
const init = () => {
   // buttons
   document.querySelector("#saveBtn").onclick = saveNote;
   document.querySelector("#clearBtn").onclick = clearNote;

   savedNote = readFromLocalStorage("notes");
   if (savedNote != null) {
        noteElement.value = savedNote;
   }
}

// TODO: When Save button is clicked, save the textarea value to localStorage using the helper
const saveNote = () => {
   savedNote = noteElement.value;
   writeToLocalStorage("notes", savedNote);
}
// TODO: When Clear button is clicked, remove the value from localStorage and clear the textarea
const clearNote = () => {
   writeToLocalStorage("notes", "");
   noteElement.value = "";
}

init();