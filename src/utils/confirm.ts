import Swal, { SweetAlertOptions } from "sweetalert2";
import i18n from "./i18n";

export const confirm = ({
  title = "",
  text,
  type = "warning",
}: SweetAlertOptions) => {
  return new Promise((resolve, _) => {
    Swal.fire({
      title,
      text,
      type,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: "#131351",
      cancelButtonText: i18n.t("cancel"),
      confirmButtonText: i18n.t("accept"),
      focusConfirm: false,
      focusCancel: false,
    }).then(({ value }) => {
      resolve(!!value);
    });
  });
};
