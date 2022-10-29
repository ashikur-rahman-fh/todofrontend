import React, { useState } from "react";
import OfflinePinTwoToneIcon from '@mui/icons-material/OfflinePinTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import "./style.scss";

const TodoListItem = (props) => {
    const { text, onClick } = props;
    const [displayActions, setDisplayActions] = useState(false);

    const displayActionButtons = () => {
        return (
            <span>
                <OfflinePinTwoToneIcon className="done-button" />
                <DeleteTwoToneIcon className="delete-button" />
            </span>
        );
    };
    
    return (
        <li
            className="todo-item"
            onClick={onClick}
            onMouseOver={() => setDisplayActions(true)}
            onMouseLeave={() => setDisplayActions(false)}
        >
            {text}
            {displayActions && displayActionButtons()}
        </li>
    );
};

export default TodoListItem;