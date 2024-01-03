import React, { useState } from "react";

export function FilterBar({ berries, types, applyFilterCallback }) {
    const [filterBerry, setFilterBerry] = useState([]);
    const [filterType, setFilterType] = useState([]);

    const handleBerryChange = (event) => {
        const { name, checked } = event.target;
        setFilterBerry((prev) => {
            if (checked) {
                return [...prev, { name, checked }];
            }
            else {
                return prev.filter((berry) =>
                    berry.name !== name);
            }
        });
    };

    const handleTypeChange = (event) => {
        const { id, checked } = event.target;
        setFilterType((prev) => {
            if (checked) {
                return [...prev, { id, checked }];
            }
            else {
                return prev.filter((type) =>
                    type.id !== id);
            }
        });
    };

    const handleClick = (event) => {
        applyFilterCallback(filterBerry, filterType);
    }

    const berry = berries.map((pm) => {
        return (
            <div className="filter-card" key={pm.berry}>
                <input id={pm.berry} name={pm.berry} type="checkbox" value="" onChange={handleBerryChange}></input>
                <p><img src={pm.berryImg} alt={pm.berry}></img></p>
                <label htmlFor={pm.berry}>{pm.berry}</label>
            </div>
        )
    })

    const sleepType = types.map((pm) => {
        return (
            <div className="filter-card" key={pm.sleepType}>
                <input id={pm.sleepType} type="checkbox" value="" onChange={handleTypeChange}></input>
                <label htmlFor={pm.sleepType}>{pm.sleepType}</label>
            </div>
        )
    })

    return (
        <div className="search-filter-container">
            <section>
                <h2>Filter</h2>
                <h3>by berries</h3>
                {berry}
                <h3>by sleep type</h3>
                {sleepType}
                <div className="filter-submit-button">
                    <button id="submitButton" type="submit" className="search-submitButton" aria-label="submit-filter" onClick={handleClick}>Apply Filter</button>
                </div>
            </section>
        </div>
    )
}