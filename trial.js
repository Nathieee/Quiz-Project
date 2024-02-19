document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
  
    if (username === storedUsername && password === storedPassword) {
      // Redirect to home page
      window.location.href = 'home.html';
    } else {
      // Show modal
      var modal = document.getElementById('modal');
      modal.style.display = 'block';
  
      // Close modal when the 'x' is clicked
      var closeBtn = document.getElementsByClassName('close')[0];
      closeBtn.onclick = function() {
        modal.style.display = 'none';
      }
    }
  });
  