# WorkClock-Wizard
A work day scheduler

## Description
The Productive Day Organizer is a simple yet powerful calendar application designed for efficient daily planning. With a focus on ease-of-use, this tool assists in organizing daily tasks and appointments within standard business hours (9 AM to 5 PM). It features dynamic visual cues, showing the current day at the top of the calendar and using color coding to indicate past, present, and future timeblocks. Built with jQuery and Day.js, this planner not only teaches essential web application skills but also demonstrates practical data persistence using local storage, ensuring that your scheduled events are saved and retained even after refreshing the page.

1. HTML: Structures the web app with a header displaying the current day, and timeblocks for each hour from 9 AM to 5 PM. Each timeblock includes a textarea for entering events and a save button.

2. CSS: Styles the application, making use of Bootstrap for layout. It includes styles for past, present, and future timeblocks, distinguished by color codes.

3. JavaScript (with jQuery and Day.js):
 - Dynamically displays the current day using Day.js.
 - Adds functionality to the save buttons, allowing users to save their events to local storage.
 - Applies color coding to the timeblocks based on the current hour, indicating past, present, and future.
 - Retrieves and displays saved events from local storage, ensuring persistence of data even after page refresh.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Test](#test)

## Installation
To install this project:

- Clone the repository to your local machine.
- Open the folder and launch index.html in a web browser.

## Usage
To maximize the benefits of the organizer:

1. Open the planner to view the current day displayed at the top.
2. Scroll to view timeblocks for standard business hours (9 AM to 5 PM).
3. Click on a timeblock to enter events or tasks.
4. After typing, click the save button to store your entries in local storage.
5. Note that each timeblock is color-coded - past (gray), present (red), and future (green) - to easily identify the time context.

## Credits
Developed independently. Utilizes:
- [jQuery](https://codepen.io/judebloom/pen/RwGbVWB)
- [stackoverflow](https://stackoverflow.com/questions/73565932/i-have-added-a-local-storage-function-but-it-doesnt-seem-to-work-on-my-scheduler)

## License
Distributed under the MIT License. See [LICENSE](https://choosealicense.com/licenses/mit/) for more information.

## Features
- Hourly Task Scheduling: Plan your day hour-by-hour within standard business hours.
- Data Persistence with Local Storage: Your entries are saved and will persist even after refreshing the page.
- Dynamic UI Changes Based on Time: Timeblocks are color-coded to visually indicate whether they are in the past, present, or future.
- Current Day Display: Automatically displays the current day at the top for easy reference.
- Interactive Timeblocks: Directly click into timeblocks to add and edit events.

## Test
Currently, manual testing is done. Future updates may include automated tests.