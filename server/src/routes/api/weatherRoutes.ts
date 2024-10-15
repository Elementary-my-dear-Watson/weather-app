import { Router } from 'express';
// import HistoryService from '../../service/historyService.js';
import  HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';
import WeatherService from '../../service/weatherService.js';

const router = Router();


// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
  // TODO: GET weather data from city name
  const city = req.body.city;
  try {
    const weatherData = await WeatherService.getWeatherData(city);
      // TODO: save city to search history
    HistoryService.addCityToHistory(city);
    res.json(weatherData);
  } catch (error) {
    res.status(404).json({ error: 'An error occurred while fetching weather data.' });
  }
});

// TODO: GET search history
router.get('/history', async (req, res) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {});

export default router;
