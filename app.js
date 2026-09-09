// PANELSTREAM PRUEBA SUPABASE

const SUPABASE_URL = "https://tmfbecurjogbafxnnql.supabase.co";

const SUPABASE_KEY = "sb_publishable_13TqMbS-zCkJIOyVIf06xw_pUgwTGNs";


const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


document.getElementById("estado").innerHTML =
"Panel cargado correctamente";


async function probarConexion(){

    let estado = document.getElementById("estado");

    estado.innerHTML = "Probando conexión...";


    const { data, error } = await supabaseClient
    .from("servicios")
    .select("*");


    if(error){

        console.log(error);

        estado.innerHTML =
        "Error conexión: " + error.message;

        return;
    }


    console.log(data);


    estado.innerHTML =
    "Conectado a Supabase ✅<br>Total registros: " + data.length;

}
