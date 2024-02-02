const hbs = `
<div>
  <div class="container" style="background-color: {{backgroundColor}}">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center" style="color: {{colorTitle}}">{{title}}</h2>
        <p class="text-center" style="color: {{colorDescription}}">{{description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-4 item">
        <a href={{link}}>
            <img class="img-fluid" src="{{image1}}" />
        </a>
        <h3 class="name" style="color: {{colorTitleArticle1}}">{{articleTitle1}}</h3>
        <p class="description" style="color: {{colorDescriptArticle1}}">{{text1}}</p>
      </div>
      <div class="col-sm-6 col-md-4 item">
        <a href="#">
            <img class="img-fluid" src="{{image2}}" />
        </a>
        <h3 class="name" style="color: {{colorTitleArticle2}}">{{articleTitle2}}</h3>
        <p class="description" style="color: {{colorDescriptArticle2}}">{{text2}}</p>
      </div>
      <div class="col-sm-6 col-md-4 item">
        <a href="#">
            <img class="img-fluid" src="{{image3}}" />
        </a>
        <h3 class="name" style="color: {{colorTitleArticle3}}">{{articleTitle3}}</h3>
        <p class="description" style="color: {{colorDescriptArticle3}}">{{text3}}</p>
      </div>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: "Article #1",
  previewImageUrl: "https://i.imgur.com/6QUsWtK.png",
  category: "Artigos",
  defaultData: {
    title: "Sample section",
    colorTitle: "#000",
    description: "Lorem ipsum dolor sit amet.",
    colorDescription: "#000",
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
    backgroundColor: "#fff",
    colorTitleArticle1: "#000",
    colorTitleArticle2: "#000",
    colorTitleArticle3: "#000",
    colorDescriptArticle1: "#000",
    colorDescriptArticle2: "#000",
    colorDescriptArticle3: "#000",
  },
  config: {
    title: {
      type: "string",
      name: "Section title",
    },
    colorTitle: {
      type: "color",
      name: "Cor do título",
    },
    description: {
      type: "string",
      name: "Section description",
    },
    colorDescription: {
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
    backgroundColor: {
      type: "color",
      name: "Cor de fundo",
    },
  },
};

export default block;
