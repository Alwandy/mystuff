using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UKSF.Data;
using UKSF.Models;

namespace UKSF.Helpers
{
    public static class DBInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();
            if (context.News.Any())
            {
                return;   // DB has been seeded
            }
        }
    }
}
