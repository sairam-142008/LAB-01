# Lab 1 – Node.js and Express Server

## Student Information

| Field               | Details              |
|---------------------|----------------------|
| **Name**            | Sai Ram              |
| **Registration No** | _[Your Reg. Number]_ |
| **Section**         | _[Your Section]_     |
| **Lab**             | Lab 1                |

---

## Project Description

This project demonstrates how to create web servers using two approaches:

1. **Node.js HTTP Server** – A basic server using the built-in `http` module that responds with "Hello".
2. **Express Server** – A server built with the Express framework that includes multiple GET routes and 404 error handling.

---

## Technologies Used

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web application framework for Node.js
- **npm** – Node Package Manager
- **HTTP module** – Built-in Node.js module for creating servers
- **JavaScript** – Programming language

---

## Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd lab-01
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## How to Run

### Run the HTTP Server (Task 1)

```bash
node server.js
```

Open your browser and go to: [http://localhost:3000](http://localhost:3000)

> **Note:** Stop this server (press `Ctrl + C`) before running the Express server, as both use port 3000.

### Run the Express Server (Tasks 2–4)

```bash
node app.js
```

Open your browser and test the routes listed below.

---

## API Endpoints

| Method | Route      | Description                   | Status Code |
|--------|------------|-------------------------------|-------------|
| GET    | `/`        | Welcome message               | 200         |
| GET    | `/about`   | Student info (JSON)           | 200         |
| GET    | `/time`    | Current date and time         | 200         |
| GET    | `/*`       | 404 – Page Not Found          | 404         |

---

## Testing

Test the following URLs in your browser or Postman after running the Express server:

| URL                            | Expected Response                              | Status |
|--------------------------------|------------------------------------------------|--------|
| http://localhost:3000/          | Welcome to Node.js and Express Server          | 200    |
| http://localhost:3000/about     | `{"name":"Sai Ram","section":"CSE"}`           | 200    |
| http://localhost:3000/time      | Current date and time string                   | 200    |
| http://localhost:3000/contact   | 404 - Page Not Found                           | 404    |

---

## Screenshots

> Take screenshots of each route response in the browser or Postman and save them in the `screenshots/` folder.

| Screenshot          | Description                      |
|---------------------|----------------------------------|
| `home.png`          | Response for GET /               |
| `about.png`         | Response for GET /about          |
| `time.png`          | Response for GET /time           |
| `404.png`           | Response for unknown route       |
| `http-server.png`   | Response from HTTP server        |
| `terminal.png`      | Terminal showing server running  |

---

## Problems Faced and Solutions

| Problem                                         | Solution                                              |
|--------------------------------------------------|-------------------------------------------------------|
| Port 3000 already in use                         | Stop the other server using `Ctrl + C` before running |
| `Cannot find module 'express'`                   | Run `npm install` to install dependencies             |
| 404 handler catching all routes                  | Placed 404 handler after all valid route definitions  |

---

## Deployment

**Live URL:** Not Applicable

---

## Folder Structure

```text
lab-01/
│
├── app.js            # Express server with routes and 404 handling
├── server.js         # Node.js HTTP server
├── package.json      # Project metadata and dependencies
├── .gitignore        # Files to exclude from GitHub
├── README.md         # Project documentation
└── screenshots/      # Screenshots of test results
```

---

## Git Commands to Upload to GitHub

```bash
# Initialize a Git repository
git init

# Add all files to staging
git add .

# Commit the files
git commit -m "Lab 1: Node.js and Express Server"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/<your-username>/lab-01.git

# Push to GitHub
git push -u origin main
```

> Replace `<your-username>` with your actual GitHub username.

