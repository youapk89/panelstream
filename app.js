// PanelStream - conexión Supabase


const SUPABASE_URL = 
"https://tmfbecurjogbafxnnql.supabase.co";


const SUPABASE_KEY = 
"sb_publishable_13TqMbS-zCkJIOyVIf06xw_pUgwTGNs";


const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);


// ÚNICO ADMINISTRADOR

const ADMIN_EMAIL = "josimar8999@gmail.com";



// LOGIN

async function login(){


let email = document.getElementById("email").value;

let password = document.getElementById("password").value;


let mensaje = document.getElementById("mensaje");



if(email !== ADMIN_EMAIL){

mensaje.innerHTML = "Usuario no autorizado";

return;

}



const {data,error} = await supabaseClient.auth.signInWithPassword({

email: email,

password: password

});



if(error){

mensaje.innerHTML = error.message;

return;

}



mensaje.innerHTML = "Ingreso correcto";


document.querySelector(".card").style.display="none";


document.getElementById("panel").style.display="block";



console.log("Administrador conectado", data.user);



}
