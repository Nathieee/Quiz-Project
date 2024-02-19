let studentLogin_Form = document.getElementsByClassName('studentLogin_Form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let modal = document.getElementById('modal');
let closemodal = document.getElementsByClassName('close')[0];      

function validation3() {
  let input_field = document.querySelectorAll(".input_field");
  for (let i = 0; i < input_field.length; i++) {
    if (input_field[i].value === "" || input_field[i].value === null) {
      input_field[i].nextElementSibling.innerHTML =
        input_field[i].previousElementSibling.innerHTML + " is required";
      } else {
        input_field[i].nextElementSibling.innerHTML = "";
        input_field[i].value == "";        
      }
    }
  }
  
document.getElementById('login_Btn').onclick = (e) => {
  e.preventDefault();
  validation3();
  let studentdata = JSON.parse(localStorage.getItem('studentsData'));    
  if(studentdata == null){
    alert('Data unavailable');
    
  }
  else{
    for (let i = 0; i < studentdata.length; i++){
      if (studentdata[i].email==email.value  && studentdata[i].password== password.value){
        // alert('Login Successful');
        let modalText = document.getElementById('modalText');
        modalText.innerHTML = 'welcome ' + studentdata[i].firstName + ' ' + studentdata[i].lastName
        modal.style.display = 'block';
        closemodal.onclick = () => {
        modal.style.display = 'none';
        window.location.href = "home.html"
      } 
      }
      else if(studentdata[i].email!=email.value  && studentdata[i].password != password.value){
        modal.style.display = 'block';
        closemodal.onclick = () => {
        modal.style.display = 'none';
      }
      }       
    }        
  }   
}
