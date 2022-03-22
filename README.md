# Go borrow

### Project

- [캡스톤 프로젝트 계획서](./.github/report.pdf)

## 👨‍👩‍👧‍👦 Members

## 렌즈(Lend Please)

<br>

- 윤준성 [@wnstjd9701](https://github.com/wnstjd9701)
  - Backend(Node.js), Database(Mysql)
- 이성준 [@castlejun-2](https://github.com/castlejun-2)
  - Backend(Node.js), Database(Mysql), Frontend(ejs view engine)
- 최한윤 [@chlgksdbs](https://github.com/chlgksdbs)
  - Backend(Node.js), Database(Mysql)
- 최지윤 [@J1Yun](https://github.com/J1Yun)
  - Backend(Node.js), Database(Mysql)

<br>

## 🔧 Infra Stack

- Frontend: <img src="https://img.shields.io/badge/ejs-yellow?style=plastic&logo=ejs&logoColor=white">, <img src="https://img.shields.io/badge/react-61DAFB?style=plastic&logo=react&logoColor=black">

- Backend: <img src="https://img.shields.io/badge/node.js-339933?style=plastic&logo=node.js&logoColor=white"> , <img src="https://img.shields.io/badge/express-339933?style=plastic&logo=Express&logoColor=black">, <img src="https://img.shields.io/badge/Nginx-339933?style=plastic&logo=NGINX&logoColor=white">, <img src="https://img.shields.io/badge/Apache-339933?style=plastic&logo=apache&logoColor=white">

- Database: <img src="https://img.shields.io/badge/mysql-4479A1?style=plastic&logo=mysql&logoColor=white">, <img src="https://img.shields.io/badge/AWS RDS-FF8C00?style=plastic&logo=amazonAWS&logoColor=black">

- Server: <img src="https://img.shields.io/badge/EC2-FF8C00?style=plastic&logo=amazonAWS&logoColor=black">

<br>

## 📂 Folder Structure

```javascript
📂 server
    📂 config
    ├── 📄 baseResponseStatus.js
    ├── 📄 database.js
    ├── 📄 express.js
    ├── 📄 jwtMiddleware.js
    ├── 📄 response.js
    📂 src
    └── 📂 app
        ├── 📂 User
        |    ├── 📄 userController.js
        |    ├── 📄 userDao.js
        |    ├── 📄 userProvider.js
        |    ├── 📄 userRoute.js
        |    └── 📄 userService.js
        ├── 📂 Product
        |    ├── 📄 productController.js
        |    ├── 📄 productDao.js
        |    ├── 📄 productProvider.js
        |    ├── 📄 productRoute.js
        |    └── 📄 productService.js
    📄 .gitignore
    📄 app.js
    📄 server.js
    📄 package.json
    📄 README.md
```
