// PanelStream - conexión Supabase


const SUPABASE_URL = 
"https://tmfbecurjogbafxnnql.supabase.co";


// Clave anon public de Supabase

const SUPABASE_KEY = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZmJlY3VybGpvZ2JhZnhubnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MjAzMzMsImV4cCI6MjEwNDQ5NjMzM30.jiVjxdm0AQCtmReQofkKD4n5aHU6Y84ONup6g8MuupA";



const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);



// Inicio de sesión administrador

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



    const {data, error} = await supabaseClient.auth.signInWithPassword({

        email: email,

        password: password

    });



    if(error){

        mensaje.innerHTML = error.message;

        console.log(error);

        return;

    }



    mensaje.innerHTML = "Ingreso correcto";


    document.querySelector(".card").style.display="none";


    document.getElementById("panel").style.display="block";


    console.log(
        "Administrador conectado:",
        data.user
    );


}
