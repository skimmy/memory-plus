# Development Guide

## Setting up environment

### Frontend 
Frontend uses:
* React (with next during development, but will be statically exported)
* MUI Material design react components

```shell
cd frontend
npx create-next-app
npm install --global  @mui/material @emotion/react @emotion/styled @mui/icons-material 
```

After doing that, you will end up with default NextJS project, which has a lot of things you won't need, let's remove them.
* All content in the `Home` component (I leave just an `h1` element)
* All CSS and corresponding includes
* Images in the `public` dir

### Backend 
Backend uses:
* Django
* Django REST framework (we may also need to adjust allowed CORS origin)

```shell
cd backend
python -m venv .venv
source .venv/bin/activate
# Usually appears as suggestion after installing something
pip install --upgrade pip
# We are going to use Django to create REST API
pip install django django-rest-framework django-cors-headers
pip freeze > requirements.txt
# Now create Django project and django app (not needed if you download repo)
django-admin startproject memoryplus
cd memoryplus
django-admin startapp memoryapi
```
