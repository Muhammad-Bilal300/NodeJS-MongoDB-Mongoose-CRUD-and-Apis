// const lib = require('./lib')
// const fs = require('fs')
// // import {sum,diff} from './lib.js'

// const t1 = performance.now();
// fs.readFile('file1.txt','utf-8',(err,txt)=>{
//     console.log(txt);
// });
// // console.log(txt);

// console.log(lib.sum(4,5),lib.diff(2,7));

// const t2 = performance.now();

// console.log(t2-t1);

// ---------------------------------------------- //

// const http = require("http");
// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

// const server = http.createServer((req, res) => {
//   console.log("Server has been started");

//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const prd = products.find((p) => p.id === +id);
//     console.log(prd);
//     res.setHeader("Content-Type", "text/html");
//     let modifiedIndex = index
//       .replace("**title**", prd.title)
//       .replace("**price**", prd.price)
//       .replace("**rating**", prd.rating);
//     res.end(modifiedIndex);
//     return;
//   }

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;

//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;

//     case "/product":
//       res.setHeader("Content-Type", "text/html");
//       let modifiedIndex = index
//         .replace("**title**", product.title)
//         .replace("**price**", product.price)
//         .replace("**rating**", product.rating);
//       res.end(modifiedIndex);
//       break;

//     default:
//       res.writeHead(404);
//       res.end();
//   }
// });

// server.listen(5000);

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("<h1>This is Bilal Aarbi</h1>");
//     res.end();
//   })
//   .listen(4500);

// const express = require("express");
// const path = require("path");

// const app = express();
// const publicPath = path.join(__dirname, "views");
// console.log(publicPath);

// app.use(express.static(publicPath));
// app.set("view engine", "ejs");

// app.get("", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Muhammad Bilal",
//     email: "abc@gmail.com",
//     city: "Karachi",
//     skills:['JS','Java','Dart','PHP']
//   };
//   res.render("profile", { user });
// });

// app.listen(5000);

// const express = require("express");
// const app = express();
// const reqFilter = require('./middleware')

// app.use(reqFilter);

// app.get("", (req, res) => {
//   res.send("Welcome to Users Page. You are eligible for voting");
// });
// app.get("/users", reqFilter, (req, res) => {
//   res.send("Welcome to Users Page. You are eligible for voting");
// });
// app.get("/about", reqFilter, (req, res) => {
//   res.send("Welcome to Users Page. You are eligible for voting");
// });
// app.listen(5000);

// const express = require("express");
// const app = express();
// const path = require("path");
// const publicPath = path.join(__dirname, "public");
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "Muhammad Bilal",
//     email: "abc@gmail.com",
//     city: "Karachi",
//     skills: ["JS", "Dart", "Flutter", "NodeJS"],
//   };
//   res.render("profile", { user });
// });

// app.listen(5000, () => {
//   console.log("Server Started");
// });

// const os = require("os");
// // console.log(os.arch());
// console.log(os.freemem() / (1024 * 1024 ));

// const express = require("express");
// const EventEmitter = require("events");
// const app = express();
// const event = new EventEmitter();

// let count = 0;
// event.on("countApi", () => {
//   count++;
//   console.log("Event Called ", count);
// });

// app.get("/", (req, res) => {
//   res.send("Api Called");
//   event.emit("countApi");
// });

// app.listen(5000);

const mysql2 = require('mysql2');
var con = mysql2.createConnection({
  host: "127.0.0.1",
  port: 3306,
  password: "tayitaya420@420",
  user: "root",
  
});

con.connect((err) => {
  if (err) {
    console.log(err);
    console.log("Not Connected");
  } else {
    console.log("Connected");
  }
});
