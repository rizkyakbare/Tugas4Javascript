function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "antok" && password == "antok123") {
      alert("Selamat Datang Antok, Anda Admin");
    } else if (username == "totok" && password == "totok123") {
      alert("Selamat Datang totok, Anda Supervisor");
    } else {
      alert("Maaf Anda Gagal Login");
    }
  }
  