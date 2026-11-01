# LAB-01 – Node.js and Express Server

A simple Node.js and Express server project demonstrating HTTP server creation, Express routing, and error handling.

## Author

- **Name:** Sai Ram
- **Section:** CSE(GEN)-AI-2B

## Project Structure

```
LAB-01/
│
├── app.js              # Express server with routes and 404 handling
├── server.js           # Basic Node.js HTTP server
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Dependency lock file
├── .gitignore          # Git ignore rules
├── README.md           # Project documentation
│
└── screenshots/        # Output screenshots
    ├── home.png
    ├── about.png
    ├── time.png
    └── 404.png
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sairam-142008/LAB-01.git
   cd LAB-01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Task 1 – Node.js HTTP Server

```bash
node server.js
```

Runs a basic HTTP server using the built-in `http` module on **port 3000**.

### Task 2, 3, 4 – Express Server with Routes

```bash
node app.js
```

Runs an Express server on **port 3000** with the following routes:

## API Endpoints

| Method | Route    | Description                     |
|--------|----------|---------------------------------|
| GET    | `/`      | Returns a welcome message       |
| GET    | `/about` | Returns student info as JSON    |
| GET    | `/time`  | Returns the current date & time |
| *      | `/*`     | Returns 404 – Page Not Found   |

## Screenshots

### 1. Home Page (`/`)
![Home Page](screenshots/home.png)

### 2. About Page (`/about`)
![About Page](screenshots/about.png)

### 3. Current Date and Time (`/time`)
![Time Page](screenshots/time.png)

### 4. 404 Error Page (`/contact`)
![404 Error](screenshots/404.png)

## Dependencies

- [Express](https://expressjs.com/) v5.3.0

## License

ISC
