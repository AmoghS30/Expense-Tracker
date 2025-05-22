Install the required packages:

```
npm install
```

Create a `.env` file in the root of the `backend` directory and add the following environment variables:

```
DATABASE = <your MongoDB connection URI>
PORT = <the port number you want the server to run on>
JWT = <key to generate the JSON web token>
```

Finally, start the server:

```
npm run dev
```

The server should now be running on the port you specified in the `.env` file.

## API Endpoints :space_invader:

This backend provides the following API endpoints:

### Categories :speech_balloon:

- `GET /api/categories`: Returns a list of all categories in the database.
- `POST /api/create/:userId`: Adds a new category to the database. Requires a userId parameter in the URL.
- `DELETE /api/:categoryId/`: Deletes a category with the specified ID. Requires a categoryId parameter in the URL.
- `GET /api/categories/:categoryId`: Returns a single category with the specified ID. Requires a categoryId parameter in the URL.

### Video Games :speech_balloon:

- `GET /api/videogames`: Returns a list of all video games in the database.
- `POST /api/videogames/create`: Adds a new video game to the database.
- `GET /api/videogames/photo/:videogameId`: Returns the photo for a single video game with the specified ID. Requires a videogameId parameter in the URL.
- `GET /api/videogames/:videogameId`: Returns a single video game with the specified ID. Requires a videogameId parameter in the URL.
- `DELETE /api/videogames/:videogameId`: Deletes a video game with the specified ID. Requires a videogameId parameter in the URL.

### Users :speech_balloon:

- `POST /api/signup`: Creates a new user account.
- `POST /api/signin`: Authenticates a user and generates a JSON Web Token (JWT).
- `POST /api/signout`: Invalidates the user's JWT and logs them out.

## Bugs :robot:

If you find any bug, please, let me know.
