using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UKSF.Data;
using UKSF.Models;
using Microsoft.EntityFrameworkCore;
using UKSF.Helpers;

namespace UKSF.Controllers
{
    public class HomeController : BaseController
    {
        /**
         *  Make a constructor for HomeController 
         * 
         **/
        public HomeController(ApplicationDbContext context) : base(context)
        {
        }

        /**
         *  Make methods i.e Index then call the helpers you need for this controller
         * */
        public IActionResult Index()
        {
            MainViewModel model = new MainViewModel(); // Initiate the Main model class
            NewsHelper NewsHelpers = new NewsHelper(); // Initiate helpers 
            model.news = new List<News> (); // Initiate news as a List 
            model.news = NewsHelpers.GetNews(_context); // Save whatever news is inside News function 
            return View(model); // Return view with model
        }

        public IActionResult About()
        {
            ViewData["Message"] = "N/A";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "N/A";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
