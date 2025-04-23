// Select the input box element to get the task entered by the user
let inp = document.querySelector("input");

// Select the "Add task" button
let btn = document.querySelector("button");

// Select the unordered list (ul) where tasks will be added
let ul = document.querySelector("ul");

// Add a click event listener to the button
btn.addEventListener("click", function () {
    // Create a new list item (li) to hold the task
    let item = document.createElement("li");

    // Set the text of the list item to the value entered in the input box
    item.innerText = inp.value;

    // Create a "Delete" button for the task
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete"; // Set the button text
    delBtn.classList.add("delete"); // Add a class name for styling or reference

    // Append the delete button to the list item
    item.appendChild(delBtn);

    // Append the new list item (task) to the unordered list
    ul.appendChild(item);

    // Clear the input field after adding the task
    inp.value = "";
});

// ✅ Handles delete for all "Delete" buttons (new + existing) using nodeName
ul.addEventListener("click", function (event) {
    if (event.target.nodeName === 'BUTTON' && event.target.classList.contains("delete")) {
        console.log("delete is clicked");
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
    }
});

// Add a click event listener to the input box (optional, for logging)
inp.addEventListener("click", function () {
    console.log("inp is clicked"); // Just logs a message when the input is clicked
});
