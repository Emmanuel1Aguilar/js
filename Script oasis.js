const formulario = document.querySelector('#formulario');
        const boton = document.querySelector('#boton')
        const resultado = document.querySelector('#resultado')

        const filtrar = ()=>{
           // console.log(formulario.value);

            resultado.innerHTML = '';
            const texto = formulario.value.toLowerCase();
            for(let producto of productos){
                let nombre = producto.nombre.toLocaleLowerCase();
    
                if(nombre.indexOf(texto) !==-1){
                    resultado.innerHTML += `
                    <li>${producto.nombre} </li>
                    `
                }
            }
            
        }

        boton.addEventListener('click', filtrar)
        formulario.addEventListener('keyup', filtrar)

        filtrar();