import React from "react";
import PropTypes from "prop-types";

export default function ProjectBox({
  projectbox: { id, title, image },
  onProjSel,
  onProjDesel,
}) {
  return (
    <html>
      <div id={id} style={{color:"blue"}}>{title}</div>
      <img alt="">{image}</img>
    </html>
  );
}
