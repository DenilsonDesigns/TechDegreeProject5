/**
 * fields required
 * 
 * birthdate
 */

//creating modal
var modal= document.createElement('div');
modal.id= "employeeModal";
modal.classList.add('modal');
page.appendChild(modal);
var modalContent= document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);
//fields for modal
const employeePic= document.createElement('img');
modalContent.appendChild(employeePic);
const detailsDiv= document.createElement('div');
detailsDiv.classList.add('modal-card-deets');
const employeeName= document.createElement('h4');
detailsDiv.appendChild(employeeName);
const employeeUsername= document.createElement('p');
detailsDiv.appendChild(employeeUsername);
const employeeEmail= document.createElement('p');
detailsDiv.appendChild(employeeEmail);
const employeeCell= document.createElement('p');
detailsDiv.appendChild(employeeCell);
const employeeAddress= document.createElement('p');
employeeAddress.style.textTransform= "capitalize";
detailsDiv.appendChild(employeeAddress);
modalContent.appendChild(detailsDiv);
const buttDiv= document.createElement('div');
modalContent.appendChild(buttDiv);
const prevButt= document.createElement('button');
prevButt.innerHTML= "Prev";
//eventlistener to be added ***********
prevButt.addEventListener('click', prevButton);
buttDiv.appendChild(prevButt);
const closeBtn= document.createElement('button');
closeBtn.innerHTML= "Close";
closeBtn.addEventListener('click', closeModal);
buttDiv.appendChild(closeBtn);
const nextButt= document.createElement('button');
nextButt.innerHTML= 'Next';
//eventlistener to be added ********
nextButt.addEventListener('click', nextButton);
buttDiv.appendChild(nextButt);

//listener for employee cards. 
employeeList.addEventListener('click', (e)=>{
    if(e.target.id>=0 && e.target.id<=12){
    modal.style.display= "block";
    modalPopulate(employees, e.target.id);
    console.log(e.target.id);
    }
});

function closeModal(){
    modal.style.display= "none";
}

function prevButton(){
    if(modalContent.id>=1){
    modalPopulate(employees, modalContent.id -1)
    }
}

function nextButton(){
    if(modalContent.id<11){
    modalPopulate(employees, Number(modalContent.id) +1)
    }
}


//populate modal
function modalPopulate(data, employeeNum){
    employeePic.src= `${data[employeeNum].picture.large}`
    employeeName.innerHTML=  `Name: ${data[employeeNum].name.first}`
    employeeName.innerHTML+= ` ${data[employeeNum].name.last}`
    employeeUsername.innerHTML= `Username: ${data[employeeNum].id.name}`
    employeeEmail.innerHTML= `Email: ${data[employeeNum].email}`
    employeeCell.innerHTML= `Cell: ${data[employeeNum].cell}`
    employeeAddress.innerHTML= `${data[employeeNum].location.street}, ${data[employeeNum].location.city},
    ${data[employeeNum].location.state} ${data[employeeNum].location.postcode}`

    modalContent.id= employeeNum;
}
