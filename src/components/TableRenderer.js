import React from "react";
import "../styles/TableRenderer.css";

export default function TableRenderer(props) {
    return <table {...props} className="tableBlock" />;
}
