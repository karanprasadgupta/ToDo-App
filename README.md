# ToDo App

![GitHub](https://img.shields.io/github/license/karanprasadgupta/ToDo-App)
![GitHub last commit](https://img.shields.io/github/last-commit/karanprasadgupta/ToDo-App)

This repository contains the source code for a simple ToDo application built using Node.js and Express. The app allows users to create, manage, and track their daily tasks. User support has not been implemented; a common task list/ Database is used to store tasks. However, can create their own custom list by changing URL.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Used](#technologies-used)

## Demo

Check out the live demo of the ToDo App: [https://todo-app-78rm.onrender.com/](https://todo-app-78rm.onrender.com/)

Creating a Custom list by specifying the list name at the end of the URL: [https://todo-app-78rm.onrender.com/Name](https://todo-app-78rm.onrender.com/Name)

## Features

- User-friendly interface for managing tasks
- Create new tasks with ease
- Mark tasks on completion to delete
- Delete unwanted tasks
- Create Custom ToDo lists

## Getting Started
To get a local copy of this project up and running, follow these steps.

### Prerequisites

- Node.js (version 10 or above)
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/karanprasadgupta/ToDo-App.git
   ```
2. Change to the project directory:

   ```shell
   cd ToDo-App
   ```
3. Install the dependencies:

   ```shell
   npm install
   ```
   or
   
    ```shell
   yarn install
   ```
4. Start the server:

   ```shell
   node app.js
   ```
   The app will be available at http://localhost:3000

## Technologies Used
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine
- Express: A minimal and flexible Node.js web application framework
- MongoDB: For persisting tasks in the Database Storage
- EJS: For using HTML markup with plain JavaScript.


> The ToDo App was developed just for learning purposes.
Feel free to customize and enhance the ToDo App according to your needs. Happy task management!
