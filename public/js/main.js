const deleteBtn = document.querySelectorAll('.fa-trash'); //creating a variable and assigning it to a selection of all elements with a class of fa-trash
const item = document.querySelectorAll('.item span'); //create variable and assign it to a selecttion of span tags inside of a parent that has a class of item
const itemCompleted = document.querySelectorAll('.item span.completed'); //create a variable and assign it to a selection of spans with a class of "completed" inside of a parent with a class of "item"

Array.from(deleteBtn).forEach((element) => {
	//create an array from our selection and starting a loop
	element.addEventListener('click', deleteItem); //add an event listener to the current item that waits for a clik and then calls a function called deleteItem
}); //close our loop

Array.from(item).forEach((element) => {
	//create an array from our selection and starting a loop
	element.addEventListener('click', markComplete); //add an event listener to the current item that waits for a clik and then calls a function called markComplete
}); //close our loop

Array.from(itemCompleted).forEach((element) => {
	//create an array from our selection and starting a loop
	element.addEventListener('click', markUnComplete); //add an event listener to ONLY completed items
}); //close our loop

async function deleteItem() {
	//declare an asynchronous function
	const itemText = this.parentNode.childNodes[1].innerText; //looks inside of the list item and grabs only the inner text within the list span
	try {
		//declaring a try block
		const response = await fetch('deleteItem', {
			//creates a variable that waits on a fetch to get data from the restult of the deleteItem route
			method: 'delete', //sets the CRUD method for the route
			headers: { 'Content-Type': 'application/json' }, //specifying the type of content expected
			body: JSON.stringify({
				//declare the message content being passed, and stringify that content
				itemFromJS: itemText, //setting the content of the body to the inner texxt of the list item and naming it itemFromJS
			}), //closing the body
		}); //closing the object
		const data = await response.json(); //waiting on the JSON from the response to be converted
		console.log(data); //log the result to the console
		location.reload(); //reloads the pagge to update what is displayed
	} catch (err) {
		//if an error occurs pass the error into the catch block
		console.log(err); //log the error to the console
	} //close the catch block
} //end the function

async function markComplete() {
	//declare an asynchronous function
	const itemText = this.parentNode.childNodes[1].innerText; //looks inside of the list item and grabs only the inner text within the list span
	try {
		//declaring a try block
		const response = await fetch('markComplete', {
			//creates a variable that waits on a fetch to get data from the restult of the markComplete route
			method: 'put', //sets the CRUD method for the route
			headers: { 'Content-Type': 'application/json' }, //specifying the type of content expected
			body: JSON.stringify({
				//declare the message content being passed, and stringify that content
				itemFromJS: itemText, //setting the content of the body to the inner texxt of the list item and naming it itemFromJS
			}), //closing the body
		}); //closing the object
		const data = await response.json(); //waiting on the JSON from the response to be converted
		console.log(data); //log the result to the console
		location.reload(); //reloads the pagge to update what is displayed
	} catch (err) {
		//if an error occurs pass the error into the catch block
		console.log(err); //log the error to the console
	} //close the catch block
} //end the function

async function markUnComplete() {
	//declare an asynchronous function
	const itemText = this.parentNode.childNodes[1].innerText; //looks inside of the list item and grabs only the inner text within the list span
	try {
		//declaring a try block
		const response = await fetch('markUnComplete', {
			//creates a variable that waits on a fetch to get data from the restult of the markUncomplete route
			method: 'put', //sets the CRUD method for the route
			headers: { 'Content-Type': 'application/json' }, //specifying the type of content expected//specifying the type of content expected
			body: JSON.stringify({
				//declare the message content being passed, and stringify that content
				itemFromJS: itemText, //setting the content of the body to the inner texxt of the list item and naming it itemFromJS
			}), //closing the body
		}); //closing the object
		const data = await response.json(); //waiting on the JSON from the response to be converted
		console.log(data); //log the result to the console
		location.reload(); //reloads the pagge to update what is displayed
	} catch (err) {
		//if an error occurs pass the error into the catch block
		console.log(err); //log the error to the console
	} //close the catch block
} //end the function
