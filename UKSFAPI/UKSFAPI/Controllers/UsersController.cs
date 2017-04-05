using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UKSFAPI.Models;


namespace UKSFAPI.Controllers
{
  public class UsersController : ApiController
  {
    static readonly IUsersRepository repository = new UsersRepository();
    public Users GetUser(string authid)
    {
      Users user = repository.Get(authid);
      return user;
    }
  }
}
