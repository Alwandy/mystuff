using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UKSF.Data;

namespace UKSF.Controllers
{
    public abstract class BaseController : Controller
    {
        /**
         *  Set base controller to make _context global
         * Make other controllers utilize Basecontroller i.e HomeController : BaseController
         * */
        protected ApplicationDbContext _context { get; set; }
        public BaseController(ApplicationDbContext context)
        {
            _context = context;
        }
    }
}