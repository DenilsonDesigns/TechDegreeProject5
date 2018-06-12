/**
 * fields required
 * 
 * birthdate
 */

//creating modal
var modal= document.createElement('div');
modal.id= "employeeModal";
modal.classList.add('modal');

var modalContent= document.createElement('div');
modalContent.classList.add('modal-content');

// var closeBtn= document.createElement('button');
// closeBtn.innerHTML= "Close";
// closeBtn.classList.add('closeBtn');

modal.appendChild(modalContent);
//modalContent.appendChild(closeBtn);
page.appendChild(modal);


//adding to modal

//listeners
employeeList.addEventListener('click', openModal);
//closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

//functions
function openModal(){
    modal.style.display= "block";
}

// function outsideClick(){
//     if(modal.style.display== "block"){
//         modal.style.display= "none";
//     }
// }


//populate modal
function modalPopulate(data, employeeNum){

    const employeePic= document.createElement('img');
    employeePic.src= `${data[employeeNum].picture.large}`
    modal.appendChild(employeePic);

    const detailsDiv= document.createElement('div');
    detailsDiv.classList.add('modal-card-deets');
    const employeeName= document.createElement('h4');
    employeeName.innerHTML=  `Name: ${data[employeeNum].name.first}`
    employeeName.innerHTML+= ` ${data[employeeNum].name.last}` 
    detailsDiv.appendChild(employeeName);

    const employeeUsername= document.createElement('p');
    employeeUsername.innerHTML= `Username: ${data[employeeNum].id.name}`
    detailsDiv.appendChild(employeeUsername);

    const employeeEmail= document.createElement('p');
    employeeEmail.innerHTML= `Email: ${data[employeeNum].email}`
    detailsDiv.appendChild(employeeEmail);

    const employeeCell= document.createElement('p');
    employeeCell.innerHTML= `Cell: ${data[employeeNum].cell}`
    detailsDiv.appendChild(employeeCell);

    const employeeAddress= document.createElement('p');
    employeeAddress.innerHTML= `${data[employeeNum].location.street}, ${data[employeeNum].location.city},
    ${data[employeeNum].location.state} ${data[employeeNum].location.postcode}`
    employeeAddress.style.textTransform= "capitalize";

    detailsDiv.appendChild(employeeAddress);

    modal.appendChild(detailsDiv);
    modal.style.backgroundColor= "white";
}
