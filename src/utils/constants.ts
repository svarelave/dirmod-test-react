export const STATUS_ACTIVE = 1;
export const STATUS_INACTIVE = 0;

export const PATHS = ["/dashboard"];

export const RESET_PASSWORD_STEP_FIRST = 1;
export const RESET_PASSWORD_STEP_SECOND = 2;

export const FILE_PDF = 1;
export const FILE_EXCEL = 2;

export const TYPE_MINIMUM = 1;
export const TYPE_COLLECTION_COSTS = 2;

export const FIL_EXTENSION_PDF = ".pdf";
export const FIL_EXTENSION_EXCEL = ".xls";

export const maritalStatuses = [
  { value: "", label: "select", translation: true },
  { value: "single", label: "single", translation: true },
  { value: "married", label: "married", translation: true },
  { value: "divorced", label: "divorced", translation: true },
  { value: "widowed", label: "widowed", translation: true },
];

export const phoneCodes = [
  { value: "", label: "select", translation: true },
  { value: "717", label: "717" },
  { value: "817", label: "817" },
  { value: "917", label: "917" },
];

export const optionsActive = [
  { value: "1", label: "active", translation: true },
  { value: "0", label: "inactive", translation: true },
];

export const optionsNationality = [
  { value: "", label: "select", translation: true },
  { value: "AR", label: "Aruba" },
  { value: "BO", label: "Bonaire" },
  { value: "CU", label: "Curacao" },
  { value: "CO", label: "Colombia" },
  { value: "PE", label: "Perú" },
  { value: "VE", label: "Venezolano" },
  { value: "NE", label: "Nederlands" },
];

export const optionsDocType = [
  { value: "", label: "select", translation: true },
  { value: "DNI", label: "identificationDocument", translation: true },
  { value: "passport", label: "passport", translation: true },
  { value: "license", label: "license", translation: true },
  { value: "Otros", label: "others", translation: true },
];

export const optionsMaritalStatus = [
  { value: "", label: "select", translation: true },
  { value: "single", label: "single", translation: true },
  { value: "married", label: "married", translation: true },
  { value: "divorced", label: "divorced", translation: true },
  { value: "widowed", label: "widowed", translation: true },
];

export const optionsPhoneCode = [
  { value: "", label: "select", translation: true },
  { value: "717", label: "717" },
  { value: "718", label: "718" },
  { value: "715", label: "715" },
];

export const optionsPosition = [
  { value: "", label: "select", translation: true },
  { value: "717", label: "1" },
  { value: "715", label: "2" },
];

export const optionsAnswers = [
  { value: "", label: "select", translation: true },
  { value: 1, label: "yes", translation: true },
  { value: 0, label: "not", translation: true },
];

export const mobilePhoneCodes = [{ value: "31", label: "31" }];

export const FILE_TYPES = {
  excel: {
    type: "application/vnd.ms-excel",
    extension: FIL_EXTENSION_EXCEL,
  },
  pdf: {
    type: "application/pdf",
    extension: FIL_EXTENSION_PDF,
  },
};

export const MINIMUM_WIK = 10000;

export const NATURAL_TYPE = 0;
export const COMPANY_TYPE = 1;

export const ORIGINAL_INVOICE = 0;
