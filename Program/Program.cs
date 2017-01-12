using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Program
{
    class Program
    {
        static void Main(string[] args)
        {
            /* 
            * Create a person object through Person class and calling that object person1
            * Then set the person FirstName, LastName and Date of birth (DOB)
            **/
            Person person1 = new Person();
            person1.FirstName = "Julian";
            person1.LastName = "Alwandy";
            person1.dob = "1994/12/05";
            person1.GetPersonData();
            Console.Read();
        }
    }
}
