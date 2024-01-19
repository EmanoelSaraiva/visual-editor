import React, { Component } from "react";
import PropTypes from "prop-types";

class BlockPreview extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          position: "relative",
        }}
      >
        <img
          src={this.props.image}
          alt={this.props.name}
          className="img-fluid"
        />
        <div
          className="prompt"
          onClick={() => this.props.onPushBlock(this.props.blockId)}
          style={{
            position: "absolute",
            left: "40%",
            top: "30%",
          }}
        >
          <div
            className="prompt-inside"
            style={{ display: "flex", width: "100%", gap: "10px" }}
          >
            <div>{this.props.name}</div>
            <button className="btn btn-outline-light btn-sm m-2">
              Add block
            </button>
          </div>
        </div>
      </div>
    );
  }
}

BlockPreview.propTypes = {
  blockId: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  onPushBlock: PropTypes.func,
};

export default BlockPreview;
