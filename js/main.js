function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "mimin" && password == "mimin123") {
      alert("Selamat Datang Mimin, Anda Administrator");
    } else if (username == "budi" && password == "budi123") {
      alert("Selamat Datang Budi, Anda Operator");
    } else {
      alert("Maaf Anda Gagal Login");
    }
  }
  