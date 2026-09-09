// PANELSTREAM SIN LOGIN


const SUPABASE_URL = "https://tmfbecurjogbafxnnql.supabase.co";


const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtZmJlY3VybGpvZ2JhZnhubnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MjAzMzMsImV4cCI6MjEwNDQ5NjMzM30.jiVjxdm0AQCtmReQofkKD4n5aHU6Y84ONup6g8MuupA";


const supabaseClient = supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);



document.getElementById("estado").innerHTML =
"Panel iniciado correctamente";



async function probarConexion(){


const estado = document.getElementById("estado");


estado.innerHTML="Conectando...";



const {data,error}=await supabaseClient
.from("servicios")
.select("*")
.limit(5);



if(error){


estado.innerHTML="Error: "+error.message;

console.log(error);

return;

}



estado.innerHTML =
"Supabase conectado correctamente";


console.log("Servicios:",data);


}
