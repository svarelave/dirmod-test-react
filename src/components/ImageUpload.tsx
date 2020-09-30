import React from "react";
import { showError } from "../utils";
import { default as ImageComponent } from "./Image";
import { withTranslation } from "react-i18next";

class ImageUpload extends React.Component<any> {
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
    const { t } = this.props;
    var files = [...e.target.files] || [...e.dataTransfer.files];
    if (!files[0]) {
      return;
    }
    this.file.value = "";
    var format = files[0].name.split(".");
    var permitidos = ["jpg", "png", "gif", "jpeg"];
    if (permitidos.indexOf(format[format.length - 1].toLowerCase()) === -1) {
      showError(t("image.wrong_format"));
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
            dataURL,
          },
        });
      };
    };
  };

  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <input
          className="input-file-paperclip"
          ref={(ref) => (this.file = ref)}
          type="file"
          name={this.props.name}
          onChange={this.change}
          style={this.props.inputStyle}
        />
        {this.props.onlyText ? (
          <div
            className="my-3 pointer"
            style={{ textDecoration: "underline", color: "blue" }}
            onClick={() => this.file.click()}
          >
            {this.props.hasFile
              ? t("labels.logo_success")
              : this.props.source
              ? t("labels.logo_success")
              : t("labels.upload_logo")}
          </div>
        ) : (
          <ImageComponent
            width={this.props.width}
            height={this.props.height}
            classContainer={`image-component--unlessmargin`}
            onClick={() => this.file.click()}
            hasFile={this.props.hasFile}
            source={this.props.source}
            label={this.props.label}
            style={{ margin: 0 }}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withTranslation()(ImageUpload);
