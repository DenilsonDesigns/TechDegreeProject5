//global selectors
const page= document.getElementsByClassName('page')[0];
const header= document.querySelector('.page-header');
//employee list ul to append li's to
const employeeList= document.querySelector('.employee-list');



//fetch api//////////

//**************** 
//fetch function
//********************
//variable to hold employees data
var employees;

//making request
fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(response => response.json())
    .then(data=> {employees= data.results; })

    //print first page of results
    .then(data=>{
        for(let j=0; j<12; j++){
            generateDetails(employees, j)
        }
    })

 
  
//creating employee cards
for(let i=0; i< 12; i++){
    const employee= document.createElement('div');
    employee.classList.add('employee-card');
    employee.id= i;

    const empPic= document.createElement('img');
    empPic.classList.add('employee-pics');
    empPic.id= i;
    employee.appendChild(empPic);

    const details= document.createElement('div');
    details.classList.add('employ-card-deets');
    details.id= i;

    const empName= document.createElement('h4');
    empName.classList.add('employee-name');
    empName.id= i;
    details.appendChild(empName);

    const empEmail= document.createElement('p');
    empEmail.classList.add('employee-email');
    empEmail.id= i;
    details.appendChild(empEmail);

    const empCity= document.createElement('p');
    empCity.classList.add('employee-city');
    empCity.id= i;
    details.appendChild(empCity);

    employee.appendChild(details);
    employeeList.appendChild(employee);

}

//grabbing employeecard elements
const employeeCards= document.getElementsByClassName('employee-card');
const employeePics= document.getElementsByClassName('employee-pics');
const employeeDetails= document.getElementsByClassName('employ-card-deets');
const employeeName= document.getElementsByClassName('employee-name');
const employeeEmail= document.getElementsByClassName('employee-email');
const employeeCity= document.getElementsByClassName('employee-city');


//helper function
function generateDetails(data, i){
    employeePics[i].src= `${data[i].picture.large}`
    employeeName[i].innerHTML=  `${data[i].name.first}`
    employeeName[i].innerHTML+= ` ${data[i].name.last}` 
    employeeEmail[i].innerHTML= `${data[i].email}`
    employeeCity[i].innerHTML= `${data[i].location.city}`
    employeeCity[i].style.textTransform= "capitalize";
}


