import React from 'react';

//함수표현식 - > named export
export const Header = ({title, totalPlayers}) => {
    //console.log(props);
    //const {title, totalPlayers} = props;  //해체할당 (destruct assigment
    return (
        <header className="header">
            <h1 className="h1">{title}</h1>
            <span className="stats">Players : {totalPlayers}</span>
        </header>
    )
}