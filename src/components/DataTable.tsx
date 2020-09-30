import React from "react";
import Button from "./Button";
import DataTable, { IDataTableProps } from "react-data-table-component";
import Input from "./Input";
import Select from "./Select";
import DatePicker from "./Datepicker";
import moment from "moment";
import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import i18n from "utils/i18n";
import { optionsActive } from "utils";

const customStyles = {
  tableWrapper: {
    style: {
      boxShadow: "0 .125rem .25rem rgba(0,0,0,.075);",
      borderRadius: "10px",
    },
  },
  table: {
    style: {
      minHeight: "250px",
    },
  },
  header: {
    style: {
      paddingTop: "10px",
      paddingBottom: "10px",
      backgroundColor: "#131351",
      color: "white",
      border: "5px",
      fontSize: "18px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      backgroundColor: "#e0e0e0",
      fontWeight: "bold",
      justifyContent: "center",
    },
  },
  head: {
    style: {
      background: "blue",
      fontSize: "22px",
      textAlign: "center",
    },
  },
  cells: {
    style: {
      backgroundColor: "#f2f2f2",
      justifyContent: "center",
    },
  },
};

type FilterComponentProps = {
  filterText: string;
  filterStatus?: boolean;
  onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClear: () => void;
  setToDate: (event: any) => void;
  setFromDate: (event: any) => void;
  to?: Date;
  from?: Date;
  filterDate?: boolean;
  filterPlaceholder?: string;
};

const FilterComponent = ({
  filterStatus,
  filterText,
  onFilter,
  onFilterStatus,
  onClear,
  to,
  from,
  setFromDate,
  setToDate,
  filterDate = false,
  filterPlaceholder = i18n.t("labels.filter"),
}: FilterComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-items-center">
      {filterDate && (
        <div
          className="d-flex justify-content-center filter-datepicker"
          style={{ minWidth: "380px" }}
        >
          <DatePicker
            onChange={setFromDate}
            value={from}
            text={t("labels.from")}
            maxDate={new Date()}
          />
          <DatePicker
            onChange={setToDate}
            value={to}
            text={t("labels.to")}
            minDate={from}
            disabled={!from}
          />
        </div>
      )}
      {filterStatus && (
        <Select
          options={optionsActive}
          onChange={onFilterStatus}
          className="form-control-sm"
        />
      )}
      <Input
        type="text"
        placeholder={filterPlaceholder}
        value={filterText}
        onChange={onFilter}
        className="form-control-sm ml-2"
        color="gray"
      />
      {(filterText || to || from) && (
        <Button type="button" onClick={onClear}>
          <Icon name="close" />
        </Button>
      )}
    </div>
  );
};

interface BasicTableProps extends IDataTableProps<any> {
  filterSelectColumn?: boolean;
  filterTextColumns: string[];
  filterDateColumn?: string;
  filterPlaceholder?: string;
  noDataComponent?: string;
}

const BasicTable = ({
  title,
  columns,
  data,
  filterSelectColumn,
  filterTextColumns,
  filterDateColumn,
  filterPlaceholder,
  noDataComponent,
}: BasicTableProps) => {
  const [filterText, setFilterText] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState("");
  const [to, setTo] = React.useState();
  const [from, setFrom] = React.useState();
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );

  const filteredItems = data.filter((item) => {
    let isFrom = true;
    let isTo = true;
    let column = "status";

    if (filterDateColumn) {
      const itemDateMoment = moment(item[filterDateColumn]);
      if (from) {
        const fromMoment = moment(from);
        isFrom = itemDateMoment.isSameOrAfter(fromMoment);
      }

      if (to) {
        const toMoment = moment(to);
        isTo = itemDateMoment.isSameOrBefore(toMoment);
      }
    }

    const someFilterText = filterTextColumns.some(
      (column) =>
        item[column] &&
        item[column].toLowerCase().includes(filterText.toLowerCase()) &&
        isFrom &&
        isTo
    );

    if (filterStatus) {
      return item[column] === parseInt(filterStatus) && someFilterText;
    }

    return someFilterText;
  });

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterStatus || filterText || to || from) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
        setFilterStatus("");
        setFrom(undefined);
        setTo(undefined);
      }
    };

    return (
      <FilterComponent
        to={to}
        from={from}
        setFromDate={(e) => setFrom(e)}
        setToDate={(e) => setTo(e)}
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        onFilterStatus={(e) => setFilterStatus(e.target.value)}
        filterStatus={!!filterSelectColumn}
        filterText={filterText}
        filterDate={!!filterDateColumn}
        filterPlaceholder={filterPlaceholder}
      />
    );
  }, [filterStatus, filterText, resetPaginationToggle, to, from]);

  return (
    <DataTable
      title={title}
      columns={columns}
      data={filteredItems}
      pagination
      noDataComponent={<div style={{ padding: "24px" }}>{noDataComponent}</div>}
      paginationResetDefaultPage={resetPaginationToggle}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      customStyles={customStyles}
    />
  );
};

export default BasicTable;
