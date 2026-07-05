export function popResult(response) {
  const qntResponse = response.length; // Quantidade de resultados
  // Verifciando de ja tem um container
  const container1 = document.getElementById("container");
  if(container1){
    document.body.removeChild(container1) // Removendo container anterior
  }
  // Criando elementos:
  const container = document.createElement("div"); // Container response
  container.id = "container";
  container.classList.add("popResult");
  document.body.appendChild(container);

  const object = []; // Array de respostas;
  response.forEach((element) => {
    object.push(element);
  });

  // Elementos:
  const titulos = ["Nome:", "Sobrenome:", "E-mail:", "Data de nascimento"];
  const data = [
    "nome_usuario",
    "sobrenome_usuario",
    "email_usuario",
    "data_nascimento",
  ]; // Campos de resposta
  // Executar pela quantidade de resultados:
  for (let i = 0; i < qntResponse; i++) {
    let div = document.createElement("div");
    div.classList.add("secResult");
    // Gerando titulos de resposta:
    for (let j = 0; j < 4; j++) {
      let p = document.createElement("p");
      let result = document.createElement("p");
      // Inserindo titulo
      p.classList.add("titulo");
      p.textContent = titulos[j];
      div.appendChild(p);

      // Paragrafo de resposta
      result.classList.add("result");
      result.textContent = object[i][data[j]]; // Buscando dinamicamente;
      div.appendChild(result);
    }
    container.appendChild(div); // Separando em seções os resultados;
  }
}
