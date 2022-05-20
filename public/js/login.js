function iniciarSesion() {
  let email = $("#txtLogin").val();
  let pass = $("#txtPass").val();
  let data = {
      correo: email,
      password: pass
  }
  fetch("/api/auth/login", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
        if($.isEmptyObject(data.error)){
            localStorage.setItem("token",data.token);
            window.location = "/views/"
        }else{
            alert("credenciales incorrectas")
        }
            
    })
    .catch((error) => {
        alert("Ocurrio un error")
        console.error("Error:", error);
    });
}
