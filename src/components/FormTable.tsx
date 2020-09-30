import React from "react";
// import { Options } from "./models";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import { CustomProps, Options } from "models";
import Icon from "./Icon";
import es from "date-fns/locale/es";
import { useTranslation } from "react-i18next";
import Select from "react-select";

registerLocale("es", es);
setDefaultLocale("es");

interface InputProps {
  required?: boolean;
  labelClass?: string | undefined;
  label?: string | undefined;
  name?: string;
  type?: "text" | "number" | "password" | "email";
  color?: string | "";
  placeholder?: string | "";
  maxlength?: number;
  value?: string | number | "";
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextarea?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  style?: object;
  icon?: string | "";
  step?: string;
  onClick?: () => void;
  onBlur?: () => void;
  moneyFormat?: string | "";
  rows?: number;
}

interface PropsTable
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

const FormTable = ({ children, className }: PropsTable) => (
  <div className={`form-table ${className}`}>{children}</div>
);

const Input: React.FC<InputProps> = ({
  required = false,
  labelClass,
  label,
  name,
  type = "text",
  color,
  placeholder,
  value,
  maxlength,
  onChange,
  className,
  disabled = false,
  icon,
  onClick,
  onBlur,
  step,
  moneyFormat,
}) => {
  return (
    <div className={`form-table-row ${required && "is-required"}`}>
      {label && (
        <label
          className={`${
            labelClass ? labelClass : ""
          } form-table-cell form-table-label`}
          htmlFor={name}
        >
          {icon && <Icon onClick={onClick} name={`${icon} pointer mr-4`} />}
          {label + " "}
          {required && (
            <span className="text-danger">
              <small>(*)</small>
            </span>
          )}
          {moneyFormat && (
            <span className="float-right mr-3 border-left">{moneyFormat}</span>
          )}
        </label>
      )}
      <div className="form-table-cell">
        <input
          maxLength={maxlength}
          placeholder={placeholder}
          type={type}
          className={`${color ? `input-${color}` : "input-white"} ${
            className ? className : ""
          }`}
          name={name}
          onChange={(e: any) => {
            if (maxlength && e.target.value.toString().length > maxlength) {
              return false;
            }
            if (onChange) {
              onChange(e);
            }
          }}
          step={step}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

const Textarea: React.FC<InputProps> = ({
  required = false,
  labelClass,
  label,
  name,
  type = "text",
  color,
  placeholder,
  value,
  maxlength,
  onChangeTextarea,
  className,
  disabled = false,
  icon,
  style,
  onClick,
  onBlur,
  moneyFormat,
  rows,
}) => {
  return (
    <div className={`form-table-row ${required && "is-required"}`}>
      {label && (
        <label
          className={`${
            labelClass ? labelClass : ""
          } form-table-cell form-table-label`}
          htmlFor={name}
        >
          {icon && <Icon onClick={onClick} name={`${icon} pointer mr-4`} />}
          {label + " "}
          {required && (
            <span className="text-danger">
              <small>(*)</small>
            </span>
          )}
          {moneyFormat && (
            <span className="float-right mr-3 border-left">{moneyFormat}</span>
          )}
        </label>
      )}
      <div className="form-table-cell">
        <textarea
          maxLength={maxlength}
          placeholder={placeholder}
          style={style || {}}
          className={`${color ? `input-${color}` : "input-white"} ${
            className ? className : ""
          }`}
          rows={rows || 4}
          name={name}
          onChange={onChangeTextarea}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

interface SelectSimpleProps {
  required?: boolean;
  name?: string;
  color?: string | "";
  placeholder?: string | "";
  maxlength?: number;
  options: Options[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  valueSelect?: any;
  defaulText?: string;
  defaultValue?: number | string;
}

const SelectSimple: React.FC<SelectSimpleProps> = ({
  required = false,
  name,
  color,
  options,
  onChange,
  valueSelect,
  defaulText,
  defaultValue,
}) => {
  const { t } = useTranslation();

  return (
    <select
      name={name}
      value={valueSelect}
      onChange={onChange}
      className={`${color ? color : ""}`}
      defaultValue={defaultValue}
    >
      {defaulText && <option value="">{defaulText}</option>}
      {options.map(({ value, label, translation }) => {
        return (
          <option key={value} value={value}>
            {translation ? t(`select.${label}`) : label}
          </option>
        );
      })}
    </select>
  );
};

interface InputWithSelectProps {
  required?: boolean;
  label?: string | undefined;
  nameSelect?: string;
  nameInput?: string;
  color?: string | "";
  placeholder?: string | "";
  maxlength?: number;
  options: Options[];
  onChangeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  valueSelect?: any;
  valueInput?: any;
  defaulText?: string;
  typeInput?: "text" | "number" | "password" | "email";
}

const InputWithSelect: React.FC<InputWithSelectProps> = ({
  label,
  nameSelect,
  nameInput,
  valueSelect,
  valueInput,
  options,
  onChangeSelect,
  onChangeInput,
  onKeyPress,
  typeInput = "text",
  maxlength,
  required,
  placeholder,
}) => {
  return (
    <div className="form-table-row">
      {label && (
        <label className="form-table-cell form-table-label" htmlFor={nameInput}>
          {label}{" "}
          {required && (
            <span className="text-danger">
              <small>(*)</small>
            </span>
          )}
        </label>
      )}
      <div
        className="d-flex"
        style={{ maxWidth: "196px", borderBottom: "1px solid" }}
      >
        <SelectSimple
          name={nameSelect}
          options={options}
          valueSelect={valueSelect}
          onChange={onChangeSelect}
        />
        <input
          style={{ overflow: "hidden" }}
          type={typeInput}
          name={nameInput}
          value={valueInput}
          maxLength={maxlength}
          onChange={(event: any) => {
            if (maxlength && event.target.value.toString().length > maxlength) {
              return false;
            }
            if (typeInput === "number") {
              const regex = /^[0-9\b]+$/;
              if (regex.test(event.target.value) || event.target.value === "") {
                if (onChangeInput) {
                  onChangeInput(event);
                }
              }
            } else {
              if (onChangeInput) onChangeInput(event);
            }
          }}
          // onChange={(e: any) => onChangeInput(e)}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

interface DateProps {
  required?: boolean;
  label?: string;
  color?: string | "";
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  onChange(
    date: Date | null,
    event: React.SyntheticEvent<any> | undefined
  ): void;
}

const CustomInput = React.forwardRef<HTMLDivElement, CustomProps>(
  ({ color, value, onClick }, ref) => (
    <div
      ref={ref}
      onClick={onClick}
      className="form-table-cell d-flex px-1 justify-content-between input-datepicker"
    >
      <div className="">{value}</div>
      <div className="align-self-end">
        <Icon name="calendar" />
      </div>
    </div>
  )
);

const _DatePicker: React.FC<DateProps> = ({
  label,
  required = false,
  color,
  minDate,
  maxDate,
  value,
  onChange,
  ...rest
}) => (
  <div className="form-table-row">
    {label && (
      <label className="form-table-cell form-table-label">
        {label}{" "}
        {required && (
          <span className="text-danger">
            <small>(*)</small>
          </span>
        )}
      </label>
    )}
    <DatePicker
      {...rest}
      minDate={minDate}
      maxDate={maxDate}
      selected={value}
      onChange={onChange}
      customInput={<CustomInput value={value} color={color} />}
      showYearDropdown
    />
  </div>
);

interface SelectProps extends SelectSimpleProps {
  label?: string;
  required?: boolean;
}

const SelectSimple2: React.FC<SelectProps> = ({ label, required, ...rest }) => {
  return (
    <div className="form-table-row">
      {label && (
        <label className="form-table-cell form-table-label">
          {label}{" "}
          {required && (
            <span className="text-danger">
              <small>(*)</small>
            </span>
          )}
        </label>
      )}
      <div className="form-table-cell">
        <SelectSimple {...rest} />
      </div>
    </div>
  );
};

interface CustomSelectProps {
  label?: string;
  required?: boolean;
  options: any;
  onChange: (value: any, point: any) => void;
  value: any;
  isMulti?: boolean;
}
const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  required,
  options,
  onChange,
  value,
  isMulti,
}) => {
  return (
    <div className="form-table-row">
      {label && (
        <label className="form-table-cell form-table-label">
          {label}{" "}
          {required && (
            <span className="text-danger">
              <small>(*)</small>
            </span>
          )}
        </label>
      )}
      <div className="form-table-cell">
        <Select
          options={options || []}
          onChange={(value: any, point: any) => onChange(value, point)}
          value={value || null}
          isMulti={isMulti}
        />
      </div>
    </div>
  );
};

FormTable.Input = Input;
FormTable.InputPhone = InputWithSelect;
FormTable.InputWithSelect = InputWithSelect;
FormTable.DatePicker = _DatePicker;
FormTable.Textarea = Textarea;
FormTable.Select = SelectSimple2;
FormTable.CustomSelect = CustomSelect;

export default FormTable;
