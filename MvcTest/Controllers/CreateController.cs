using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcTest.Controllers
{
    public class CreateController : Controller
    {
        //
        // GET: /Create/

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

        public ActionResult SurveyMultiOption()
        {
            return PartialView();
        }

        public ActionResult SurveySingleOption()
        {
            return PartialView();
        }

    }
}
