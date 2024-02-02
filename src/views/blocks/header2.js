const hbs = `
<div class="jumbotron m-0 rounded-0" style="background-color: {{backgroundColor}}">
  <div class="container text-center ">
    <h1 class="display-4" style="color: {{colorTitle}}">{{title}}</h1>
    <p class="lead" style="color: {{colorTagLine}}">{{tagline}}</p>
    <a class="btn btn-primary my-2" href="{{hrefButton}}" style="background-color: {{backgroundButton}}; border-color: {{backgroundButton}}">{{button}}</a>
    <a class="btn btn-link my-2" href="{{href}}" style="color: {{colorLink}}">{{link}}</a>
  </div>
</div>
`;

const block = {
  hbs,
  name: "Simple Header #2",
  previewImageUrl: "https://i.imgur.com/1bYEKB4.png",
  category: "Cabeçalho",
  defaultData: {
    title: "Hello World",
    tagline: "Lorem ipsum dolor sit amet.",
    button: "Click here",
    backgroundButton: "#0069D9",
    link: "Saiba Mais",
    backgroundColor: "#fff",
    href: "http://google.com",
    hrefButton: "http://google.com",
    colorTitle: "#000",
    colorTagLine: "#7A8489",
    colorLink: "#007BEE",
  },
  config: {
    title: {
      type: "string",
      name: "Title",
    },
    colorTitle: {
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
    button: {
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
    link: {
      type: "string",
      name: "Texto do link",
    },
    href: {
      type: "string",
      name: "Link do saiba mais",
    },
    colorLink: {
      type: "color",
      name: "Cor do link",
    },
    backgroundColor: {
      type: "color",
      name: "Background Color",
    },
  },
};

export default block;
