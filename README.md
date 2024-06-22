# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Vite+React - used to create interactive and reactive user interfaces (UIs).
Vite is a JS bundler. Vite takes your React JSX code and transforms it into raw HTML, CSS, and JS files that can be run by most browsers. Those files are then hosted and served to end users.


# Installed packages:
npm i express nodemon (nodemon helps to restart the server automatically after every change)
npm i axios react-icons (for sending HTTP reqs and using react icons)
npm i cors (for preventing the CORS policy)
npm i react-router-dom (for implementing SPAs)
npm install react-icons
npm i notistack (for notifying the user upon successful creation, editing and deletion of the book through a notification at the bottom left corner)
npx tailwindcss init -p
npm install -D tailwindcss postcss autoprefixer (for installing the Tailwind libraries)
npm install mongoose

# How to run the project:
1. Login into MongoDB and connect to the server(Book-Store-MERN) using the connection string and paste it in the config.js file:
'mongodb+srv://root:<password>@book-store-mern.opefjox.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store-MERN'

2. Open another new terminal & run the following commands:
$ cd backend
$ npm run dev

3. Open new terminal & run the following commands
$ cd frontend
$ npm run dev 

4. Visit 'http://localhost:5173/' on browser


