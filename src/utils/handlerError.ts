import { showError } from "./general";
import i18n from "./i18n";

export const INTERNAL_SERVER_ERROR = 500;
export const NOT_FOUND_ERROR = 404;
export const UNAUTHORIZED = 401;
export const UNPROCESSABLE_ENTITY = 422;
export const FORBIDDEN = 403;

export const handlerError = (error: any) => {
  const { message, response } = error;
  console.log(message, response, error, "ERROR");

  switch (response?.status) {
    case NOT_FOUND_ERROR:
      showError(i18n.t("errors.not_found"));
      return;
    case INTERNAL_SERVER_ERROR:
      showError(i18n.t("errors.internal_server"));
      return;
    case UNAUTHORIZED:
      showError(i18n.t("errors.unathorized"));
      return;
    case UNPROCESSABLE_ENTITY:
      showError(response.data[0]);
      return;
    case FORBIDDEN:
      showError(i18n.t("errors.forbidden"));
      return;
  }

  if (isNetworkError(message)) {
    showError(i18n.t("errors.network"));
    return;
  }
};

const isNetworkError = (message: string): boolean =>
  message.indexOf("Network Error") > -1;
