# skip-frontend - [![Build Status](https://travis-ci.com/paulosales/skip-frontend.svg?branch=master)](https://travis-ci.com/paulosales/skip-frontend) [![codecov](https://codecov.io/gh/paulosales/skip-frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/paulosales/skip-frontend) ![Netlify](https://img.shields.io/netlify/5f39eeca-8a45-4ef8-b4a3-57fba692db76) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=paulosales_skip-frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=paulosales_skip-frontend)

> A NOT OFFICIAL Skip the Dishes courier signup page.

## Demo app

A demo version of the mocking page is online at https://skipmock.netlify.app.
Or, if you preffer, you can raise a docker container with frontend application with:

```bash
docker run -p 8080:80 prsales/skip-mock-frontend:latest
```

and open the application locally at the http://localhost:8080/

## Install

Clone the repository, go the repository folder and run `yarn start` 🚀

```bash
git clone git@github.com:paulosales/skip-frontend.git
cd skip-the-dishes-courier-mock
yarn install
yarn start
```

## Features implemented

1. Int'l support (english, français, and brazilian portuguese)
2. Responsiveness

## Tech stack

1. ReactJs
2. Redux
3. Typescript
4. Html + CSS (styled components)
5. Travis CI
6. Codecov
