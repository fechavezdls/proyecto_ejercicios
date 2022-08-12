//objeto es una entidad independiente que tiene propiedades y atributos
//atributos de un carro: timon, pedal, llantas, color, placa, etc

const carro={
    color: "azul",
    motor: 3.0,
    modelo:"Audi",
    nuevo:"true",
};

const persona={
    edad: 30,
    nombre:"Felipe",
    apellido:"Chavez",
};

console.log(carro);

const campamento={
    lugar : "San Miguel",
    altura: "3200 msnm",
    Area: "Administracion",
    Comedor: "Sodexo",
    Pais: "Peru",
    Cantidad_gente: 500,
}
console.log("Campamento", "Area:", campamento.Area);

//insertar nuevo key y value en un objeto
//forma 1: agregando "empresa"
campamento.empresa="CMGP";
//forma 2: agregando "cliente"
campamento["cliente"]="COGA";

console.log(campamento);

//crear una funcion que me valide si el usuario es de Peru
//si es de Perú imprimir su nickname y nivel de juego
//si no es de Perú imprimir oye no eres de Perú

//crearé el objeto de usuario
const usuario={
    nickname: "Felipin",
    email: "tulokito@gmail.com",
    password: "*****",
    carnetVacunacion: true,
    location: "Peru",
    level: "Master",
    edad: "18",
};

const DefineUsuario=(usuarioObjeto)=>{
    const{nickname,location,level}=usuarioObjeto;
    if(location==="Peru"){
        return `${nickname} ${level}`;
    }else{
        return `Oye tu ${nickname} no eres de Peru`;
    }
}

console.log(DefineUsuario(usuario));