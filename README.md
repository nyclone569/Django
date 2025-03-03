## How to Run the Website Locally

### Requirements:
You must install [Python](https://www.python.org/downloads/) and [Node.js](https://nodejs.org/en/download).

After installing Python and Node.js, if you can't run `python` or `npm` in the terminal, it means your computer hasn't added the path to the environment variables. Refer to this guide for assistance (also applicable for Node.js): [How to add to the PYTHONPATH in Windows](https://stackoverflow.com/questions/3701646/how-to-add-to-the-pythonpath-in-windows-so-it-finds-my-modules-packages).

### Installation Steps:
#### 1. Open a terminal in VS Code and follow these steps:

#### 2. Clone the repository:
```bash
git clone https://github.com/nyclone569/Django.git
```

#### 3. Navigate into the project directory:
```bash
cd Django
```

#### 4. Apply migrations:
```bash
python manage.py migrate
```

#### 5. Run the server:
```bash
python manage.py runserver
```
You can access the Django REST API at the following link: [http://127.0.0.1:8000/api/students/](http://127.0.0.1:8000/api/students/). Also you can access the admin site at [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin), to create an admin user, run the following command in terminal:
```bash
python manage.py createsuperuser
```

#### 6. Open a new terminal and navigate into the web directory:
```bash
cd student-management
```

#### 7. Install dependencies using npm or Yarn:
```bash
npm install
# OR
yarn install
```

#### 8. Run the development server:
```bash
npm start
# OR
yarn dev
```

