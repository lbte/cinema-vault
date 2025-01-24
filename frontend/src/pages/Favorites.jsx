import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
    const { favorites } = useMovieContext()
    return (
        <>
            { favorites && favorites.length > 0 ? (
                <div className="favorites">
                    <h2>Favorites</h2>
                    <div className="movies-grid">
                        {favorites.map((movie) => 
                            <MovieCard key={movie.id} movie={movie} />
                        )}
                    </div>
                </div>
            ) : (
                <div className="favorites-empty">
                    <h2>No favorite movies yet.</h2>
                    <p>Start adding movies to your favorites and they will appear here.</p>
                </div>
            )}
        </>
    )
}

export default Favorites