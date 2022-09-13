import express from "express";
const app = express();
const PORT=3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT,()=>{
    console.log('Example app listening on port 3000!');
})
app.get("/" ,(req, res) => {
    let c=0;
    let podaci = req.query.prvi;
    let flag=0;
    const arr=["a","e","i","o","u","A","E","I","O","U"]
    for(let i=0;i<podaci.length;++i){
        for(let j=0;j<arr.length;++j){
            if(podaci[i]==arr[j]) flag=1;
        }
        if(flag==1) ++c;
        flag=0;
    }
    res.send(c.toString());
})
app.post('/data', function (req, res) {
    let podaci = req.body.prvi1;
    let result = "";
    let flag=0;
    const arr=["a","e","i","o","u","A","E","I","O","U"]
    for(let i=0;i<podaci.length;++i){
        for(let j=0;j<arr.length;++j){
            if(podaci[i]==arr[j]) flag=1; 
        }
        flag == 1 ? flag=0:result+=podaci[i];
    }
    res.end(result);
});