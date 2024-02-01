const hbs = `
  <footer class="text-light text-center py-3" style="background-color: {{backgroundColor}}">
    
    <p style="color: {{color}}">&copy; {{rigthsReserved}}</p>

    <div class="d-flex justify-content-center">
        <a class="btn btn-primary" href="{{href}}">{{button}}</a>
    </div>
    
    <div class="d-flex justify-content-center mt-2">
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="{{imgLogo}}" alt="{{altLogo}}">
      </a>
    </div>
  </footer>
`;

const block = {
  hbs,
  name: "Simple Footer #1",
  previewImageUrl: "https://i.imgur.com/IXz7LZ5.png",
  category: "Rodapé",
  defaultData: {
    rigthsReserved: "2024 Seu Site. Todos os direitos reservados.",
    imgLogo: "https://placehold.jp/50x50.png",
    button: "Comprar",
    href: "http://google.com",
    backgroundColor: "#fff",
    color: "#000",
  },
  config: {
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
      name: "Cor da fonte",
    },
  },
};

export default block;
