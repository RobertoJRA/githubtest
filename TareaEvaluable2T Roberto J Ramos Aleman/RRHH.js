let inputNombre = document.querySelector("input#input-nombre")
let inputApellidos = document.querySelector("input#input-apellido")
let inputEmail = document.querySelector("input#input-Email")
let inputDepartamento = document.querySelector("#input-Departamento")
let botonAgregar = document.querySelector("#boton-agregar")
let listaTrabajadores = document.querySelector("#lista-usuarios")
let listaTrabajadoresDatos = [];
let miembrosI = 0;
let miembrosM = 0;
let miembrosV = 0;
let miembrosA = 0;


botonAgregar.addEventListener('click', () => {
 event.preventDefault();
    if (inputNombre.value.length > 0 && inputApellidos.value.length > 0 && inputEmail.value.length > 0 && inputDepartamento.value !== "-Elija un departamento") { 

        let nodo = document.createElement("li");                            
        nodo.textContent = `${inputNombre.value} ${inputApellidos.value}` // ${inputEmail.value}     ${inputDepartamento.value}
        nodo.className="animate__animated animate__zoomInUp list-group-item";   
        nodo.addEventListener("click", ()=>{
            console.log("Elemento pulsado");   
            nodo.classList.remove("animate__animated");    
            nodo.classList.remove("animate__zoomInUp");
            nodo.classList.add("animate__animated");
            nodo.classList.add("animate__bounce");
        });
        listaTrabajadores.append(nodo);   




        let trabajador = {
            nombre: inputNombre.value,
            apellidos: inputApellidos.value,
            email: inputEmail.value,
            departamento: inputDepartamento.value,
        };
        listaTrabajadoresDatos.push(trabajador);

        inputNombre.value=""        
        inputApellidos.value=""
        inputEmail.value = ""
        inputDepartamento.value = "Elija un departamento"

        switch(trabajador.departamento) {
            case "IT": miembrosI++; break;
            case "Marketing": miembrosM++; break;
            case "Ventas": miembrosV++; break;
            case "Administración": miembrosA++; break;
        }

        console.log(miembrosA, miembrosI, miembrosM, miembrosV)

        document.getElementById('parrafoI').textContent = `${miembrosI} Miembros`;
        document.getElementById('parrafoM').textContent = `${miembrosM} Miembros`;
        document.getElementById('parrafoV').textContent = `${miembrosV} Miembros`;
        document.getElementById('parrafoA').textContent = `${miembrosA} Miembros`;


 
        
    }else{
        
    }
});