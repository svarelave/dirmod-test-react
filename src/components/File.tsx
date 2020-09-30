import React from "react";
import { showError } from "../utils";

class File extends React.Component<any> {
  private file: any;

  dataURItoBlob = (dataURI: any) => {
    var byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  };

  change = (e: any) => {
    var files = e.target.files || e.dataTransfer.files;
    if (!files[0]) {
      return;
    }
    var format = files[0].name.split(".");
    var permitidos = ["jpg", "png", "gif", "jpeg"];
    if (permitidos.indexOf(format[format.length - 1].toLowerCase()) === -1) {
      showError("El formato de la imagen no es válido");
      return false;
    }

    let tipo = format;
    switch (tipo) {
      case "jpg":
        tipo = "image/jpeg";
        break;

      case "png":
        tipo = "image/png";
        break;

      case "gif":
        tipo = "image/gif";
        break;

      case "jpeg":
        tipo = "image/jpeg";
        break;

      default:
        tipo = "image/jpeg";
        break;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (file) => {
      var tempImg: any = new Image();
      tempImg.src = reader.result;

      let self: any = this;

      tempImg.onload = function () {
        var MAX_WIDTH = 1000;
        var MAX_HEIGHT = 1000;
        var tempW = tempImg.width;
        var tempH = tempImg.height;

        if (tempW > tempH) {
          if (tempW > MAX_WIDTH) {
            tempH *= MAX_WIDTH / tempW;
            tempW = MAX_WIDTH;
          }
        } else {
          if (tempH > MAX_HEIGHT) {
            tempW *= MAX_HEIGHT / tempH;
            tempH = MAX_HEIGHT;
          }
        }
        var resizedCanvas = document.createElement("canvas");
        resizedCanvas.width = tempW;
        resizedCanvas.height = tempH;
        var ctx: any = resizedCanvas.getContext("2d");
        ctx.drawImage(this, 0, 0, tempW, tempH);
        var dataURL = resizedCanvas.toDataURL(tipo);
        self.props.onChange({
          target: {
            name: self.props.name,
            value: self.dataURItoBlob(dataURL),
          },
        });
      };
    };
  };

  getValue = () => {
    if (this.props.value) {
      if (this.props.placeholderSuccess) {
        return (
          (this.props.showCheck ? "✔ " : "") + this.props.placeholderSuccess
        );
      } else {
        return "✔ Imagen Agregada";
      }
    } else {
      if (this.props.placeholder) {
        return this.props.placeholder;
      } else {
        return "Agregar Imagen";
      }
    }
  };

  render() {
    return (
      <div className="form-group-file">
        <input
          ref={(ref) => (this.file = ref)}
          type="file"
          name={this.props.name}
          onChange={this.change}
          style={this.props.inputStyle}
        />
        <div className="form-group" onClick={() => this.file.click()}>
          {this.props.renderItem ? (
            this.props.renderItem
          ) : (
            <label htmlFor={this.props.name}>{this.props.label}</label>
          )}
          {!this.props.renderItem ? (
            <input
              type="text"
              {...this.props}
              className={`form-control ${
                this.props.className ? this.props.className : ""
              }`}
              disabled
              value={this.getValue()}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default File;
