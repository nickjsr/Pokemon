import React, { useState } from "react";

export function SearchBar(props) {
    const [searchPm, setSearchPm] = useState('');

    const handleSearchChange = (event) => {
        setSearchPm(event.target.value)
    }

    const handleClick = (event) => {
        props.applySearchCallback(searchPm)
    }

    return (
        <section className="marginLeft">
            <form>
                <input id="search" name="search" type="text" aria-describedby="type-for-search" placeholder="Search Pokemon..." onChange={handleSearchChange}></input>
                <button type="button" className="search-searchButton" aria-label="submit-search-input" onClick={handleClick}>Search</button>
            </form>
        </section>
    )
}