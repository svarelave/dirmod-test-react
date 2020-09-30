import React from "react";
import { Title } from "./Title";

const Table = (props: any) => {
  let content = (
    <table className="table table-component table-responsive w-100 d-block d-md-table">
      <thead>
        <tr>
          {props.header &&
            props.header.map((i: any, index: number) => {
              return (
                <th
                  scope="col"
                  className={
                    props.center && props.center.indexOf(index) !== -1
                      ? "text-center"
                      : ""
                  }
                  key={index}
                >
                  {i}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );

  if (!props.data || props.data === 0) {
    content = <h2 className="no-table-data">No hay registros</h2>;
  }

  return (
    <div className="table-container">
      <Title right={props.right}>{props.title}</Title>
      {content}
    </div>
  );
};

export default Table;
