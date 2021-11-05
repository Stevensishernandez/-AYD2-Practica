var x=10;
var y=20;

const datos = [
    {
      "No": "1",
      "First": "Juan",
      "Last": "Sanches",
      "Handle": "@JuanSan"
    },
    {
        "No": "2",
        "First": "Pedro",
        "Last": "Coelo",
        "Handle": "@Pedro"
    },
    {
        "No": "3",
        "First": "Pepito",
        "Last": "Sanches",
        "Handle": "@pepito"
    },
  ];


function prueba(){
    contenedor = document.getElementById('result');
    var contenidoTable = '';
    datos.forEach(element => {
        contenidoTable += `
        <tr>
        <th scope="row"> ${element.No} </th>
        <td>${element.First}</td>
        <td>${element.Last}</td>
        <td>${element.Handle}</td>
        </tr>
        `;
    });

    contenedor.innerHTML = contenidoTable;

}




form = document.getElementById('contenido');

function utilizarForm(){
    email = document.getElementById('inputEmail4');
    password = document.getElementById('inputPassword4');
    address = document.getElementById('inputAddress');

    if(email.value != "" && password.value != "" && address.value != ""){
        alert('Todo esta bien');
        
    }else{
        if(email.value != ""){
            email.className = "form-control is-valid";
        }else{
            email.className += " is-invalid";
        }
        if(password.value != ""){
            password.className = "form-control is-valid";
        }else{
            password.className += " is-invalid";
        }
        if(address.value != ""){
            address.className = "form-control is-valid";
        }else{
            address.className += " is-invalid";
        }
    }

    
}




