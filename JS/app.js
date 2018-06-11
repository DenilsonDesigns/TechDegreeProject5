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
    const employee= document.createElement('li');

    const employeePic= document.createElement('img');
    employeePic.src= `${data.results[0].picture.large}`
    employee.appendChild(employeePic);

    const employeeName= document.createElement('p');
    employeeName.innerHTML=  `${data.results[0].name.first}`
    employeeName.innerHTML+= ` ${data.results[0].name.last}`
    employee.appendChild(employeeName);

    const employeeEmail= document.createElement('p');
    employeeEmail.innerHTML= `${data.results[0].email}`
    employee.appendChild(employeeEmail);

    const employeeCity= document.createElement('p');
    employeeCity.innerHTML= `${data.results[0].location.city}`
    employee.appendChild(employeeCity);

    employeeList.appendChild(employee);
}

