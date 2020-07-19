import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Tag({ content }) {
	return <Link className="icon text-light tag">{content}</Link>;
}
