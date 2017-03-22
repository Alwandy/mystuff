using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UKSF.Data;
using UKSF.Models;
using Microsoft.EntityFrameworkCore;

namespace UKSF.Controllers
{
    public class HomeController : Controller
    {

        /** 
         *  CREATE CONNECTION TOWARDS DATABASE
         * 
         * */
        private readonly ApplicationDbContext _context;
        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }

        /** 
         * Method @GetNews
         *  Return List @News.Title etc
         * */
        public List<UKSF.Models.News> GetNews()
        {
            return _context.News.ToList();
        }

        /*
         * Method if visits example.com/ then view index.html 
         * VIEW is HOME folder 
         **/
        public IActionResult Index()
        {
            MainViewModel model = new MainViewModel(); // Initiate the Main model class
            model.news = new List<News>(); // Initiate news as a List 
            model.news = GetNews(); // Save whatever news is inside News function 
            return View(model); // Return whole model
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
