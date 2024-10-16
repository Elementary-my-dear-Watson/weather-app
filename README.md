# Weather App

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents
- [Description](#description)
- [User story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
- [Acknowledgements](#acknowledgements)
- [Contributors](#contributors)
- [Contacts](#contacts)

## Description
An application using OpenWeather API for travelers to see a five-day weather forcast while being able to select multiple cities to help them plan their trip accordingly. This will include the temerature, wind speed,humidity, and weather conditions for each day. 

The application consists of:
- A search input where users can type in a city name.
- A search history section where users can click on previouly searched cities.
- A current weather display for the selected city.
- A five-day weather forcast that includes the date, weather conditions, and important weather metrics.

This involves buildiing the back-end to fetch data from OpenWeather API, then connecting it to front-end, then deploying the application to Render. 

## User Story
As A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly


## Installation
To install the necessary dependencies, run the following command:

git clone <repository-url>
npm install
npm start

## Usage
Search for a City:

1.Enter a city name in the input field and click the Search button.
The current weather and 5-day forecast for that city will be displayed.

2.View Previous Searches:
The cities you've previously searched will appear as buttons below the search bar.
Clicking on any of these cities will reload its weather information.

3.Weather Information Displayed:
Current temperature, wind speed, and humidity for the selected city.
A weather icon and description of the current conditions.
A 5-day weather forecast showing temperature, wind speed, humidity, and weather conditions.

API used:
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


## License
This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license

## Tests
The project can be deployed to Render. 

## Questions
If you have any questions about the project, feel free to contact me:

## Acknowledgements
I would like to thank Jacob Watson, Nick S., and David Park for their invaluable contributions to this project, particularly in the areas of API integration, debugging, etc.. Their expertise and teamwork were crucial in bringing this project to completion.

## Contributors
- Martha Watson - API intergration, debugging, peer support.
- Jacob Watson - API intergration, debugging, peer support.
- Nick S. (BootCamp tutor) - Debugging.
- David Park (BootCamp tutor) - Debugging.
If you'd like to contribute to this project, please fork the repository and submit a pull request. For any major changes, please open an issue first to discuss what you'd like to change.

## Contact Information
- GitHub: [Elementary-my-dear-Watson](https://github.com/Elementary-my-dear-Watson)
- Email: marthacdenzer@gmail.com

