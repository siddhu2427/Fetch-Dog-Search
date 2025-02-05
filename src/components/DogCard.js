import React from "react";

const DogCard = ({ dog, toggleFavorite, favorites = [] }) => {
    return (
        <div>
            <img src={dog.img} alt={dog.name} width="150" />
            <h3>{dog.name}</h3>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <button onClick={() => toggleFavorite(dog.id)}>
                {favorites.includes(dog.id) ? "Unfavorite" : "Favorite"}
            </button>
        </div>
    );
};

export default DogCard;
