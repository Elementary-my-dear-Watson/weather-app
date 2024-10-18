import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();
interface Coordinates {
  lat: number;
  lon: number;
}
class Weather {
  public city: string
  public date: Date
  public icon: string
  public iconDescription: string
  public tempF: number
  public windSpeed: number
  public humidity: number
  constructor(
    city: string,
    date: Date,
    icon: string,
    iconDescription: string,
    tempF: number,
    windSpeed: number,
    humidity: number,
  ) {this.city = city;
    this.date = date;
    this.icon = icon;
    this.iconDescription = iconDescription;
    this.tempF = tempF;
    this.windSpeed = windSpeed;
    this.humidity = humidity;
  }
}
class WeatherService {
  private baseURL: string = process.env.API_BASE_URL || '';
  private apiKey: string = process.env.API_KEY || '';
  constructor() {
    if (!this.apiKey) {
      throw new Error('API key for OpenWeather is missing. Set it in the .env file.');
    }
    console.log('Base URL:', this.baseURL);
  }
  private async fetchLocationData(city: string): Promise<Coordinates> {
    const url = `${this.baseURL}/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    console.log('Fetching location data from:', url); // Log the URL being fetched
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error(`City "${city}" not found.`);
    }
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Location data:', data); // Log the data being fetched
    return this.extractCoordinates(data);
  }
  private extractCoordinates(data: any): Coordinates {
    return {
      lat: data.coord.lat,
      lon: data.coord.lon,
    };
  }
  private buildWeatherQuery({ lat, lon }: Coordinates): string {
    return `${this.baseURL}/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
  }
  private async fetchWeatherData(coords: Coordinates): Promise<[Weather]> {
    const url = this.buildWeatherQuery(coords);
    console.log('Fetching weather data from:', url); // Log the URL being fetched
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Weather data:', data); // Log the data being fetched
    return this.parseWeatherData(data);
  }
  private parseWeatherData(data: any): [Weather] {
    console.log('Parsed data:', data); // Log the data being parsed
    return [new Weather(data.name, new Date(data.dt), data.weather[0].icon, data.weather[0].description, data.main.temp, data.wind.speed, data.main.humidity)];
  }
  public async getWeatherForCity(city: string): Promise<[Weather]> {
    try {
      const coords = await this.fetchLocationData(city);
      return await this.fetchWeatherData(coords);
    } catch (error: any) {
      console.error(`Error: ${error.message}`);
      throw new Error('Failed to retrieve weather data.');
    }
  }
  public async fetchWeatherForecast(lat: number, lon: number) {
    const url = `${this.baseURL}/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    console.log('Fetching weather forecast from:', url); // Log the URL being fetched
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather forecast: ${response.statusText}`);
    }
    const data = await response.json();
    return data; // You may want to return a specific part of the data
  }
}
// Export the WeatherService instance
export default new WeatherService();
