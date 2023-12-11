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
    //console.log(sum);
    
    let totalMonthly = document.querySelector('#totalMonthly');
    totalMonthly.innerHTML = sum / 12;

    //Checking if we go over budget
    if (sum/12 > 20000) {
        let finalTotal = document.querySelector('#finalTotal');
        let footer = document.querySelector('#footer');
        finalTotal.innerHTML = `🚨Oh God no we're over budget🚨 nooooooooooooooooooooo $<span id="totalMonthly">${sum / 12}</span>`;
        footer.classList.add('over-budget');
    }

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

function deleteRow(event) {
    //Deleting the relevent row, and its corresponding index in the salaries array
    let del=event.target.parentNode.parentNode;
    //console.log(del.rowIndex);
    salaries.splice((del.rowIndex-1),1);
    console.log(salaries);
    del.remove();

    //Re-calculating Total Monthly
    let sum = 0;
    for(num of salaries) {
        sum = sum + num;
    }
    //console.log(sum);
    
    let totalMonthly = document.querySelector('#totalMonthly');
    totalMonthly.innerHTML = sum / 12;

    //Re-checking if we got back under budget
    if ((sum/12) <= 20000) {
        let finalTotal = document.querySelector('#finalTotal');
        let footer = document.querySelector('#footer');
        finalTotal.innerHTML = `Total Monthly: $<span id="totalMonthly">${sum / 12}</span>`;
        footer.classList.remove('over-budget');
    }

    event.preventDefault();
}