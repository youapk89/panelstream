// PANELSTREAM PRUEBA SUPABASE


const SUPABASE_URL = "https://tmfbecurjogbafxnnql.supabase.co";


const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZmJlY3VybGpvZ2JhZnhubnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MjAzMzMsImV4cCI6MjEwNDQ5NjMzM30.jiVjxdm0AQCtmReQofkKD4n5aHU6Y84ONup6g8MuupA";


const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);



async function login(){


const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

const mensaje = document.getElementById("mensaje");



try{


mensaje.innerHTML="Probando conexión...";



// prueba directa a Supabase

const {data,error}=await supabaseClient
.from("servicios")
.select("*")
.limit(1);



if(error){


console.log(error);

mensaje.innerHTML="ERROR: "+error.message;


return;

}



mensaje.innerHTML="CONEXIÓN SUPABASE CORRECTA";


console.log("Datos:",data);



}catch(e){


console.log(e);

mensaje.innerHTML="Fallo conexión";


}


}
