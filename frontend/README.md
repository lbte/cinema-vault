# Cinema Vault App 🎥

A React + Vite application designed to showcase a collection of movies. The app provides an intuitive and user-friendly interface for browsing movies, viewing their details, and organizing favorites.

## 🌟 Features

- **Home Page**: Displays the most popular movies with their name, poster, and release date, retrieved from the [The Movie Database API](https://www.themoviedb.org/).
- **Search Functionality**: Search for movies directly from the database via a search box.
- **Favorites Page**: Add movies to your favorites and view your curated list of favorite movies.

### Home Page
The Home Page shows the most popular movies with a search box to find specific titles.

![Home Page](src/assets/Home.png)

### Search Functionality
Search for movies directly by typing in the search box. The app fetches matching results from the API.

![Search Functionality](src/assets/search.gif)

### Favorites Page
View your favorite movies on a dedicated Favorites Page.

![Favorites Page](src/assets/Favorites.png)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- NPM or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lbte/cinema-vault.git
   cd cinema-vault
   ```

2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a .env file in the root directory and add your [The Movie Database API](https://www.themoviedb.org/) key (which you get by creating an account > go to settings > API):
    ```env
    VITE_API_KEY=your_api_key_here
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
Open the link that is shown in the console.

## 🔧 API Endpoints Used
1. **Most Popular Movies:** Fetches the most popular movies to display on the Home Page.
    ```bash
    https://api.themoviedb.org/3/movie/popular?api_key=your_api_key_here
    ```
2. **Search Movies:** Searches for movies based on the user's input.
    ```bash
    https://api.themoviedb.org/3/search/movie?api_key=your_api_key_here&query=<movie_name>
    ```
