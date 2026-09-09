// PanelStream - conexión Supabase


const SUPABASE_URL = 
"https://tmfbecurjogbafxnnql.supabase.co";


const SUPABASE_KEY = 
"sb_publishable_13TqMbS-zCkJIOyVIf06xw_pUgwTGNs";


// Crear conexión

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// Único usuario administrador permitido

const ADMIN_EMAIL = "josimar8999@gmail.com";



// Función de ingreso

async function login(){


    const email = document
    .getElementById("email")
    .value
    .trim()
    .toLowerCase();


    const password = document
    .getElementById("password")
    .value;


    const mensaje = document
    .getElementById("mensaje");



    // Validar administrador

    if(email !== ADMIN_EMAIL){

        mensaje.innerHTML = "Usuario no autorizado";

        return;

    }



    // Iniciar sesión en Supabase

    const { data, error } = await supabaseClient.auth.signInWithPassword({

        email: email,

        password: password

    });



    if(error){

        mensaje.innerHTML = error.message;

        return;

    }



    // Login correcto

    mensaje.innerHTML = "Ingreso correcto";


    document.querySelector(".card").style.display = "none";


    document.getElementById("panel").style.display = "block";


    console.log(
        "Administrador conectado:",
        data.user
    );


}
