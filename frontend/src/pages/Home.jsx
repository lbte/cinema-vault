import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (error) {
                console.log(error)
                setError("An error occurred while fetching popular movies")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault() // Prevennts default behavior which is reloading the page
        if (!searchQuery.trim()) return
        if (loading) return // Prevents multiple searches while loading

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (error) {
            console.log(error)
            setError("An error occurred while searching for movies")
        } finally {
            setLoading(false)
        }

        setSearchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => 
                        <MovieCard key={movie.id} movie={movie} />
                    )}
                </div>
            )}
        </div>
    )
}

export default Home