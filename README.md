# Users Training Backend
This toy api has four endpoints for performing CRUD operations on a user resource.
A user has the following shape:
```js
{
  // The first name of the user
  firstName: string;
  // The last name of the user
  lastName: string;
  // The job the user has
  jobTitle: string;
  // The user's height in cm
  height: number;
}
```

### How to start the dev server
`npm run start` Will start the server on `localhost:7000`.  You can then send
http requests to it by using `GET http://localhost:7000/users`, etc.

### Endpoints
- `GET /users`
  - returns the list of users saved in the database
- `POST /user`
  - Creates a new user and adds it to the database
  - expects the following to be in the request body:
    ```js
    {
      firstName: string;
      lastName: string;
      jobTitle: string;
      age: number;
    }
    ```
- `PATCH /user/:userId`
  - Edits the user with id `userId`.  It will update the user to have the
    attributes you send in the request body.
  - expects the following to be in the request body:
    ```js
    {
      firstName: string;
      lastName: string;
      jobTitle: string;
      age: number;
    }
    ```
- `DELETE /user/:userId`
  - Deletes a user with id `userId` from the database