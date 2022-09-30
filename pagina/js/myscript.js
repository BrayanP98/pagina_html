var btn_consulta, btn_registrar;
    

btn_registrar = $('#registrar');
btn_registrar.on('clicl',mostrarMensaje1);
function mostrarMensaje1(){
    alert('Bienvenido al curso JavaScript de aprenderaprogramar.com');
    }
    
    function mostrarMensaje2( ){
    alert('Ha hecho click sobre el párrafo inferior');
    }
    let nombre=String;
    function mostrarMensaje3(nombre){
        
        let num1=9;
        let num2=5;
        let suma=num1+num2
    alert('Estamos cargando los contenidos de la web...'+nombre);}
    

        
    function mostrarNombre(){

        var name = document.getElementById("name").value;
        if(parseInt(name)==3){
            alert("es el numero correcto")
        }else{
            var suma=parseInt(name)+3;
           //alert("hola"+suma)
            var salida = document.getElementById("resultado").innerHTML=suma;
            
        }

    }

    function saveContact(){

        var name = document.getElementById("name_con").value;
        var telefono = document.getElementById("cel_con").value;
            alert("BIENVENIDO"+telefono+"   "+name);
      
           // var salida = document.getElementById("resultado").innerHTML=suma;
            
        }