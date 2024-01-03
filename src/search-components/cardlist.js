import React from "react";
import { NavLink } from "react-router-dom";

export function CardList(props) {
    const pokemon = props.pokemon;

    const card = pokemon.length > 0 ? (
        pokemon.map((oneP) => {
            return (
                <div className="search-card" key={oneP.name}>
                    <img src={oneP.image} alt={oneP.name} />
                    <NavLink to={`/pokemon/${oneP.name}`} className="cardText">{oneP.name}</NavLink>
                </div>
            );
        })
    ) : (
        <div className="no-result-reminder-search marginLeft">
            <b>No items to display!</b>
        </div>
    );


    return (
        <section>
            <div className="search-cards-container">
                {card}
            </div>
        </section>
    )
}