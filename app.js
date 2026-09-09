// PanelStream - conexión Supabase

const SUPABASE_URL = "https://tmfbecurjogbafxnnql.supabase.co";

const SUPABASE_KEY = "sb_publishable_13TqMbS-zCkJIOyVIf06xw_pUgwTGNs";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("PanelStream conectado a Supabase");

// Usuario administrador permitido
const ADMIN_EMAIL = "josimar8999@gmail.com";

// Iniciar sesión
async function login(email, password) {
  if (email !== ADMIN_EMAIL) {
    alert("Usuario no autorizado");
    return;
  }

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
    return;
  }

  console.log("Sesión iniciada", data.user);
}
