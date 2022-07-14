import React, { useState } from "react";
import { AiOutlineFile, AiOutlineFolder } from "react-icons/ai";
import { FILE_ICONS, FILE_ICONS_COLOR } from "./fileIconSelector";
import "./App.css";

export const Folder = ({ explorer }) => {
  const [show, setShow] = useState(false);
  let extension = explorer.name.split(".")[1];
  let fileIconColor = FILE_ICONS_COLOR[extension];

  if (explorer.isFolder)
    return (
      <div>
        <span
          onClick={() => {
            setShow(!show);
          }}
        >
          <p className="folder-name">
            <span className="icon">
              <AiOutlineFolder />
            </span>
            <b>{explorer.name}</b>
          </p>
        </span>

        {show && (
          <div style={{ paddingLeft: "18px" }}>
            {explorer.childrens.map((exp) => {
              return <Folder explorer={exp} />;
            })}
          </div>
        )}
      </div>
    );
  else
    return (
      <p className="file-name">
        <span style={{ color: fileIconColor }} className="icon">
          {FILE_ICONS[extension] || <AiOutlineFile />}
        </span>
        {explorer.name}
      </p>
    );
};
