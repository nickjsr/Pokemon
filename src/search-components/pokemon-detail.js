import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue } from "firebase/database";
import listFilesAndUrls from "../utils/storage-download";
import { db } from "..";
import { BNavbar } from './navbar';
import { formatString } from '../utils/string-utils';

import _ from 'lodash';

export default function PokemonDetail(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [allBerries, setAllBerries] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [allPokemonDB, setAllPokemonDB] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { pName: pNameString } = useParams();

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
        return data?.source || '';
    }

    const pokemonData = allPokemonDB.map((pokemon) => ({
        name: pokemon.name,
        berry: pokemon.berry,
        sleepType: pokemon.sleepType,
        mainSkill: pokemon.mainSkill,
        image: getImageUrl(allPokemons.find((image) => image.pokemonName === pokemon.name)),
        berryImg: getImageUrl(allBerries.find((image) => image.berryName === pokemon.berry))
    }));

    let pokemon = _.find(pokemonData, { name: pNameString });

    const applyMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    const H1 = ({ isOpen }) => {
        return (
            <div className='marginLeft'>
                <h1 className={`h1 ${isOpen ? 'navbar-open-detail' : ''}`}>{pokemon.name}</h1>
            </div>
        );
    }

    return (
        <div>
            <nav>
                <BNavbar applyMenuCallBack={applyMenu} />
            </nav>
            <H1 isOpen={isOpen} />
            <div className='info'>
                <img className='search-card' src={pokemon.image} alt={pokemon.name}></img>
                <div className='info-text'>
                    <p>Berry: {pokemon.berry}</p>
                    <p>Sleep Type: {pokemon.sleepType}</p>
                    <p>Main Skill: {pokemon.mainSkill}</p>
                </div>
            </div>
        </div>
    )
}