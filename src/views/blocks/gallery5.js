const hbs = `
<div class="container mt-4">
  <div class="row">
    <div class="col-md-6">
      <img src="{{img1}}" alt="{{alt1}}" class="img-fluid">
    </div>
    <div class="col-md-6">
      <h2 class="text-center">{{title}}</h2>
      <p>Seu texto vai aqui. Você pode adicionar qualquer conteúdo que desejar, como parágrafos, listas, etc.</p>
      <div class="d-flex justify-content-center">
        <a class="btn btn-primary" href="{{href}}">{{button}}</a>
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
  },
  config: {
    title: {
      type: "string",
      name: "Título do bloco",
    },
    img1: {
      type: "string",
      name: "Url to image #1",
    },
    img2: {
      type: "string",
      name: "Url to image #2",
    },
    button: {
      type: "string",
      name: "Comprar",
    },
    alt1: {
      type: "string",
      name: "Alt for image #1",
    },
  },
};

export default block;
