import React, { useState, useEffect } from 'react';
import { BNavbar } from '../search-components/navbar';
import { NavLink } from 'react-router-dom';
import { ref, onValue, remove } from "firebase/database";
import { db } from "..";

function App(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const collectionRef = ref(db, "collection");
        const unregisterFunction = onValue(collectionRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const collectionArray = Object.entries(data).map(([key, value]) => ({
                    name: key,
                    ...value
                }));
                setCollection(collectionArray);
            } else {
                setCollection([]);
            }
        });
        //cleanup function for when component is removed
        function cleanup() {
            unregisterFunction(); //call the unregister function
        }
        return cleanup;
    })

    const H1 = ({ isOpen }) => {
        return (
            <div className='marginLeft'>
                <h1 className={`h1 ${isOpen ? 'navbar-open' : ''}`}>Collection</h1>
            </div>
        );
    }

    const applyMenu = (isOpen) => {
        setIsOpen(isOpen)
    }

    const handleDeletePokemon = (event, oneCard) => {
        event.preventDefault();

        const deleteRef = ref(db, "collection/" + oneCard.name);

        remove(deleteRef)
            .then(() => console.log("data removed successfully!"))
            .catch(err => console.log(err)); //log any errors for debugging
    };

    const card = collection.length > 0 ? (
        collection.map((oneP) => {
            return (
                <div className="collection-card" key={oneP.name}>
                    <img src={oneP.image} alt={oneP.name}></img>
                    <NavLink to={`/collection/${oneP.name}`} className="cardText">{oneP.name}</NavLink>
                    <button aria-label="delete-current-pokemon" className="delete-button" onClick={(event) => handleDeletePokemon(event, oneP)}>
                        Delete
                    </button>
                </div>
            )
        })) : (
        <div className="no-result-reminder-collection-main">
            Collection is empty!
        </div>
    );

    return (
        <div>
            <header>
                <nav>
                    <BNavbar applyMenuCallBack={applyMenu} />
                </nav>
                <H1 isOpen={isOpen} />
            </header>
            <main>
                <section className="button-container">
                    <h2 className='marginLeft'>Click the button below to navigate to the pop-up form</h2>
                    <NavLink to={"/form"} className="linkButton">Add Pokémon</NavLink>
                </section>

                <h2 className='marginLeft'>My Collection</h2>

                <div className="collection-cards-container">
                    {card}
                </div>
            </main>
            <footer className="marginLeft">
                <p>This web application was created by us using our own two hands.</p>
                <address>Contact Noor Aamir, Ling (Evelyn) Lin, Jessie Ren at <a href="mailto:siyiren@uw.edu">siyiren@uw.edu</a>, and Yi Shi.</address>
                <p>&copy; 2023 INFO 340 Team B6.</p>
            </footer>
        </div>
    )
}

export default App;
