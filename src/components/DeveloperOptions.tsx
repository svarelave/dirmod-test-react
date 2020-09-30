import React, { ReactElement } from "react";
import { Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const DeveloperOptions = (): ReactElement => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="container pt-5">
      <h1 className="text-center">⚙️Developer Options</h1>
      <p className="text-center text-uppercase text-danger">
        ⚠️WARNING: These options are for Limonbyte developers only
      </p>
      <Card>
        <Card.Body>
          <Card.Title>🌐Language</Card.Title>
          <Card.Text>
            This option set the system language. <br />
          </Card.Text>
          <Card>
            <Card.Body>
              <div onChange={changeLanguage}>
                <input
                  type="radio"
                  id="es"
                  value="es"
                  name="language"
                  defaultChecked={i18n.language === "es"}
                />{" "}
                <label htmlFor="es">🇪🇸</label>
                <input
                  type="radio"
                  value="nl"
                  id="nl"
                  className="ml-3"
                  name="language"
                  defaultChecked={i18n.language === "nl"}
                />{" "}
                <label htmlFor="nl">🇳🇱</label>
                <div className="float-right">
                  Current:{" "}
                  <b>
                    <code className="text-uppercase">{i18n.language}</code>
                  </b>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DeveloperOptions;
