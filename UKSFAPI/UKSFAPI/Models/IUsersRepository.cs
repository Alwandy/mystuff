using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UKSFAPI.Methods;

namespace UKSFAPI.Models
{
  public interface IUsersRepository
  {
    Users Get(string authid);
    Users Add(Users user);
    void remove(int Id);
    bool Update(Users user);
  }
}
