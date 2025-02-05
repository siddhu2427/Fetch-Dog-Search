import React from "react";

const FavoritesList = ({ favorites, dogs, handleMatch, removeFavorite }) => {
    return (
        <div>
            <h3>Favorites</h3>
            {favorites.length === 0 ? (
                <p>No favorite dogs selected.</p>
            ) : (
                <div>
                    {dogs
                        .filter((dog) => favorites.includes(dog.id))
                        .map((dog) => (
                            <div key={dog.id}>
                                <img src={dog.img} alt={dog.name} width="100" />
                                <h4>{dog.name}</h4>
                                <p>Breed: {dog.breed}</p>
                                <p>Age: {dog.age}</p>
                                <button onClick={() => removeFavorite(dog.id)}>Remove</button>
                            </div>
                        ))}
                    <button onClick={handleMatch}>Find My Match</button>
                </div>
            )}
        </div>
    );
};

export default FavoritesList;
