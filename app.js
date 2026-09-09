// PanelStream - conexión Supabase


const SUPABASE_URL = 
"https://tmfbecurjogbafxnnql.supabase.co";


const SUPABASE_KEY = 
"sb_publishable_13TqMbS-zCkJIOyVIf06xw_pUgwTGNs";



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



    if(!email || !password){

        mensaje.innerHTML = "Complete todos los campos";

        return;

    }



    const {data, error} = await supabaseClient.auth.signInWithPassword({

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


    console.log("Usuario conectado:", data.user);



}
