import React from "react";
import JSZip from "jszip";

export default function Preview(props) {
  const handleSave = async () => {
    // Obtenha o conteúdo HTML do iframe
    const iframeContent = props.html;

    // Remova scripts e estilos específicos do HTML
    const cleanedHTML = removeScriptsAndStyles(iframeContent);

    // Criar uma instância JSZip
    const zip = new JSZip();

    // Adicionar o conteúdo do iframe limpo ao arquivo zip
    zip.file("iframe-content.html", cleanedHTML);

    // Gerar o conteúdo do arquivo zip
    const content = await zip.generateAsync({ type: "blob" });

    // Criar um objeto URL para o conteúdo do arquivo zip
    const url = URL.createObjectURL(content);

    // Criar um elemento de link para iniciar o download
    const link = document.createElement("a");
    link.href = url;
    link.download = "conteudo-iframe.zip"; // Nome do arquivo zip
    document.body.appendChild(link);

    // Iniciar o download e remover o elemento de link
    link.click();
    document.body.removeChild(link);
  };

  // Função para remover scripts e estilos CSS específicos do HTML
  const removeScriptsAndStyles = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Remover todos os scripts que não sejam do Bootstrap
    const scripts = doc.querySelectorAll("script");
    scripts.forEach((script) => {
      if (!script.src.includes("bootstrap")) {
        script.remove();
      }
    });

    // Remover todos os estilos que não sejam do Bootstrap
    const styles = doc.querySelectorAll("style");
    styles.forEach((style) => {
      // Se não contém estilos do Bootstrap, remove
      if (!style.textContent.includes("bootstrap")) {
        style.remove();
      }
    });

    // Remove atributos de estilo inline de elementos com o atributo visual-editor
    const styledElements = doc.querySelectorAll("[visual-editor]");
    styledElements.forEach((elem) => {
      elem.removeAttribute("style");
    });

    // Obter o HTML modificado sem scripts e estilos indesejados
    const cleanedHTML = doc.documentElement.outerHTML;
    return cleanedHTML;
  };

  return (
    <div className="page-content-wrapper overflow-hidden d-flex justify-content-center">
      <div
        className={`preview-window shadow-lg preview-mode-${props.previewMode}`}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div>
            <button
              onClick={() => props.onChangePreviewMode(0)}
              className={`btn btn-sm btn-preview-toolbar d-flex align-items-center ${
                props.previewMode === 0 ? "active" : ""
              }`}
            >
              <span className="material-icons">devices</span>
            </button>
            <button
              onClick={() => props.onChangePreviewMode(1)}
              className={`btn btn-sm btn-preview-toolbar d-flex align-items-center ${
                props.previewMode === 1 ? "active" : ""
              }`}
            >
              <span className="material-icons">tv</span>
            </button>
            <button
              onClick={() => props.onChangePreviewMode(2)}
              className={`btn btn-sm btn-preview-toolbar d-flex align-items-center ${
                props.previewMode === 2 ? "active" : ""
              }`}
            >
              <span className="material-icons">tablet</span>
            </button>
            <button
              onClick={() => props.onChangePreviewMode(3)}
              className={`btn btn-sm btn-preview-toolbar d-flex align-items-center ${
                props.previewMode === 3 ? "active" : ""
              }`}
            >
              <span className="material-icons">smartphone</span>
            </button>
            <button
              type="button"
              onClick={handleSave}
              className={`btn btn-sm btn-preview-toolbar d-flex align-items-center`}
            >
              <span className="material-icons">save</span>
            </button>
          </div>
        </div>
        <iframe
          title={"visual-iframe"}
          className={`visual-iframe`}
          srcDoc={props.html}
        />
      </div>
    </div>
  );
}
