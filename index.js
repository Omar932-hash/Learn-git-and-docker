function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
  
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Registered successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");
  
    if (username === storedUser && password === storedPass) {
      alert("Login successful!");
      window.location.href = "page2.html";
    } else {
      alert("Incorrect username or password.");
    }
  }