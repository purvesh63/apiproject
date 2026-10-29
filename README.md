# API Project

A simple REST API built with **Node.js** and **Express.js** for managing courses. You can test the endpoints using Postman.

## Features

- Check that the API server is running.
- Get all courses.
- Get a course by ID.
- Add a course.
- Update a course.
- Delete a course.


## Technologies Used

- Node.js
- Express.js
- Nodemon (for development)

## Requirements

Install [Node.js](https://nodejs.org/) and npm before running the project.

## Installation

1. Open a terminal in the project folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Or run it directly:

   ```bash
   node app.js
   ```

The server listens on port **3000**.

Base URL: `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Check that the API is running |
| `GET` | `/courses` | Get all courses |
| `GET` | `/courses/:id` | Get a course by its ID |
| `POST` | `/addcourse` | Add a new course |
| `PUT` | `/change?id=1&coursename=NewName` | Update a course by ID |
| `DELETE` | `/deletecourse?id=1` | Delete a course by ID |

### 1. Check API status

```http
GET http://localhost:3000/
```

### 2. Get all courses

```http
GET http://localhost:3000/courses
```

### 3. Get a course by ID

Replace `1` with the course ID:

```http
GET http://localhost:3000/courses/1
```

### 4. Add a course

In Postman, choose **POST**, use this URL, and select **Body → raw → JSON**:

```http
POST http://localhost:3000/addcourse
```

```json
{
  "coursename": "Data Science"
}
```

### 5. Update a course

In Postman, choose **PUT** and pass the ID and new course name as query parameters:

```http
PUT http://localhost:3000/change?id=1&coursename=AdvancedAI
```

### 6. Delete a course

In Postman, choose **DELETE** and pass the course ID as a query parameter:

```http
DELETE http://localhost:3000/deletecourse?id=1
```

## Default Course Data

The server starts with these courses:

| ID | Course |
|---:|---|
| 1 | AI/ML |
| 2 | Web Development |
| 3 | UI/UX |

## Project Structure

```text
apiproject/
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Testing with Postman

1. Start the server.
2. Open Postman.
3. Enter the base URL and endpoint.
4. Select the HTTP method shown in the endpoint table.
5. For `POST`, send the JSON body shown above.
6. Click **Send** and inspect the JSON response.

## License

This project is currently marked as `ISC` in `package.json`.
