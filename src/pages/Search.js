import React, { useEffect, useState, useCallback } from "react";
import { getBreeds, searchDogs, getDogDetails, getMatchedDog } from "../api/fetchService";
import DogCard from "../components/DogCard";
import Pagination from "../components/Pagination";
import SortingOptions from "../components/SortingOptions";
import FavoritesList from "../components/FavoritesList";

const Search = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState("");
    const [dogResults, setDogResults] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [matchedDog, setMatchedDog] = useState(null); // State for matched dog
    const [page, setPage] = useState(0);
    const [sortOrder, setSortOrder] = useState("breed:asc");

    useEffect(() => {
        (async () => {
            setBreeds(await getBreeds());
        })();
    }, []);

    const fetchDogs = useCallback(async () => {
        const searchParams = {
            breeds: selectedBreed ? [selectedBreed] : [],
            sort: sortOrder,
            size: 10,
            from: page * 10,
        };
        const searchResults = await searchDogs(searchParams);
        setDogResults(await getDogDetails(searchResults.resultIds));
    }, [selectedBreed, page, sortOrder]);

    useEffect(() => {
        fetchDogs();
    }, [fetchDogs]);

    const toggleFavorite = (dogId) => {
        setFavorites((prev) =>
            prev.includes(dogId) ? prev.filter((id) => id !== dogId) : [...prev, dogId]
        );
    };

    const handleMatch = async () => {
        if (favorites.length === 0) {
            alert("Please select at least one favorite dog.");
            return;
        }

        const matchedDogId = await getMatchedDog(favorites);

        if (!matchedDogId) {
            alert("No match found. Try selecting different favorites.");
            return;
        }

        // Fetch the matched dog's details
        const matchedDogDetails = await getDogDetails([matchedDogId]);

        if (matchedDogDetails.length > 0) {
            setMatchedDog(matchedDogDetails[0]); // Store matched dog info
        } else {
            alert("Error fetching matched dog's details.");
        }
    };

    return (
        <div>
            <h2>Search Dogs</h2>
            <select onChange={(e) => setSelectedBreed(e.target.value)}>
                <option value="">All Breeds</option>
                {breeds.map((breed) => (
                    <option key={breed} value={breed}>{breed}</option>
                ))}
            </select>
            <SortingOptions setSortOrder={setSortOrder} />
            <button onClick={fetchDogs}>Search</button>

            <div>
                {dogResults.map((dog) => (
                    <DogCard
                        key={dog.id}
                        dog={dog}
                        toggleFavorite={toggleFavorite}
                        favorites={favorites} // Ensure favorites are passed
                    />
                ))}
            </div>

            <Pagination page={page} setPage={setPage} />

            {/* Favorites List Component */}
            <FavoritesList
                favorites={favorites}
                dogs={dogResults}
                handleMatch={handleMatch}
                removeFavorite={toggleFavorite}
            />

            {/* Display Matched Dog */}
            {matchedDog && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    <h3>Your Matched Dog!</h3>
                    <img src={matchedDog.img} alt={matchedDog.name} width="200" style={{ borderRadius: "10px" }} />
                    <h4>{matchedDog.name}</h4>
                    <p>Breed: {matchedDog.breed}</p>
                    <p>Age: {matchedDog.age}</p>
                </div>
            )}
        </div>
    );
};

export default Search;
