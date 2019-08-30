# django-react-forum [![Build Status](https://travis-ci.org/IvanFon/django-react-forum.svg?branch=master)](https://travis-ci.org/IvanFon/django-react-forum)

### [Try a live demo of the app here!](http://3.13.202.170)

A single-page forum app made with Django and React.

This app allows users to register, login, create posts, and leave comments in the forum's message boards.

## Screenshots

| Homepage | Viewing a board |
| --- | --- |
| ![](https://user-images.githubusercontent.com/1174413/63995826-69a32100-cae9-11e9-9c3a-3e778bec35c6.png) | ![](https://user-images.githubusercontent.com/1174413/63995828-69a32100-cae9-11e9-9d4f-0c1154725162.png) |

| Viewing a post (logged out) | Adding a comment |
| --- | --- |
| ![](https://user-images.githubusercontent.com/1174413/63995827-69a32100-cae9-11e9-99c3-3339bb3dfcbd.png) | ![](https://user-images.githubusercontent.com/1174413/63995830-6a3bb780-cae9-11e9-9c32-28ea4a8a1b81.png) |

| Creating a post | Login Page |
| --- | --- |
| ![](https://user-images.githubusercontent.com/1174413/63995829-6a3bb780-cae9-11e9-8523-77d4735b4057.png) | ![](https://user-images.githubusercontent.com/1174413/63997230-6ad64d00-caed-11e9-8410-475801ae04a3.png) |

## Technologies Used

### Backend

- Written in Python 3 with Django
- Automatically tested with Travis CI
- REST API made with Django REST Framework
- Django REST Framework Simple JWT for authentication over REST API
- Django Webpack Loader to serve React client during development

### Frontend

- Written in Javascript/ES6 with React
- Redux for managing app state
- Redux Thunk and Axios for interacting with REST API

## Usage

django-react-forum depends on Python 3 and Node.js.

1. Clone the repo: `git clone https://github.com/IvanFon/django-react-forum.git`
2. `cd django-react-forum`
3. Create virtualenv: `python3 -m venv ./env`
4. `source env/bin/activate`
5. Setup database: `python manage.py migrate`
6. Install backend dependencies: `pip install -r requirements.txt`
7. `cd frontend`
8. Install frontend dependencies: `yarn -D` or `npm install`
9. Start frontend development server: `yarn start` or `npm run start`
10. `cd ../`
11. Start backend server: `python manage.py runserver`
12. Open your web browser and navigate to `localhost:8000`!
