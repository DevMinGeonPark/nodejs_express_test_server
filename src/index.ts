import express from "express";

const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static(path.join('public')));

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname+'/index.html')
})

app.listen(PORT, () => {
    console.log('connected 3000 port');
});

