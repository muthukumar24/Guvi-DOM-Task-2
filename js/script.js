// Function to add row after user clicks the submit button
function addRow() {
  // Getting user details and storing in variables
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let foodElements = document.getElementsByName("food");
    let foods = [];
    for (let i = 0; i < foodElements.length; i++) { // loop to push multiple food items
      if (foodElements[i].checked) {
        foods.push(foodElements[i].value);
      }
    }
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;
    let message = document.getElementById("comments").value;
  // Alert for the user to select atleast two or more foods
    if (foods.length < 2) {
      alert("Please select at least 2 food choices.");
      return;
    }
  // Getting table element and storing it in a variable
    let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length); // Inserting new inot the table
  // Inserting new cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);
    let cell9 = newRow.insertCell(8);

  // Updating table cells with datas entered by the user
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = foods.join(', ');
    cell7.innerHTML = state;
    cell8.innerHTML = country;
    cell9.innerHTML = message;

  // Form Reset after datas added to table
    document.getElementById("survey-form").reset();
  }
  