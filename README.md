# quickpizza-performance-tests

## Build Status

| Service        | Status                                                                                                                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GitHub**     | [![GitHub Workflow Status](https://github.com/BrandonNaidoo/quickpizza-performance-tests/actions/workflows/k6-tests.yml/badge.svg)](https://github.com/BrandonNaidoo/quickpizza-performance-tests/actions/workflows/k6-tests.yml)

---

## Project Overview


This repository contains performance tests for the [QuickPizza API](https://quickpizza.grafana.com/), implemented using [k6](https://k6.io/). The tests demonstrate:

The test suite is designed with modularity and maintainability in mind, leveraging TypeScript for type safety and a clean project structure separating configuration, test scenarios, models, and utility classes. Workloads and scenarios are configurable via environment variables, allowing flexible execution in local and CI environments.

---

## Getting Started
Follow these steps to set up and run the QuickPizza API performance tests locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [k6](https://k6.io/) (can be installed via npm or your OS package manager)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/randonNaidoo/quickpizza-performance-tests.git
   cd quickpizza-performance-tests
   ```
1. Install npm dependencies:
   ```bash
   npm install
   ```
1. Install k6:
   ```bash
   npm install -g k6
   ```

---

## 🚀 Running Tests

Use npm scripts to run tests with different scenarios:

- Smoke test:
   ```bash
   npm run testSmoke
   ```
- Average load test:
   ```bash
   npm run testAverage
   ```

- Spike load test:
   ```bash
   npm run testSpike
   ```

---

## 🧩 Project Structure

## Project Structure

- `.github/workflows/` — GitHub Actions workflows for running performance tests
- `k6/`
  - `config/` — Environment settings, workloads, scenarios, thresholds, and API paths
  - `framework/` — HTTP client, login helper, and reusable test utilities
  - `models/` — TypeScript interfaces for request and response data models
  - `builders/` — Payload builders for requests, e.g., pizza request builder
  - `tests/` — Test scripts for individual endpoints and combined test runner
  - `package.json` — npm scripts and dependencies
  - `tsconfig.json` — TypeScript configuration
- `LICENSE.md` — License information for the project
- `README.md` — Project documentation and setup instructions

---

## ⚙️ CI/CD

 **GitHub Actions** is configured to run K6 performance tests on demand via workflow dispatch.
- The workflow supports running different load scenarios: smoke, average, and spike.
- Tests run in a clean Ubuntu environment with Node.js and K6 installed automatically

---

## 🤝 Contributing

At this time, this project is not open to external contributions.

Please feel free to fork the repository for personal use or experimentation, but I am not currently accepting pull requests or feature suggestions.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Thanks to [Grafana Labs](https://grafana.com/) for providing a public Api for testing.