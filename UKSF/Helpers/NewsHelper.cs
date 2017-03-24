using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UKSF.Data;
using UKSF.Models;

namespace UKSF.Helpers
{

    public class NewsHelper
    {
        public NewsHelper() {
        }
        public List<UKSF.Models.News> GetNews(ApplicationDbContext _context) 
        {
            return _context.News.ToList();
        }
    }


}
