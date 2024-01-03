import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import listFilesAndUrls from "../utils/storage-download";
import { db } from "..";
import { BNavbar } from './navbar';
import { SearchBar } from './search-bar';
import { CardList } from './cardlist';
import { FilterBar } from './filter-bar';
import { formatString } from '../utils/string-utils';

function App(props) {
    const [filterBerry, setFilterBerry] = useState([]);
    const [filterType, setFilterType] = useState([]);
    const [searchPm, setSearchPm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [allBerries, setAllBerries] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [allPokemonDB, setAllPokemonDB] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const selectedBerries = filterBerry.filter((berry) => berry.checked).map((berry) => berry.name.toLowerCase());
    const selectedTypes = filterType.filter((type) => type.checked).map((type) => type.id);

    useEffect(() => {
        const pokemonRef = ref(db, "pokemon");
        const unregisterFunction = onValue(pokemonRef, (snapshot) => {
            const data = snapshot.val();
            const pokemonArray = Object.entries(data).map(([key, value]) => ({
                name: key,
                ...value
            }));
            setAllPokemonDB(pokemonArray);
        });
        //cleanup function for when component is removed
        function cleanup() {
            unregisterFunction(); //call the unregister function
        }
        return cleanup;
    })

    useEffect(() => {
        const fetchData = async () => {
            const pokemonImgData = await listFilesAndUrls('pokemons');
            const pokemonImagesArray = pokemonImgData.map((image) => ({
                pokemonName: formatString(image.name.slice(0, -4)),
                source: image.url
            }));
            const berriesImgData = await listFilesAndUrls('berries');
            const berriesImagesArray = berriesImgData.map((image) => ({
                berryName: formatString(image.name.slice(0, -4)),
                berryNameDash: image.name.slice(0, -4),
                source: image.url
            }));
            setAllBerries(berriesImagesArray);
            setAllPokemons(pokemonImagesArray);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div className="loading">Working...</div>;  // Loading message
    }

    function getImageUrl(data) {
        return data?.source || ''
    }

    const pokemonData = allPokemonDB.map((pokemon) => ({
        name: pokemon.name,
        berry: pokemon.berry,
        sleepType: pokemon.sleepType,
        mainSkill: pokemon.mainSkill,
        image: getImageUrl(allPokemons.find((image) => image.pokemonName === pokemon.name)),
        berryImg: getImageUrl(allBerries.find((image) => image.berryName === pokemon.berry))
    }));

    let displayedData;
    if (selectedBerries.length === 0 && selectedTypes.length === 0 && searchPm === '') {
        displayedData = pokemonData;
    } else if (selectedBerries.length > 0 && selectedTypes.length === 0 && searchPm === '') {
        displayedData = pokemonData.filter((pm) => selectedBerries.includes(pm.berry.toLowerCase()));
    } else if (selectedBerries.length === 0 && selectedTypes.length > 0 && searchPm === '') {
        displayedData = pokemonData.filter((pm) => selectedTypes.includes(pm.sleepType));
    } else if (selectedBerries.length > 0 && selectedTypes.length > 0 && searchPm === '') {
        displayedData = pokemonData.filter((pm) =>
            selectedBerries.includes(pm.berry.toLowerCase()) && selectedTypes.includes(pm.sleepType)
        );
    } else if (selectedBerries.length === 0 && selectedTypes.length === 0 && searchPm !== '') {
        displayedData = pokemonData.filter((pm) => pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else if (selectedBerries.length > 0 && selectedTypes.length === 0 && searchPm !== '') {
        displayedData = pokemonData.filter((pm) => selectedBerries.includes(pm.berry.toLowerCase()) && pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else if (selectedBerries.length === 0 && selectedTypes.length > 0 && searchPm !== '') {
        displayedData = pokemonData.filter((pm) => selectedTypes.includes(pm.sleepType) && pm.name.toLowerCase().includes(searchPm.toLowerCase()));
    } else {
        displayedData = pokemonData.filter((pm) =>
            selectedBerries.includes(pm.berry.tolowercase()) && selectedTypes.includes(pm.sleepType) && pm.name.toLowerCase().includes(searchPm.toLowerCase())
        );
    }

    const applyFilter = (selectedBerry, selectedType) => {
        setFilterBerry(selectedBerry);
        setFilterType(selectedType);
    }

    const applySearch = (searchedPm) => {
        setSearchPm(searchedPm);
    }

    let uniqueBerries = [];
    let seenBerry = new Set();
    for (let pm of pokemonData) {
        if (!seenBerry.has(pm.berry)) {
            seenBerry.add(pm.berry);
            uniqueBerries.push(pm);
        }
    }

    let uniqueTypes = [];
    let seenType = new Set();
    for (let pm of pokemonData) {
        if (!seenType.has(pm.sleepType)) {
            seenType.add(pm.sleepType);
            uniqueTypes.push(pm);
        }
    }

    const H1 = ({ isOpen }) => {
        return (
            <div className="marginLeft">
                <h1 className={`h1 ${isOpen ? 'navbar-open' : ''}`}>Pokemon Dex</h1>
            </div>
        );
    }

    const applyMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    return (
        <div>
            <header>
                <nav>
                    <BNavbar applyMenuCallBack={applyMenu} />
                </nav>
                <H1 isOpen={isOpen} />
            </header>
            <main>
                <SearchBar applySearchCallback={applySearch} />
                <div className="search-feature-container">
                    <CardList pokemon={displayedData} />
                    <FilterBar berries={uniqueBerries} types={uniqueTypes} applyFilterCallback={applyFilter} />
                </div>
            </main>
            <footer className='marginLeft'>
                <p>This web application was created by us using our own two hands.</p>
                <address>Contact Noor Aamir, Ling (Evelyn) Lin, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi.</address>
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;