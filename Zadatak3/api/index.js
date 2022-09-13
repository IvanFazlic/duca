import express from "express";
const app = express();
const PORT=3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT,()=>{
    console.log('Example app listening on port 3000!');
})
app.get("/" ,(req, res) => {
    let prviBroj= req.query.prvi;
    let drugiBroj= req.query.drugi;
    let result = parseInt(prviBroj)+parseInt(drugiBroj);
    res.send(result.toString());
})
app.post('/data', function (req, res) {
    let prviBroj = req.body.prvi1;
    let drugiBroj = req.body.drugi1;
    let result = parseInt(prviBroj)-parseInt(drugiBroj);
    res.end(result.toString());
});