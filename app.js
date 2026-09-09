// PanelStream - conexión Supabase


const SUPABASE_URL = 
"https://tmfbecurjogbafxnnql.supabase.co";


// Pega aquí la clave ANON PUBLIC de Supabase
const SUPABASE_KEY = 
"AQUI_VA_TU_ANON_KEY";



const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);



// Login administrador

async function login(){


    const email = document
    .getElementById("email")
    .value
    .trim();


    const password = document
    .getElementById("password")
    .value;


    const mensaje = document
    .getElementById("mensaje");



    const { data, error } = await supabaseClient.auth.signInWithPassword({

        email: email,

        password: password

    });



    if(error){

        mensaje.innerHTML = error.message;

        console.log(error);

        return;

    }



    mensaje.innerHTML = "Ingreso correcto";


    document.querySelector(".card").style.display = "none";


    document.getElementById("panel").style.display = "block";


    console.log("Usuario conectado", data.user);


}
