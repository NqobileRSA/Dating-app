# MERN Dating App

Welcome to our MERN (MongoDB, Express.js, React.js, Node.js) Dating App! This application provides a platform for users to connect with potential partners based on their interests, preferences, and location.

## Features

- User authentication and authorization
- Profile creation and management
- Matching algorithm based on user preferences
- Real-time chat functionality for communication between users
- Geolocation features for finding matches nearby
- Responsive design for seamless usage on various devices

## Installation

### Clone the repository:

```bash
git clone https://github.com/your-username/mern-dating-app.git
```

### Navigate to the project directory:

```bash
cd mern-dating-app
```

### Install dependencies for both server and client:

```bash
cd server
npm install
cd ../client
npm install
```

## Configuration

### Set up environment variables:

Create a `.env` file in the `server` directory. Add the following environment variables:

```makefile
PORT=5000
MONGODB_URI=<YOUR_MONGODB_URI>
JWT_SECRET=<YOUR_JWT_SECRET>
```

Open `client/src/config.js` and set the `API_BASE_URL` variable to point to your server API URL.

## Usage

### Start the server:

```bash
cd server
npm start
```

### Start the client:

```bash
cd client
npm start
```

Open your browser and navigate to `http://localhost:3000` to use the application.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to see.

## License

This project is licensed under the MIT License.

```

```
