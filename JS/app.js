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
fetch('https://randomuser.me/api/?results=200')
    .then(response => response.json())
    .then(data=> {employees= data.results; })
//.then(data => generateDetails(data))
//.then(data=> console.log(data))

    //print first page of results
    .then(data=>{
        for(let j=0; j<12; j++){
            generateDetails(employees, j)
        }
        modalPopulate(employees, 1);
    })
    // .then(data=>{
    //     pagin(employees)
    // })



//helper function
function generateDetails(data, i){
    const employee= document.createElement('div');
    employee.classList.add('employee-card');

    const employeePic= document.createElement('img');
    employeePic.src= `${data[i].picture.large}`
    employee.appendChild(employeePic);

    const detailsDiv= document.createElement('div');
    detailsDiv.classList.add('employ-card-deets');
    const employeeName= document.createElement('h4');
    employeeName.innerHTML=  `${data[i].name.first}`
    employeeName.innerHTML+= ` ${data[i].name.last}` 
    detailsDiv.appendChild(employeeName);

    const employeeEmail= document.createElement('p');
    employeeEmail.innerHTML= `${data[i].email}`
    detailsDiv.appendChild(employeeEmail);
   
    const employeeCity= document.createElement('p');
    employeeCity.innerHTML= `${data[i].location.city}`
    employeeCity.style.textTransform= "capitalize";
    detailsDiv.appendChild(employeeCity);

    employee.appendChild(detailsDiv);
    employeeList.appendChild(employee);
}


//making pagination
function pagin(list){
    const noOfButtons= Math.ceil(list.length/12);
  

    // create a page link section
    const paginDiv= document.createElement('div');
    paginDiv.className= 'pagination';
    employeeList.appendChild(paginDiv);
    const ul= document.createElement('ul');
    paginDiv.appendChild(ul);

    // based on no of buttons required, adding that number of buttons. 
    for(let i=1; i<= noOfButtons; i++){
        const li= document.createElement('li');
        ul.appendChild(li);
        const a= document.createElement('a');
        li.appendChild(a);
        a.href= "#";
        a.innerText= i;
    }
}  

