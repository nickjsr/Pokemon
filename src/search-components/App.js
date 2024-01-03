import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Searching from './search-app';
import Collection from '../collection-components/collection-app.js';
import Cooking from '../cooking-components/cooking-app.js';
import Form from '../collection-components/collection-form.js';
import PokemonDetail from './pokemon-detail';

export default function App(props) {
    return (
        <Routes>
            <Route path="searching" element={<Searching />} />
            <Route path='pokemon/:pName' element={<PokemonDetail />} />
            <Route path="collection" element={<Collection />} />
            <Route path='collection/:pName' element={<PokemonDetail />} />
            <Route path="cooking" element={<Cooking />} />
            <Route path='form' element={<Form />} />
            <Route path="*" element={<Navigate to="/searching" replace />} />
        </Routes>
    )
}