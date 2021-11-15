const express = require("express");
const app = express();
//every single app we build will have these two lines above until end of course.

//when this app is runnign an d lsitenign fro requests over internet, it will use whatever we pass now.
//first argument is path we listen for (opitional) 2nd is if hit, do the following thing
app.use("/static", express.static("public")); //willlg rab a file from parent directory providing that you hit /static end point.

app.listen(5000, () => {
  console.log("listening on port 5000");
}); //2 argumetns. what listens for and a clalback funciton to do if hit (not needed).
// think of SQL dataase. setting up work bench, and had to target port.3306 on mySQL. React is 3000.all bakcend apps is 5000.

//run npm start after going into package.json and adding start in script for the command "node src/server.js"
