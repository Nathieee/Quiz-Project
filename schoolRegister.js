function validation() {
  let input_field = document.querySelectorAll(".input_field");
  for (let i = 0; i < input_field.length; i++) {
    if (input_field[i].value === "" || input_field[i].value === null) {
      input_field[i].nextElementSibling.innerHTML =
      input_field[i].previousElementSibling.innerHTML + " is required";
    } else {
      input_field[i].nextElementSibling.innerHTML = "";
      input_field[i].value == ""      
    }
  }
}

let schoolRegister_Form = document.getElementsByClassName('schoolRegister_Form');
let schoolName = document.getElementById('schoolName');
let schoolEmail = document.getElementById('schoolEmail');

class School {
  constructor (schoolName, schoolEmail){
    this.schoolName = schoolName;
    this.schoolEmail = schoolEmail
  }
}

let schoolArr = JSON.parse(localStorage.getItem('RegisteredSchools')) || [];

document.getElementById('registerSchoolBtn').onclick = (e) => {
    e.preventDefault();
    validation();
    let modal = document.getElementById('modal');
    let modalText = document.getElementById('modalText');
    let closemodal = document.getElementsByClassName('close')[0]; 
    modal.style.display = 'block';
        closemodal.onclick = () => {
        modal.style.display = 'none';
      } 
      if(schoolName.value != "" && schoolEmail.value != ""){
        let schooldata = new School(schoolName.value, schoolEmail.value);
        console.log(schooldata);
        schoolArr.push(schooldata);
        console.log(schoolArr);
        localStorage.setItem('RegisteredSchools', JSON.stringify(schoolArr))        
        modalText.innerHTML = 'You have sucessfully registered your School. Goodluck to your Candidates!'        
        }
        else{
          modalText.innerHTML = 'Kindly fill the form to register  your School';                
  }   
}











