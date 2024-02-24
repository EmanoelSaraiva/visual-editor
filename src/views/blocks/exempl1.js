const hbs = `
<div class="jumbotron m-0 rounded-0" style="background-color: {{backgroundColor}}">
  <div class="container text-center ">
    <h1 class="display-4" style="color: {{colorTitleHeader}}">{{titleHeader}}</h1>
    <p class="lead" style="color: {{colorTagLine}}">{{tagline}}</p>
    <a class="btn btn-primary my-2" href="{{hrefButton}}" style="background-color: {{backgroundButton}}; border-color: {{backgroundButton}}">{{buttonHeader}}</a>
    <a class="btn btn-link my-2" href="{{hrefHeader}}" style="color: {{colorLink}}">{{linkHeader}}</a>
  </div>
</div>

<div class="container-fluid" style="background-color: {{backgroundColor}}">
  <div class="row">
    <div class="col-12">
      <h2 class="text-center" style="color: {{titleColor}}">{{title}}</h2>
      <p class="text-center" style="color: {{descriptionColor}}">{{description}}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-4 item">
      <a href="{{link}}">
        <img class="img-fluid" src="{{image1}}" />
      </a>
      <h3 class="name" style="color: {{colorTitleArticle1}}">
        {{articleTitle1}}
      </h3>
      <p class="description" style="color: {{colorDescriptArticle1}}">
        {{text1}}
      </p>
    </div>
    <div class="col-sm-6 col-md-4 item">
      <a href="#">
        <img class="img-fluid" src="{{image2}}" />
      </a>
      <h3 class="name" style="color: {{colorTitleArticle2}}">
        {{articleTitle2}}
      </h3>
      <p class="description" style="color: {{colorDescriptArticle2}}">
        {{text2}}
      </p>
    </div>
    <div class="col-sm-6 col-md-4 item">
      <a href="#">
        <img class="img-fluid" src="{{image3}}" />
      </a>
      <h3 class="name" style="color: {{colorTitleArticle3}}">
        {{articleTitle3}}
      </h3>
      <p class="description" style="color: {{colorDescriptArticle3}}">
        {{text3}}
      </p>
    </div>
  </div>
</div>

<div class="d-flex justify-content-center align-items-center" style="background-color: {{backgroundColor}}">
<div class="row">
  <div class="col-6">
    <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="{{img1}}" alt="{{alt1}}" />
    </a>
  </div>
  <div class="col-6">
    <a href="#" class="d-block mb-4 h-100">
      <img class="img-fluid img-thumbnail" src="{{img2}}" alt="{{alt2}}" />
    </a>
  </div>
</div>
</div>
<footer
class="text-light text-center py-3"
style="background-color: {{backgroundColor}}"
>
<small style="color: {{color}}">&copy; {{rigthsReserved}}</small>
<div class="d-flex justify-content-center">
  <a class="btn btn-primary" href="{{href}}">{{button}}</a>
</div>

<div class="d-flex justify-content-center mt-2">
  <a href="#" class="d-block mb-4 h-100">
    <img
      class="img-fluid img-thumbnail"
      src="{{imgLogo}}"
      alt="{{altLogo}}"
    />
  </a>
</div>
</footer>

`

const block = {
  hbs,
  name: "Simple Exemple 2",
  previewImageUrl: "https://i.imgur.com/IXz7LZ5.png",
  category: "Exemplos",
  defaultData: {
    rigthsReserved: "2024 Seu Site. Todos os direitos reservados.",
    imgLogo: "https://placehold.jp/50x50.png",
    button: "Comprar",
    href: "http://google.com",
    backgroundColor: "#fff",
    color: "#000",
    title: "Sample section",
    titleColor: "#000",
    colorTitle: "#000",
    description: "Lorem ipsum dolor sit amet.",
    descriptionColor: "#000",
    image1: "https://via.placeholder.com/450x450",
    link: "http://localhost:3000",
    image2: "https://via.placeholder.com/450x450",
    image3: "https://via.placeholder.com/450x450",
    articleTitle1: "Hello World",
    articleTitle2: "Hello World",
    articleTitle3: "Hello World",
    text1:
      "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.",
    text2:
      "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.",
    text3:
      "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.",
    colorTitleArticle1: "#000",
    colorTitleArticle2: "#000",
    colorTitleArticle3: "#000",
    colorDescriptArticle1: "#000",
    colorDescriptArticle2: "#000",
    colorDescriptArticle3: "#000",
    img1: "https://via.placeholder.com/450x450",
    img2: "https://via.placeholder.com/450x450.",
    alt1: "Sample image",
    alt2: "Sample image",
    titleHeader: "Hello World",
    tagline: "Lorem ipsum dolor sit amet.",
    buttonHeader: "Click here",
    backgroundButton: "#0069D9",
    linkHeader: "Saiba Mais",
    hrefHeader: "http://google.com",
    hrefButton: "http://google.com",
    colorTitleHeader: "#000",
    colorTagLine: "#7A8489",
    colorLink: "#007BEE",
  },
  config: {
    titleHeader: {
      type: "string",
      name: "Title",
    },
    colorTitleHeader: {
      type: "color",
      name: "Cor do título",
    },
    tagline: {
      type: "string",
      name: "Tag Line",
    },
    colorTagLine: {
      type: "color",
      name: "Cor da tag",
    },
    buttonHeader: {
      type: "string",
      name: "Text on the button",
    },
    hrefButton: {
      type: "string",
      name: "Link do botão",
    },
    backgroundButton: {
      type: "color",
      name: "Cor de fundo do botão",
    },
    linkHeader: {
      type: "string",
      name: "Texto do link",
    },
    hrefHeader: {
      type: "string",
      name: "Link do saiba mais",
    },
    colorLink: {
      type: "color",
      name: "Cor do link",
    },
    title: {
      type: "string",
      name: "Section title",
    },
    titleColor: {
      type: "color",
      name: "Cor do título",
    },
    description: {
      type: "string",
      name: "Section description",
    },
    descriptionColor: {
      type: "color",
      name: "Cor da descrição",
    },
    image1: {
      type: "string",
      name: "Url to image #1",
    },
    link: {
      type: "string",
      name: "Link para navegação",
    },
    image2: {
      type: "string",
      name: "Url to image #2",
    },
    image3: {
      type: "string",
      name: "Url to image #3",
    },
    articleTitle1: {
      type: "string",
      name: "Title for the article #1",
    },
    colorTitleArticle1: {
      type: "color",
      name: "Cor do título do artigo 1",
    },
    articleTitle2: {
      type: "string",
      name: "Title for the article #2",
    },
    colorTitleArticle2: {
      type: "color",
      name: "Cor do título do artigo 2",
    },
    articleTitle3: {
      type: "string",
      name: "Title for the article #3",
    },
    colorTitleArticle3: {
      type: "color",
      name: "Cor do título do artigo 3",
    },
    text1: {
      type: "string",
      name: "Content for the article #1",
    },
    colorDescriptArticle1: {
      type: "color",
      name: "Cor do artigo 1",
    },
    text2: {
      type: "string",
      name: "Content for the article #2",
    },
    colorDescriptArticle2: {
      type: "color",
      name: "Cor do artigo 2",
    },
    text3: {
      type: "string",
      name: "Content for the article #3",
    },
    colorDescriptArticle3: {
      type: "color",
      name: "Cor do artigo 3",
    },
    rigthsReserved: {
      type: "string",
      name: "Direitos Reservados",
    },
    imgLogo: {
      type: "string",
      name: "Logo",
    },
    button: {
      type: "string",
      name: "Comprar",
    },
    backgroundColor: {
      type: "color",
      name: "Background Color",
    },
    color: {
      type: "color",
      name: "Cor da fonte do rodapé",
    } 
  },
};

export default block;