# Tennis Service Trainer API

![](https://img.shields.io/badge/Academic%20Project%20%E2%80%94%20Advanced%20Interface%20Design-In%20Progress-green.svg)

API (webservices) for the [Tennis Service Trainer](https://github.com/jansensan/tennis-service-trainer) project.

See the [project presentation slides](https://academia.jansensan.net/30853/tennis-service-trainer-wristband-presentation/).

---


## Collaborators

- [Mat JANSON BLANCHET](https://jansensan.net)
- [Pablo MONROY D'CROZ](https://www.linkedin.com/in/pamonroy/)
- [Natasha TYLOSKY](https://www.natashatylosky.com/)

---


## Usage

### Dependencies

Ensure you install these modules globally on your development machine:

- [Node](https://nodejs.org/): This runs a JavaScript server locally which fetches the libraries necessary to build this project.

### Installation

- Open a [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS))/[cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe) window
- Go to the root of this project's directory
- Run `npm install`, which will install the necessary dependencies

### Set the environment variables

For security reasons, the `.env` file at the root of the project is not committed to version control. However, it is necessary to create one for the server to work.

See `.env-sample` for the structure. The address and the and port must match what the Processing prototype and the server need.

Contact the administrators of the repository for any guidance.

### Run the prototype

#### Start the server

- Open a [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS))/[cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe) window
- Go to the root of this project's directory
- Run `npm start`, which will start the local server in the Terminal window

From this point, the console will show information according to the actions taken in the [Processing prototype](https://github.com/jansensan/tennis-service-trainer).

#### Stop the server

- Go to the [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS))/[cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe) window in which the server is running
- Type the following command: `CTRL+C`

---


## Contribution

Read the [contribution guide](./contribution.md).