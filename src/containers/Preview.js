import React from "react";

export default function Preview(props) {
  return (
    <div
      className="page-content-wrapper overflow-hidden d-flex justify-content-center"
      style={{ display: "flex" }}
    >
      <div
        className={`preview-window shadow-lg preview-mode-${props.previewMode}`}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "85%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
          <div style={{ display: "flex" }}>
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
          </div>
        </div>
        <iframe
          title={"visual-iframe"}
          className={`visual-iframe`}
          width={1080}
          height={700}
          srcDoc={props.html}
        />
      </div>
    </div>
  );
}
