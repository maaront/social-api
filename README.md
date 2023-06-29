# Social API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This project is a web application that provides an API that mimics the backend functionality of a social network. It allows users to share their thoughts, react to friends' thoughts, create a friend list, and perform various CRUD operations on users, thoughts, and reactions. The API is built using Express.js for routing, MongoDB as the NoSQL database, and Mongoose as the ODM.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
To run the Social API locally, please follow these steps:
1. Clone the repository: `git clone https://github.com/your-username/social-api.git`
2. Navigate to the project directory: `cd social-api`
3. Install the dependencies: `npm install`
4. Set up your MongoDB database and update the connection details in the `.env` file.
5. Start the server: `npm start`

## Usage
The Social API provides the following main features:
- CRUD operations for users, thoughts, and reactions.
- Fetching and manipulating user data, including thoughts and friends.
- Searching for specific users or thoughts.
- Reacting to thoughts and managing reactions.

To interact with the API, use an API testing tool like Insomnia.

## API Routes
The Social API exposes the following routes:

### Users
- `GET /api/users`: Retrieves all users.
- `GET /api/users/:id`: Retrieves a single user by their ID.
- `POST /api/users`: Creates a new user.
- `PUT /api/users/:id`: Updates a user by their ID.
- `DELETE /api/users/:id`: Deletes a user by their ID.

### Thoughts
- `GET /api/thoughts`: Retrieves all thoughts.
- `GET /api/thoughts/:id`: Retrieves a single thought by its ID.
- `POST /api/thoughts`: Creates a new thought.
- `PUT /api/thoughts/:id`: Updates a thought by its ID.
- `DELETE /api/thoughts/:id`: Deletes a thought by its ID.

### Reactions
- `POST /api/thoughts/:thoughtId/reactions`: Creates a new reaction for a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Deletes a reaction from a thought.

### Friend Management
- `POST /api/users/:userId/friends/:friendId`: Adds a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Removes a friend from a user's friend list.

For more details on how to use these routes and their request/response formats, refer to the API documentation.

## Technologies Used
The Social API is built using the following technologies:
- Express.js
- MongoDB
- Mongoose
- JavaScript

## License
This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for more information.
