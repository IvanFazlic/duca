import express from "express";
const app = express();
const PORT=3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT,()=>{
    console.log('Example app listening on port 3000!');
})
app.get("/" ,(req, res) => {
    let podaci = req.query.prvi;
    let arr=podaci.split(" ")
    let c=0;
    console.log(arr)
    for(let i=0;i<arr.length;++i){
        if(arr[i].length%2==0 && arr[i].length!=0) ++c;
    }
    res.send(c.toString());
})
app.post('/data', function (req, res) {
    let podaci = req.body.prvi1;
    let arr=podaci.split(" ")
    let result= "";
    console.log(arr)
    for(let i=0;i<arr.length;++i){
        if(arr[i].length%2==0 && arr[i].length!=0) result+=arr[i] + " ";
    }
    res.send(result.toString());
});