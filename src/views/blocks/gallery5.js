const hbs = `
<div class="container align-items-center py-3" style="background-color: {{backgroundColor}}">
  <div class="row">
    <div class="col-md-6 ">
      <img src="{{img1}}" alt="{{alt1}}" class="img-fluid img-thumbnail">
    </div>
    <div class="col-md-6">
      <h2 class="text-center" style="color: {{colorTitle}}">{{title}}</h2>
      <p>Seu texto vai aqui. Você pode adicionar qualquer conteúdo que desejar, como parágrafos, listas, etc.</p>
      <div class="d-flex justify-content-center">
        <a class="btn" href="{{href}}" style="color: {{colorButtonLabel}}; background-color: {{backgroundColorBUtton}}">{{button}}</a>
      </div>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: "1 column gallery",
  previewImageUrl: "https://i.imgur.com/KuFZSqA.png",
  category: "Galeria de Imagens",
  defaultData: {
    title: "Título do bloco",
    img1: "https://via.placeholder.com/450x450",
    alt1: "Sample image",
    button: "Comprar",
    href: "http://google.com",
    backgroundColor: "#fff",
    colorTitle: "#000",
    colorButtonLabel: '#fff',
    backgroundColorBUtton: "#007bff"
  },
  config: {
    title: {
      type: "string",
      name: "Título do bloco",
    },
    colorTitle:{
      type: "color",
      name: "Cor do título"
    },
    img1: {
      type: "string",
      name: "Url to image #1",
    },
    backgroundColor: {
      type: "color",
      name: "Cor do Fundo",
    },
    img2: {
      type: "string",
      name: "Url to image #2",
    },
    button: {
      type: "string",
      name: "Comprar",
    },
    backgroundColorBUtton:{
      type: "color",
      name: "Cor do botão"
    },
    colorButtonLabel:{
      type: 'color',
      name: "Cor do texto do botão"
    },
    alt1: {
      type: "string",
      name: "Alt for image #1",
    },
  },
};

export default block;
