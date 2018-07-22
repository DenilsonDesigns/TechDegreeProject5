//creating modal
var modal= document.createElement('div');
modal.id= "employeeModal";
modal.classList.add('modal');
page.appendChild(modal);
var modalContent= document.createElement('div');
modalContent.classList.add('modal-content');
modal.appendChild(modalContent);
//fields for modal
const employeePicMod= document.createElement('img');
modalContent.appendChild(employeePicMod);
const detailsDivMod= document.createElement('div');
detailsDivMod.classList.add('modal-card-deets');
const employeeNameMod= document.createElement('h4');
detailsDivMod.appendChild(employeeNameMod);

const employBdateMod= document.createElement('p');
employBdateMod.classList.add('bday');
detailsDivMod.appendChild(employBdateMod);

const employeeUsernameMod= document.createElement('p');
detailsDivMod.appendChild(employeeUsernameMod);
const employeeEmailMod= document.createElement('p');
detailsDivMod.appendChild(employeeEmailMod);
const employeeCellMod= document.createElement('p');
detailsDivMod.appendChild(employeeCellMod);
const employeeAddressMod= document.createElement('p');
employeeAddressMod.style.textTransform= "capitalize";
detailsDivMod.appendChild(employeeAddressMod);
const employeeStateZip= document.createElement('p');
employeeStateZip.style.textTransform= "capitalize";
detailsDivMod.appendChild(employeeStateZip);
modalContent.appendChild(detailsDivMod);
const buttDiv= document.createElement('div');
modalContent.appendChild(buttDiv);
const prevButt= document.createElement('button');
prevButt.innerHTML= "Prev";
prevButt.addEventListener('click', prevButton);
buttDiv.appendChild(prevButt);
const closeBtn= document.createElement('button');
closeBtn.innerHTML= "Close";
closeBtn.addEventListener('click', closeModal);
buttDiv.appendChild(closeBtn);
const nextButt= document.createElement('button');
nextButt.innerHTML= 'Next';
nextButt.addEventListener('click', nextButton);
buttDiv.appendChild(nextButt);

//listener for employee cards. 
//change to only listen to employee cards

for(let i=0; i<employeeCards.length; i++){
    employeeCards[i].addEventListener('click', (e)=>{
        modal.style.display= "block";
        modalPopulate(employees, e.target.id);
    });
}

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
    employeePicMod.src= `${data[employeeNum].picture.large}`
    employeeNameMod.innerHTML=  `${data[employeeNum].name.first}`
    employeeNameMod.innerHTML+= ` ${data[employeeNum].name.last}`
    employBdateMod.innerHTML= 'D.O.B: '+data[employeeNum].dob.date.slice(0,10);
    employeeUsernameMod.innerHTML= `${data[employeeNum].login.username}`
    employeeEmailMod.innerHTML= `${data[employeeNum].email}`
    employeeCellMod.innerHTML= `${data[employeeNum].cell}`
    employeeAddressMod.innerHTML= `${data[employeeNum].location.street}, ${data[employeeNum].location.city}
    `
    employeeStateZip.innerHTML= `${data[employeeNum].location.state} ${data[employeeNum].location.postcode}`
    modalContent.id= employeeNum;
}
