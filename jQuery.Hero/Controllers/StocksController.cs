using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using jQuery.Hero.Models;

namespace jQuery.Hero.Controllers
{
    public class StocksController : Controller
    {
        //
        // GET: /Stock/

        public ActionResult Index()
        {
            var stocksTable = new StocksTable
                                  {
                                      Stocks = new List<Stocks>
                                                  {
                                                     new Stocks{ Code = "STB", Price = 1000000.00}
                                                  }
                                  };

            for (int i = 0; i < 20; i++)
            {
                stocksTable.Stocks.Add(new Stocks { Code = "Name" + i , Price = i });
            }
            


            return View(stocksTable);
        }

    }
}
