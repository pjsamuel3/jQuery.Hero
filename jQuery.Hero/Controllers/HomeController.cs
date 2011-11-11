using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using jQuery.Hero.Models;

namespace jQuery.Hero.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public JsonResult GiveMeSomeJson()
        {
            var json = new
                           {
                               person = new
                                            {
                                                Name = "Pete",
                                                Dob = new DateTime(1983, 1, 1)
                                            }
                           };

            return Json(json, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Echo(string id)
        {
            return View(new Echo
                                    {
                                        Input = id
                                    });
        }
    }
}
