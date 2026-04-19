import useFavorites from "../hooks/useFavorites";
import InventoryGallery from "../components/gallery/InventoryGallery";

export default function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="container">
      <h1>Улюблені</h1>

      {favorites.length === 0 ? (
        <p>Немає улюблених</p>
      ) : (
        <InventoryGallery
          items={favorites}
          onClick={() => {}}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
}