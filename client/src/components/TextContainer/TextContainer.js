import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Chat en Tiempo Real!{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Creado con React, Express, Node y Socket.IO{" "}
        <span role="img" aria-label="emoji">
          💜
        </span>
      </h2>
      <h2>
        Pruebalo ahora!{" "}
        <span role="img" aria-label="emoji">
          🆓
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>Personas en el Chat:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
