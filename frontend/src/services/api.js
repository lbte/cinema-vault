const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`
    )
    const data = await response.json()
    return data.results
}