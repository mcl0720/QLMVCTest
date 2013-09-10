using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcTest.Controllers
{
    public class ReviewController : Controller
    {
        //
        // GET: /Review/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Survey()
        {
            return View();
        }

        public ActionResult Vote()
        {
            return View();
        }

    }
}
