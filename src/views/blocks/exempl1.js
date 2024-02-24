const hbs = `
    <div class="jumbotron m-0 rounded-0" style="background-color: #fff">
      <div class="container text-center">
        <h1 class="display-4" style="color: #000">Hello World</h1>
        <p class="lead" style="color: #7a8489">Lorem ipsum dolor sit amet.</p>
        <a
          class="btn btn-primary my-2"
          href="http://google.com"
          style="background-color: #0069d9; border-color: #0069d9"
          >Click here</a
        >
        <a
          class="btn btn-link my-2"
          href="http://google.com"
          style="color: #007bee"
          >Saiba Mais</a
        >
      </div>
    </div>
 

  
    <div>
      <div class="container" style="background-color: #fff">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center" style="color: #000">Sample section</h2>
            <p class="text-center" style="color: #000">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-4 item">
            <a href="http://localhost:3000">
              <img
                class="img-fluid"
                src="https://via.placeholder.com/450x450"
              />
            </a>
            <h3 class="name" style="color: #000">Hello World</h3>
            <p class="description" style="color: #000">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              interdum justo suscipit id.
            </p>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <a href="#">
              <img
                class="img-fluid"
                src="https://via.placeholder.com/450x450"
              />
            </a>
            <h3 class="name" style="color: #000">Hello World</h3>
            <p class="description" style="color: #000">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              interdum justo suscipit id.
            </p>
          </div>
          <div class="col-sm-6 col-md-4 item">
            <a href="#">
              <img
                class="img-fluid"
                src="https://via.placeholder.com/450x450"
              />
            </a>
            <h3 class="name" style="color: #000">Hello World</h3>
            <p class="description" style="color: #000">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
              interdum justo suscipit id.
            </p>
          </div>
        </div>
      </div>
    </div>


  
    <div class="container">
      <div class="row">
        <div class="col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://via.placeholder.com/450x450"
              alt="Sample image"
            />
          </a>
        </div>
        <div class="col-6">
          <a href="#" class="d-block mb-4 h-100">
            <img
              class="img-fluid img-thumbnail"
              src="https://via.placeholder.com/450x450."
              alt="Sample image"
            />
          </a>
        </div>
      </div>
    </div>
 

  
    <footer class="text-light text-center py-3" style="background-color: #fff">
      <small style="color: #000"
        >&copy; {{rigthsReserved}}</small
      >

      <div class="d-flex justify-content-center">
        <a class="btn btn-primary" href="http://google.com">Comprar</a>
      </div>

      <div class="d-flex justify-content-center mt-2">
        <a href="#" class="d-block mb-4 h-100">
          <img
            class="img-fluid img-thumbnail"
            src="https://placehold.jp/50x50.png"
            alt=""
          />
        </a>
      </div>
    </footer>
`

const block = {
  hbs,
  name: "Simple Exemple 2",
  previewImageUrl: "https://i.imgur.com/IXz7LZ5.png",
  category: "Galeria de Imagens",
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
      name: "Cor da fonte do rodapé",
    },
  },
};

export default block;