const ingredientes = ["Harina 000", "Levadura", "Sal", "Aceite de girasol", "Agua tibia", "Azucar", "Mozzarella", "Salsa de tomate", "Oregano", "Jamon Crudo", "Rucula"]

function ParImpar (ingredientes) {
    const par = [];
    const impar = [];

    for (let i = 0; i < ingredientes.length; i++){
    if (ingredientes[i].length % 2 ===0){
        par.push(ingredientes[i]);
    } else {impar.push(ingredientes[i]);
    }
    } 
      return [par, impar];
}

const [par, impar] = ParImpar(ingredientes);

console.log(`Los ingredientes pares son: ${par}`); 
console.log(`Los ingredientes impares son:, ${impar}`)