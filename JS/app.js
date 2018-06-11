//global selectors
const page= document.getElementsByClassName('page')[0];
const header= document.querySelector('.page-header');
//employee list ul to append li's to
const employeeList= document.querySelector('.employee-list');
const pagin= document.querySelector('.pagination');

//fetch api//////////

//**************** 
//fetch function
//********************

for (let i=0; i<12; i++){
fetch('https://randomuser.me/api/')
    .then(response => response.json())
.then(data => generateDetails(data))
//.then(data=> console.log(data))

}

//helper function
function generateDetails(data){
    const employee= document.createElement('div');
    employee.classList.add('employee-card');

    const employeePic= document.createElement('img');
    employeePic.src= `${data.results[0].picture.large}`
    employee.appendChild(employeePic);

    const detailsDiv= document.createElement('div');
    detailsDiv.classList.add('employ-card-deets');
    const employeeName= document.createElement('h4');
    employeeName.innerHTML=  `${data.results[0].name.first}`
    employeeName.innerHTML+= ` ${data.results[0].name.last}` 
    detailsDiv.appendChild(employeeName);

    const employeeEmail= document.createElement('p');
    employeeEmail.innerHTML= `${data.results[0].email}`
    detailsDiv.appendChild(employeeEmail);
   
    const employeeCity= document.createElement('p');
    employeeCity.innerHTML= `${data.results[0].location.city}`
    employeeCity.style.textTransform= "capitalize";
    detailsDiv.appendChild(employeeCity);

    employee.appendChild(detailsDiv);
    employeeList.appendChild(employee);
}

