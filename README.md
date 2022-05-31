# <img src="https://user-images.githubusercontent.com/72984407/159912372-e92f18a0-8867-4ba8-9c95-352084d74855.png" width="30" height="30"/> Go borrow

### Project

- [캡스톤 프로젝트 계획서](./.github/report.pdf)

- [캡스톤 1차 발표](./.github/1_ppt)

- [캡스톤 2차 발표](./.github/2_ppt)

## 👨‍👩‍👧‍👦 Members

### <img src="https://user-images.githubusercontent.com/72984407/159912785-9ab36479-a795-493f-b2c3-2fb638c76f7b.png" width="30" height="30"/> &nbsp; 렌즈(Lend Please)

- 윤준성 [@wnstjd9701](https://github.com/wnstjd9701)
- 이성준 [@castlejun-2](https://github.com/castlejun-2)
- 최한윤 [@chlgksdbs](https://github.com/chlgksdbs)
- 최지윤 [@J1Yun](https://github.com/J1Yun)

<br>

## 🔧 Infra Stack

- Frontend: <img src="https://img.shields.io/badge/react-61DAFB?style=plastic&logo=react&logoColor=black">

- Backend: <img src="https://img.shields.io/badge/node.js-339933?style=plastic&logo=node.js&logoColor=white"> , <img src="https://img.shields.io/badge/express-339933?style=plastic&logo=Express&logoColor=black">, <img src="https://img.shields.io/badge/Nginx-339933?style=plastic&logo=NGINX&logoColor=white">, <img src="https://img.shields.io/badge/Apache-339933?style=plastic&logo=apache&logoColor=white">

- Database: <img src="https://img.shields.io/badge/mysql-4479A1?style=plastic&logo=mysql&logoColor=white">, <img src="https://img.shields.io/badge/AWS RDS-FF8C00?style=plastic&logo=amazonAWS&logoColor=black">

- Server: <img src="https://img.shields.io/badge/EC2-FF8C00?style=plastic&logo=amazonAWS&logoColor=black">

<br>

## 📂 Folder Structure

```javascript
📂 client
    📂 public
    ├── 📄 index.html
    ├── 📄 manifest.json
    ├── 📄 robots.txt
    📂 src
    └── 📂 _actions
    |    ├── 📄 action_type.js
    |    ├── 📄 user_action.js
    └── 📂 _reducers
    |    ├── 📄 index.js
    |    ├── 📄 user_reducer.js
    └── 📂 components
         └── 📂 views
         |    ├── 📂 Footer
         |    |    ├── 📄 Footer.js
         |    ├── 📂 Header
         |    |    ├── 📄 Header.js
         |    └── 📂 LandingPage
         |    |    ├── 📄 LandingPage.js
         |    ├── 📂 LoginPage
         |    |    ├── 📄 LoginLandingPage.js
         |    |    ├── 📄 LoginPage.js
         |    |    ├── 📄 RegisterPage.js
         |    ├── 📂 RegisterPage
         |    |    ├── 📄 OrgRegisterPage.js
         |    |    ├── 📄 RegisterLandingPage.js
         |    |    ├── 📄 UserRegisterPage.js
         └── 📂 lib
         |    ├── 📄 refreshToken.js
    📄 App.css
    📄 App.js
    📄 index.css
    📄 index.js
    📄 logo.svg
    📄 reportWebVitals.js
    📄 .gitignore
    📄 package-lock.json
    📄 package.json

📂 server
    📂 config
    ├── 📄 baseResponseStatus.js
    ├── 📄 database.js
    ├── 📄 express.js
    ├── 📄 jwtAuth.js
    ├── 📄 jwtMiddleware.js
    ├── 📄 response.js
    📂 src
    └── 📂 app
    |   ├── 📂 User
    |   |    ├── 📄 userController.js
    |   |    ├── 📄 userDao.js
    |   |    ├── 📄 userProvider.js
    |   |    ├── 📄 userRoute.js
    |   |    └── 📄 userService.js
    |   ├── 📂 Product
    |   |    ├── 📄 productController.js
    |   |    ├── 📄 productDao.js
    |   |    ├── 📄 productProvider.js
    |   |    ├── 📄 productRoute.js
    |   |    └── 📄 productService.js
    └── 📂 auth
    |    ├── 📄 authRoute.js
    📄 .gitignore
    📄 app.js
    📄 server.js
    📄 package.json
    📄 package-lock.json
    📄 README.md
```

## 💻 How to Run ?

Frontend & Backend

```
$ npm run dev
```

Frontend

```
$ cd client
$ npm start
```

Backend

```
$ cd server
$ nodemon app.js
```
