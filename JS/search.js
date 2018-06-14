const searchBtn= document.getElementById('searchBtn');
const searchInput= document.getElementById('search-input');
const searchNames= document.getElementsByClassName('employee-name');

//name search input******
searchInput.addEventListener('keyup', ()=>{
    for(let i=0; i < employeeCards.length; i++){
        if(searchNames[i].textContent.toUpperCase().indexOf(searchInput.value.toUpperCase()) > -1){
            employeeCards[i].style.display= "block";
        }else{
            employeeCards[i].style.display= "none";
        }
    }
});
//name search searchbtn****
searchBtn.addEventListener('click', ()=>{
    for(let i=0; i < employeeCards.length; i++){
        if(searchNames[i].textContent.toUpperCase().indexOf(searchInput.value.toUpperCase()) > -1){
            employeeCards[i].style.display= "block";
        }else{
            employeeCards[i].style.display= "none";
        }
    }
});






//functions not used*****
function hideCards(){
    for(let i=0; i<employeeCards.length; i++){
        employeeCards[i].style.display= "none";
    }
}

function appendCards(cardNumber){
    employeeCards[cardNumber].style.display= "block";
}

