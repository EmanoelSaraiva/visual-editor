const hbs = `
<div>
  <div class="container" style="background-color: {{backgroundColor}}">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center" style="color: {{titleColor}}">{{title}}</h2>
        <p class="text-center" style="color: {{descriptionColor}}">{{description}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-4 item">
        <h3 class="name" style="color: {{titleArticleColor1}}">{{articleTitle1}}</h3>
        <p class="description" style="color: {{textColor1}}">{{text1}}</p>
      </div>
      <div class="col-sm-6 col-md-4 item">
        <h3 class="name" style="color: {{titleArticleColor2}}">{{articleTitle2}}</h3>
        <p class="description" style="color: {{textColor2}}">{{text2}}</p>
      </div>
      <div class="col-sm-6 col-md-4 item">
        <h3 class="name" style="color: {{titleArticleColor3}}">{{articleTitle3}}</h3>
        <p class="description" style="color: {{textColor3}}">{{text3}}</p>
      </div>
    </div>
  </div>
</div>
`;

const block = {
  hbs,
  name: "Article #2",
  previewImageUrl: "https://i.imgur.com/xljS5RC.png",
  category: "Artigos",
  defaultData: {
    title: "Sample section",
    titleColor: "#000",
    description: "Lorem ipsum dolor sit amet.",
    descriptionColor: "#000",
    articleTitle1: "Hello World",
    titleArticleColor1: "#000",
    articleTitle2: "Hello World",
    titleArticleColor2: "#000",
    articleTitle3: "Hello World",
    titleArticleColor3: "#000",
    text1:
      "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.",
    textColor1: "#000",
    text2:
      "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.",
    textColor2: "#000",
    text3:
      "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id.",
    textColor3: "#000",
    backgroundColor: "#fff",
  },
  config: {
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
    articleTitle1: {
      type: "string",
      name: "Title for the article #1",
    },
    titleArticleColor1: {
      type: "color",
      name: "Cor do título do artigo 1",
    },
    articleTitle2: {
      type: "string",
      name: "Title for the article #2",
    },
    titleArticleColor2: {
      type: "color",
      name: "Cor do título do artigo 3",
    },
    articleTitle3: {
      type: "string",
      name: "Title for the article #3",
    },
    titleArticleColor3: {
      type: "color",
      name: "Cor do título do artigo 3",
    },
    text1: {
      type: "string",
      name: "Content for the article #1",
    },
    textColor1: {
      type: "color",
      name: "Cor do texto do artigo 1",
    },
    text2: {
      type: "string",
      name: "Content for the article #2",
    },
    textColor2: {
      type: "color",
      name: "Cor do texto do artigo 2",
    },
    text3: {
      type: "string",
      name: "Content for the article #3",
    },
    textColor3: {
      type: "color",
      name: "Cor do texto do artigo 3",
    },
    backgroundColor: {
      type: "color",
      name: "Cor do fundo",
    },
  },
};

export default block;
