using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Program
{
   public class Person
    {
        public string FirstName {get; set; }
        public string LastName {get; set;}
        public string dob { get; set; }

        /*
         *@params null
         *Get Person Data of the object created  
         */
        public void GetPersonData()
        {
            Console.WriteLine("Your name is {0} {1} and your date of birth is {2}", FirstName, LastName, dob);
        }
    }
}
