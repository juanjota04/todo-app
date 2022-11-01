import React from "react";
import { ReactComponent as CheckIcon } from './img/check.png';
import { ReactComponent as DeleteIcon } from './img/bin.png';
import './TodoIcon.css';

const iconTypes = {
    "check": color => (
        <CheckIcon className="Icons-png Icon-png--check" fill={color}/>
    ),
    "delete": color => (
        <DeleteIcon className="Icons-png Icon-png--delete" fill={color}/>
    ),
}

function TodoIcon({ type, color = 'gray', onClick }) {

    return (
        <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon }