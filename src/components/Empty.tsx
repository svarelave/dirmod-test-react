import React from "react";
import { Icon } from "components";

export const Empty = () => (
  <div className="d-flex justify-content-center align-items-center flex-column bg-white px-2 py-2 rounded h-100">
    <p style={{ fontSize: "1.5rem" }}>No se encontraron registros</p>
    <Icon name="folder-open" style={{ fontSize: "3rem" }} />
  </div>
);
