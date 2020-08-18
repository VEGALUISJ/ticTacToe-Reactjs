import React from 'react';

const Square = ({ value, onClick }) => {
    const style = value ? value.toUpperCase() : "red";
    console.log(style);

    return (
        <button onClick={onClick}>
            <p className={style} >{value}</p>
        </button>
    )
};

export default Square;