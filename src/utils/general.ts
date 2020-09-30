import HoldOn from "react-hold-on";
import Swal from "sweetalert2";
import i18n from "./i18n";

export const showSuccess = (message: string = i18n.t("success")) => {
  Swal.fire({
    title: "",
    text: message,
    type: "success",
    showCancelButton: false,
    confirmButtonColor: "#131351",
    confirmButtonText: i18n.t("accept"),
  });
};

export const showWarning = (message: string = i18n.t("error")) => {
  Swal.fire({
    title: "",
    text: message,
    type: "warning",
    showCancelButton: false,
    confirmButtonColor: "#131351",
    confirmButtonText: i18n.t("accept"),
  });
};

export const showError = (message: string = i18n.t("error")) => {
  Swal.fire({
    title: "",
    text: message,
    type: "error",
    showCancelButton: false,
    confirmButtonColor: "#131351",
    confirmButtonText: i18n.t("accept"),
  });
};

export const setLoading = () => {
  HoldOn.open({
    theme: "sk-bounce",
  });
};

export const quitLoading = () => {
  HoldOn.close();
};

export const hideTooltip = () => {
  // $("button").blur();
};
