# INFO 340 Team BB6 Project - Pokémon

This repository is from a private shared repository and contains code for an interactive information web app, created for the _Client-Side Web Development_ course at the UW iSchool.

## Project Information

UW Seattle Information School Client-Side Development (INFO 340) final project, earned a perfect score (rank 1 of 70)

Designed and implemented a full-featured web application that provides comprehensive Pokémon information and resources to Pokémon Sleep players.

Created web pages fully from scratch.

Applied iterative development and modified existing web projects in one proposal and three drafts.

Wrote semantically rich HTML while ensuring accessibility.

Used CSS to give pages 99 complex formatting and layouts.

Harnessed media queries and CSS frameworks to ensure responsive design.

Worked with fundamental JavaScript functions and data types.

Structured web pages using React Components with React props and state to make them interactive.

Integrated Firebase hosting, Firebase Realtime Database, and Firebase Storage for deployment and data persistence.

## Team Members (in last name alphabetical order)

Noor Aamir

Ling (Evelyn) Lin

Jessie Ren (siyiren@)

Yi Shi

## Link to Published Web Site
https://pokemon-1693b.web.app

## My role

Initiate CSS

Set up Firebase

Code everything directly related to Firebase (Realtime Database and Storage)

Ensure accessibility and styling

Wrap up the collection component

Final check all drafts and the final deliverable

## Disclaimer

I used uw.edu email to set up Firebase for our original project. This version has been changed to use my personal email address.

I have redacted contact information of my teammates

## Problem Description

Our web application aims to provide comprehensive Pokémon information and resources to Pokémon Sleep players. The adventure takes place on a small island where a player researches how Pokémon sleep. The player sleeps with a giant Pokémon called Snorlax, who attracts other Pokémon from the island for a sleep study, by turning on a smartphone's microphone and accelerometer for sleep tracking, and Pokémon who share similar sleep styles to the player come around Snorlax. One of the most important tasks is to increase the strength of Snorlax through berries and ingredients collected by helper Pokémon, thus attracting more advanced Pokémon to come.

A big challenge for Pokémon players is collecting information on all Pokémon and choosing the best helper Pokémon to cultivate Snorlax. Some experienced players posted beginner tips for the game, like the functionality walkthrough shown below, but there is a lack of small interactive demos through the Internet that allow players to get acquainted with some of the most common Pokémon and experiment with important game features tentatively. By implementing this web app, we hope to give the players more guidance through helper Pokémon and interactive feature selections.

## Functionality Walkthrough

[Pokémon Sleep Beginner Tips and Tricks](https://gamerant.com/pokemon-sleep-beginner-tips-tricks/)

## Target Audience
The users of the Pokémon Sleep application would primarily consist of dedicated Pokémon fans eager for new Pokémon-related experiences and also those actively seeking ways to monitor and enhance their sleep patterns. Other users could be gamers who enjoy gamified experiences and are drawn to the idea of earning rewards or interacting with Pokémon characters based on their sleep performance. Lastly, individuals who prioritize health and wellness as part of a holistic lifestyle may find value in using the app to achieve better sleep. Pokémon Sleep has the potential to positively affect minority populations by promoting healthier sleep habits, fostering a sense of community and inclusion, celebrating cultural diversity, motivating users to prioritize sleep, ensuring accessibility, and removing economic barriers to wellness. Through these means, it can contribute to improved health and well-being within minority communities while offering an inclusive and engaging experience for all users.

## Features

The Pokémon Sleep web app offers a dynamic and interactive experience with three significant features:

1. Users can actively search and filter Pokémon based on criteria like type, abilities, and more, utilizing interactive forms for a user-driven exploration. This feature is at our main page.

2. Users can add and delete captured Pokémon to their collection through a comprehensive form, enabling them to curate and manage their Pokémon collection interactively.

3. The app includes a creative cooking simulator, where users can experiment with virtual dishes by selecting ingredients from their collection, providing an engaging and imaginative way to interact with Snorlax and other Pokémon.

These features collectively make the Pokémon Sleep app an engaging and dynamic platform, allowing users to actively explore, collect, and experiment within the Pokémon world.

## Data Source

The data for this app was originally generated and stored in a custom JSON file created specifically for this project, and I manually uploaded the data to Firebase. As it's a custom dataset, there won't be a need for an external source. All the Pokémon and related information were populated within this JSON file, and the app reads and interacts with this data accordingly. Using this app, players can immerse themselves in the Pokémon world, actively collecting and managing Pokémon, experimenting with in-game items, and experiencing the joy of discovery and creativity. 

While our app may not have direct "business value," it addresses the practical usage and impacts of a system by making the concept of a sleep app more interactive and entertaining for users, ultimately encouraging healthier sleep routines.

## External Resources

[Introduction of Pokémon](https://www.pokemon.com/us/app/pokemon-sleep/)

[Pokémon Sleep Wikipedia](https://en.wikipedia.org/wiki/Pok%C3%A9mon_Sleep)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
