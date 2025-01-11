# CI-CD

This repository was created for my Continuous Integration & Continuous Deployment (CI-CD) presentation demo.

## Overview
This project demonstrates how to implement a CI-CD pipeline using GitHub Actions. It includes a basic API built with Node.js and Express.js, tested using Jest and Supertest, and deployed to AWS Lightsail.

## Features
- Basic API built with Node.js and Express.js.
- Unit tests using Jest and Supertest.
- Automated CI-CD pipeline setup with GitHub Actions.
- Deployment to AWS Lightsail server.

## Technologies Used
- **Backend**: Node.js & Express.js
- **Testing**: Jest & Supertest
- **CI-CD**: GitHub Actions
- **Server**: AWS Lightsail

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/firatyll/CI-CD.git
cd /CI-CD
```

### Install Dependencies
```bash
npm install
```

### Run the Application
Start the development server:
```bash
npm start
```

The API will be available at `http://localhost:3000`.

### Run Tests
Run all tests using Jest:
```bash
npm test
```

## CI-CD Pipeline
This repository uses GitHub Actions for CI-CD. The pipeline includes the following steps:

1. **Install Dependencies**: Install project dependencies.
3. **Build Application**: Build the application if required.
2. **Run Tests**: Execute all unit tests.
4. **Deploy**: Deploy the application to AWS Lightsail.

### GitHub Actions Workflow
The workflow configuration file is located at `.github/workflows/node.js.yml`. Below is a summary of its structure:

- **Triggers**: 
  - Push events to the `main` branch.
  - Pull requests targeting the `main` branch.
- **Jobs**:
  - `build`: Install dependencies.
  - `test` : Execute all tests
  - `deploy`: Deploy the application to AWS Lightsail using the AWS CLI.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).