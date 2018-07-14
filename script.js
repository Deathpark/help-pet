let user = document.querySelector("#usuario");
let password = document.querySelector("#senha");
let loginButton = document.querySelector("#login");
let infoPop = document.querySelector("#Info");

var usuarios = [
  {
    nome: "top",
    tel: "xxx",
    bairro: "alves",
    cidade: "bh",
    estado: "mg",
    rua: "rua 2",
    foto: "src",
    user: "administrador",
    password: "BRT"
  },
  {
    nome: "top",
    tel: "xxx",
    bairro: "alves",
    cidade: "bh",
    estado: "mg",
    rua: "rua 2",
    foto: "src",
    user: "admin",
    password: "123"
  }
];

function login(){
  //pegar o usuário e senha e exportar para o banco de dados para conferir o usuário e Senha
  let usuario = user.value;
  let senha = password.value;
  if (conferirPerfil(usuario, senha) == true){
    alert("Login realizado com sucesso!");
    window.location.href = "feed.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

function conferirPerfil(user, s){
  for(let i=0; i<usuarios.length; i++){
    if(user==usuarios[i].user && s==usuarios[i].password){
      return true;
    }
  }
  return false;
}

loginButton.addEventListener("click", login);

/*PARTE DO CADASTRO*/
let cadnome = document.querySelector("#camponome");
let cadtel = document.querySelector("#campotel");
let cademail = document.querySelector("#campoemail");
let cadestado = document.querySelector("#campoestado");
let cadcidade = document.querySelector("#campocidade");
let cadbairro = document.querySelector("#campobairro");
let cadrua = document.querySelector("#camporua");
let cadfoto = document.querySelector("#inputGroupFile01");
let cadsenha = document.querySelector("#camposenha");
let butaocadrasto = document.querySelector("#receberDados");

function cadastro(){
  usuarios.push({
    nome: cadnome.value,
    user: cademail.value,
    tel: cadtel.value,
    bairro: cadbairro.value,
    cidade: cadcidade.value,
    estado: cadestado.value,
    rua: cadrua.value,
    foto: cadfoto.value,
    password: cadsenha.value,
  });
  console.log(usuarios);
  alert("Logue-se!");
}

butaocadrasto.addEventListener("click", cadastro);
