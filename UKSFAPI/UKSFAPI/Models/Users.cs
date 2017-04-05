using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UKSFAPI.Models
{
  public class Users
  {
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string authid { get; set; }
  }
}