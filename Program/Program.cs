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
             * List of random names
             */
            string[] FirstNames = new string[10] { "Julian", "Adam", "Jason", "Daniella", "Daniel", "Jasmine", "Jessica", "Ellen", "John", "Dunja" };
            string[] LastNames = new string[3] { "O'Sullivan", "Alwandy", "Doe" };
            /* 
             * Create a person object through Person class and calling that object person1
             * Then set the person FirstName, LastName and Date of birth (DOB)
            **/
            Person[] person = new Person[10];
            for (int i = 0; i < 10; i++)
            {
                person[i] = new Person();
            }
            //Random class
            Random rnd = new Random();
            //Lets generate amount person(s) that can be created in list.
            for(int i = 0; i < person.Length; i++) { 
            person[i].FirstName = FirstNames[rnd.Next(0,9)];
            person[i].LastName = LastNames[rnd.Next(0, 2)];
            person[i].dob = "Unknown";
            person[i].DepartmentId = rnd.Next(0, 2);
            }
                /*
                 * Create Department object - Then set that array department has 3 lists (start with 0)
                 */
                Departments[] department = new Departments[3];

            for (int i = 0; i < 3; i++)
            {
                department[i] = new Departments();
            }
            //Department 0 
            department[0].DepartmentId = 0;
            department[0].DepartmentBuilding = "Building 1";
            department[0].DepartmentName = "HR";

            //Department 1
            department[1].DepartmentId = 1;
            department[1].DepartmentBuilding = "Building 2";
            department[1].DepartmentName = "Service Engineers";

            //Department 2
            department[2].DepartmentId = 2;
            department[2].DepartmentBuilding = "Building 2";
            department[2].DepartmentName = "Management";

            //Lets print them out
            for (int i = 0; i < person.Length; i++)
            {
                Console.WriteLine("Person fullname: {0} {1} \n DOB: {2} \n Belongs to department: {3} \n \n", person[i].FirstName, person[i].LastName, person[i].dob, department[person[i].DepartmentId].DepartmentName);
            }

            //Prevent console exiting
            Console.WriteLine("Press a key to exit");
            Console.Read();
        }
    }
}
