import express from "express";
const app = express();
const PORT=3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT,()=>{
    console.log('Example app listening on port 3000!');
})
app.get("/sviProizvodi" ,(req, res) => {
    
    res.send();
})
app.post('/dodajProizvod', (req, res) => {
    req.body.nesto 
    nesto : vrednostNesto
    res.send();
});
app.delete('/obrisiProizvod', (req, res) =>{
    res.send();
});