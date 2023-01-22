# Websocket Remote Control

Example of mouse remote contol via Websocket connection, supported commands:

- move mouse
- get mouse position
- draw circle
- draw square
- draw rectangle
- take screenshot

This is a backend only, take frontend from [here](https://github.com/rolling-scopes-school/remote-control).

Tested on Windows 10, Google Chrome 109 (64bit) in VS Code Version: 1.74.3

Task is [here](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/remote-control/assignment.md).

## How to install frontend

Clone/download repo [here](https://github.com/rolling-scopes-school/remote-control) with frontend and install packages

```
npm i
```

## How to run frontend

Run the frontend in production mode

```
npm start
```

## How to install backend

Clone/download repo [here](https://github.com/pini86/remote-control/tree/develop) with backend and install packages

```
npm i
```

## How to run backend

Run the application in production mode

```
npm start
```

By default app use port 8080. You can change port in .env file (before rename it from env.example).

## How to use

Use frontend for testing from [here](https://github.com/rolling-scopes-school/remote-control)

Clone/download it and open http://localhost:8181/ to get user interface.

By default app use port 8080. You can change port in .env file.

## Warning!

Proper functioning is not guaranteed if a part of the figure being drawn is outside the Canvas drawing area or the screen. Works correctly only on the "main" screen.
