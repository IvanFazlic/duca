using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using faktura.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace mojProizvod.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class APIController : Controller
    {
        static List<Proizvod> proizvodi = new List<Proizvod>()
            {
             new Proizvod {  naziv = "random", id = 0 ,cena=300},
             new Proizvod {  naziv = "random", id = 1 ,cena=300},
             new Proizvod {  naziv = "random", id = 2 ,cena=300},
             new Proizvod { naziv = "random", id = 3 ,cena=300},
             new Proizvod {  naziv = "random", id = 4,cena=300 }
           };
        //ready
        [HttpGet("vratiSveProizvode")]
        public IActionResult SviProizvodi()
        {
            var sviProizvodi = proizvodi.OrderBy(Proizvod => Proizvod.id);
            return Ok(sviProizvodi);
        }
        
        
        [HttpPost("dodajProizvod")]
        public IActionResult postovanje([FromForm] string naziv, [FromForm] int cena)
        {
            var id = proizvodi.OrderByDescending(u => u.id).FirstOrDefault();
            var idProizvoda = 0;
            idProizvoda=id.id+1;
            Proizvod proizvod = new Proizvod();
            proizvod.naziv = naziv;
            proizvod.cena = cena;
            proizvod.id = idProizvoda;
            proizvodi.Add(proizvod);
            return Ok(proizvod);
        }
        //ready
        [HttpPost("odbirisiProizvod")]
        public IActionResult izmeniPreduzece([FromForm] int id)
        {
            var itemToRemove = proizvodi.Single(x => x.id == id);
            proizvodi.Remove(itemToRemove);
            return Ok(itemToRemove);
        }
    }
}

