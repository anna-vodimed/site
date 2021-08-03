import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default function Navitem(props) {
    return (
        <li id={props.item}>
        <Link to={props.tolink} onClick={props.activec.bind(this,props.item)}>{props.item}</Link>
        </li>
    )
}