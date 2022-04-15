let Pizzas = [
    {
    id: '1',
    nombre: 'Muzza', 
    ingredientes : ['Salsa de tomate, Muzzarella y Oregano'], 
    precio: '500',
    },
    
    {
    id: '2',
    nombre: 'Especial', 
    ingredientes: ['Salsa de tomate, Muzzarella, Jamon Cocido y Oregano'], 
    precio: '800',
    },
    
    {
    id: '3', 
    nombre: 'Caprese',
    ingredientes: ["Salsa de tomate, Muzzarella, Tomate en Rodajas y Albahaca"],
    precio: '700',
    },
    
    { id: '4', 
    nombre: 'Americana',  
    ingredientes: ['Salsa de tomate, Muzzarella, Panceta y PapasPay'], 
    precio: '900',
    },
    
    {
    id: '5', 
    nombre: 'Provolone', 
    ingredientes: ['Salsa de tomate, Muzzarella, Queso Provolone'], 
    precio: '850',
    },
    
    {
    id: '6', 
    nombre: 'Rucula y crudo', 
    ingredientes: ['Salsa de tomate, Muzzarella, Rucula Fresca y Jamon Crudo'], 
    precio: '1000',
    },
    
    ]

      alert('A continuacion podra ver la variedad de pizzas')
        console.log("%cLas pizzas son:", 'color:purple');

            Pizzas.forEach(object =>{ 
            console.log(object.id, object.nombre, "y sus ingredientes son:", object.ingredientes[0], )

            });


      alert ('A continuacion podra ver las pizzas con id impar')
      console.log ("%cLas pizzas con id impar son:", "color:purple")
      Pizzas.forEach(object =>{
        if(object.id %2 !==0){
            console.log(object.nombre, object.id);
        }
    });


      alert ('¿Hay alguna pizza que salga menos de $600?')
      alert ('Obvio que si, aca está')
      Pizzas.forEach(object =>{
        if(object.precio < 600){
            console.log("%cLa pizza cuyo precio es menor a $600 es:", "color:purple")
            console.log(object.nombre, "$", object.precio);
        }
    });
      

      alert ('Si quiere saber que precio tienen las pizzas aprete enter')

      console.log ("%cTipos de pizza con sus precios", "color:yellow")

      console.log("%cLas pizzas son:", 'color:purple');

      Pizzas.forEach(object =>{ 
      console.log( object.id, object.nombre, "y tiene un valor de:", "$", object.precio )

      });




      
      


