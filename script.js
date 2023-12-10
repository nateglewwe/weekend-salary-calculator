console.log('Hey folks');

//Establishing Global Variables
let salaries = []


function submitForm (event) {    
    // Stop the page from refreshing
    event.preventDefault();

    //Defining html elements for adding to table
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let IDNum = Number(document.querySelector('#IDNum').value);
    let jobTitle = document.querySelector('#jobTitle').value;
    let salary = Number(document.querySelector('#salary').value);
    let tableBody = document.querySelector('#tableBody');

    //Adding a new employee row to the table
    tableBody.innerHTML += 
    `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${IDNum}</td>
        <td>${jobTitle}</td>
        <td>${salary}</td>
        <td><button onclick="deleteRow(event)">Delete</button></td>`;

    //Pushing each new salary to global salaries array, to then calculate Total Monthly
    salaries.push(salary);
    console.log(salaries);

    let sum = 0;
    for(num of salaries) {
        sum = sum + num;
    }
    console.log(sum);
    
    let totalMonthly = document.querySelector('#totalMonthly');
    totalMonthly.innerHTML = sum / 12;

    //Clearing out the form inputs using resetInputFields function
    resetInputFields()
}

function resetInputFields () {
    let firstName = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let IDNum = document.querySelector('#IDNum');
    let jobTitle = document.querySelector('#jobTitle');
    let salary = document.querySelector('#salary');
    
    firstName.value = '';
    lastName.value = ''
    IDNum.value = '';
    jobTitle.value = '';
    salary.value = '';
}