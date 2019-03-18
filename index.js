const express = require('express');
const ata = express();
ata.get("/",(rec,res)=>{
    res.send("Eduardo Godoy Fuso");
});
ata.listen(3000)