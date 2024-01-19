const hbs = `
<nav class="navbar navbar-expand-lg navbar-light {{#if useDarkTheme}}navbar-dark bg-dark{{else}}bg-light{{/if}}">
  <a class="navbar-brand" href="#">{{title}}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">{{link1}}
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{link2}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{link3}}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{{link4}}</a>
      </li>
    </ul>
    
  </div>
</nav>
`;

const block = {
  hbs,
  name: "Navbar",
  previewImageUrl: "https://i.imgur.com/awrvf3d.png",
  category: "Cabeçalho",
  defaultData: {
    title: "Reynholm",
    link1: "Home",
    link2: "Feature",
    link3: "Pricing",
    link4: "About",
    useDarkTheme: false,
  },
  config: {
    title: {
      type: "string",
      name: "Brand name",
    },
    link1: {
      type: "string",
      name: "Link #1",
    },
    link2: {
      type: "string",
      name: "Link #2",
    },
    link3: {
      type: "string",
      name: "Link #3",
    },
    link4: {
      type: "string",
      name: "Link #4",
    },
    useDarkTheme: {
      type: "boolean",
      name: "Use dark theme",
    },
  },
};

export default block;
