function irDashboard() {
  window.location = "/views/";
}

function irForm() {
  window.location = "/views/form";
}

function guardarNota() {
  let msg = validarCampos();
  let titulo = $("#txtName").val();
  let descripcion = $("#txtComents").val();
  let data = {
    titulo: titulo,
    descripcion: descripcion,
    token: localStorage.getItem("token"),
  };
  if (msg == "OK") {
    fetch("/api/notas/insert", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if ($.isEmptyObject(data.error)) {
          window.location = "/views/form";
          $('#txtName').val('');
          $('#txtComents').val('');
        } else {
          alert(data.error);
        }
      })
      .catch((error) => {
        alert("Ocurrio un error");
        console.error("Error:", error);
      });
  }else{
    alert(msg);
  }
}

function validarCampos() {
  if (!$("#txtName").val()) {
    return "El titulo es obligatorio";
  }

  if (!$("#txtComents").val()) {
    return "La descripcion es obligatorio";
  }

  return "OK";
}

function logout() {
  let token = localStorage.getItem("token");
  localStorage.clear();
  window.location = "/api/auth/logout";
}
