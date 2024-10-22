const axios = require('axios');

// Obtener películas populares
const getPopularMovies = async (req, res) => {
    const language = "es-ES";
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
    res.json(response.data);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Error fetching popular movies' });
  }
};

// Obtener películas en cartelera
const getNowPlayingMovies = async (req, res) => {
    const language = "es-ES";
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching now playing movies' });
  }
};

// Obtener créditos de la película
const getMovieCredits = async (req, res) => {
  const language = "es-ES";
  const { movieId } = req.params;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movie credits' });
  }
};

// Obtener detalles de la película
const getMovieDetails = async (req, res) => {
  const language = "es-ES";
  const { movieId } = req.params;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}&language=${language}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movie details' });
  }
};

module.exports = {
  getPopularMovies,
  getNowPlayingMovies,
  getMovieCredits,
  getMovieDetails,
};
