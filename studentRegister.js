let studentRegistration_Form = document.getElementsByClassName('studentRegistration_Form');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let schoolName = document.getElementById('schoolName');
let selectErr = document.getElementById('selectErr');


function validation2() {
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
    if (schoolName.value == ''){
      selectErr.innerHTML = 'Kindly select your school';
      selectErr.style.color = 'red';
      selectErr.style.fontstyle = 'italic';
    }
}

// TO TAKE THE NAMES OF THE SCHOOLS AND POPULATE IN THE SELECT TAG 
function showSchools(){
    let schoolsdata = JSON.parse(localStorage.getItem('RegisteredSchools'));
  // console.log(schoolsdata)

  schoolsdata.forEach(
    function populate_schools(data){
      let option = document.createElement('option');
      option.value = data.schoolName;
      option.innerHTML = data.schoolName;
      schoolName.appendChild(option)
    }
  );
}
showSchools();

class Student {
  constructor(firstName, lastName, email, password, schoolName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.schoolName = schoolName;
  }  
}

let studentArr = JSON.parse(localStorage.getItem('studentsData')) || [];

document.getElementById('createUser_Btn').onclick = (e) => {
    e.preventDefault();
    validation2();
    let modal = document.getElementById('modal');
    let modalText = document.getElementById('modalText');
    let closemodal = document.getElementsByClassName('close')[0]; 
    modal.style.display = 'block';
        closemodal.onclick = () => {
        modal.style.display = 'none';
      }
    if (firstName.value != '' || lastName.value != '' || email.value!= '' || password.value!= '' || schoolName.value!= ''){
      let candidate = new Student(firstName.value, lastName.value, email.value, password.value, schoolName.value)
      studentArr.push(candidate);
      console.log(studentArr);
      localStorage.setItem('studentsData', JSON.stringify(studentArr));      
      modalText.innerHTML = 'You have sucessfully registered. Goodluck in your Quiz';
    }
    else{
      modalText.innerHTML = 'Dear candidate, Kindly fill the form to register';      
    }
}