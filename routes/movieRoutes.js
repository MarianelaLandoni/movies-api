const express = require('express');
const { getPopularMovies, getNowPlayingMovies, getMovieCredits, getMovieDetails } = require('../controllers/movieController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/popular', protect, getPopularMovies);
router.get('/now-playing', protect, getNowPlayingMovies);
router.get('/:movieId/credits', protect, getMovieCredits);
router.get('/:movieId', protect, getMovieDetails);

module.exports = router;
