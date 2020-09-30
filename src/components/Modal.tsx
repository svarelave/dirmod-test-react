import React from "react";
import { Modal } from "react-bootstrap";
import { hideTooltip } from "utils";

class _Modal extends React.Component<any> {
  render() {
    return (
      <Modal
        className={this.props.className}
        onShow={hideTooltip}
        show={this.props.visible}
        onHide={this.props.onClose}
        size={this.props.size}
      >
        {this.props.header && (
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body>{this.props.children}</Modal.Body>
      </Modal>
    );
  }
}

export default _Modal;
