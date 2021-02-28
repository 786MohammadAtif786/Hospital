const express = require('express');
const app =express();
const path  = require('path');
app.use(express.static(path.join(__dirname)))
app.get('/',(req,res)=>{
res
.status(200)
.sendFile(path.join(__dirname,"index.html"));
})
app.listen(3000,()=>{
    console.log('done');
})