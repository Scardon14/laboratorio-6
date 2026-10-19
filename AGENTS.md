# AGENTS.md

## Project overview
This repository is a small JavaScript assessment project for interacting with a JSON server through `fetch`. It uses ES modules (`"type": "module"`) and is organized into separate task files. The assignment requirements live in [README.md](README.md).

## Working conventions
- Do not modify [index.js](index.js); it is the provided task runner and should remain as the entrypoint for the lab.
- Implement the required logic in the task files only:
  - [task1.js](task1.js): `getServerURL()`
  - [task2.js](task2.js): `listUsers()`
  - [task3.js](task3.js): `addUser(first_name, last_name, email)`
  - [task4.js](task4.js): `delUser(id)`
- Keep exported function names and signatures aligned with the assessment instructions.
- Use the server URL returned by `getServerURL()` when making `fetch` requests.
- The app is expected to work with a local JSON server that exposes user data under `/users`.

## Validation
- Run each task file directly with Node, for example:
  - `node task1.js`
  - `node task2.js`
  - `node task3.js`
  - `node task4.js`
- There is no formal test suite configured in [package.json](package.json); the assessment is exercise-driven and file-based.

## Expectations
- Keep changes focused and minimal.
- Follow the project’s existing structure and avoid introducing extra frameworks or tooling.
- If unsure about behavior, confirm the requirement in [README.md](README.md) before changing logic.
