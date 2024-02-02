const hbs = `
<div class="container text-center pt-5 pb-5" style="background-color: {{backgroundColor}}">
  <h5 style="color: {{colorTitle}}">{{title}}</h5>
  <h1 class="display-4" style="color: {{colorTagLine}}">{{tagline}}</h1>
  <a class="btn btn-link" href="{{href}}" style="color: {{colorLink}}">{{link}}</a>
</div>
`;

const block = {
  hbs,
  name: "Simple Header #1",
  previewImageUrl: "https://i.imgur.com/IXz7LZ5.png",
  category: "Cabeçalho",
  defaultData: {
    title: "Hello World",
    tagline: "Lorem ipsum dolor sit amet.",
    link: "Saiba mais",
    href: "http://google.com",
    backgroundColor: "#fff",
    colorLink: "#007BEE",
    colorTitle: "#000",
    colorTagLine: "#000",
  },
  config: {
    title: {
      type: "string",
      name: "Título",
    },
    colorTitle: {
      type: "color",
      name: "Cor do seu título",
    },
    tagline: {
      type: "string",
      name: "Tag Line",
    },
    colorTagLine: {
      type: "color",
      name: "Cor da sua tag",
    },
    link: {
      type: "string",
      name: "Texto para seu link",
    },
    href: {
      type: "string",
      name: "Link para mais informações ou compra",
    },
    colorLink: {
      type: "color",
      name: "Cor do seu link",
    },
    backgroundColor: {
      type: "color",
      name: "Cor de fundo",
    },
  },
};

export default block;
