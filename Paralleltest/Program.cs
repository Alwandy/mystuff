using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paralleltest
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] hosts = new[] {"A","B","C","D","E","F","G","H","I"};


            var stopWatch = Stopwatch.StartNew();
            Console.WriteLine("Series");
            foreach (string host in hosts)
            {
                Console.WriteLine("Looping through host: {0}", host);
                System.Threading.Thread.Sleep(60000);
            }
            Console.WriteLine("foreach loop execution time = {0} seconds\n", stopWatch.Elapsed.TotalSeconds);


           stopWatch = Stopwatch.StartNew();  
           Console.WriteLine("Parallel");
           Parallel.ForEach(hosts, host =>
            {
                Console.WriteLine("Looping through host: {0}", host);
                System.Threading.Thread.Sleep(60000);
            });
            Console.WriteLine("Parallel.ForEach() execution time = {0} seconds", stopWatch.Elapsed.TotalSeconds);
            Console.WriteLine("Test complete. Press any key to exit.");
            Console.ReadKey();
        }
    }
}
