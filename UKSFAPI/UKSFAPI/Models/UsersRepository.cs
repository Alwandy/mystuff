using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data;
using System.Data;
using MySql.Data.MySqlClient;
using UKSFAPI.Methods;
using System.Configuration;
using System.Collections;

namespace UKSFAPI.Models
{
  public class UsersRepository : IUsersRepository
  {
    private List<Users> user = new List<Users>();

    public UsersRepository()
    {

    }

    public Users Add(Users user)
    {
      throw new NotImplementedException();
    }

    public Users Get(string authid)
    {
      DataTable ds = RetrieveUser(authid);
      foreach (DataRow row in ds.Rows)
      {
        user.Add(new Users { Id = row.Field<int>(0), Username = row.Field<string>(1), Email = row.Field<string>(2), authid = row.Field<string>(3) });
      }
      return user.Find(p=> p.authid == authid);
    }



    public void remove(int Id)
    {
      throw new NotImplementedException();
    }

    public bool Update(Users user)
    {
      throw new NotImplementedException();
    }



    //methods

    protected DataTable RetrieveUser(string authid)
    {
      MySqlConnection conn = new MySqlConnection(ConfigurationManager.AppSettings["Connectionstring"]);
      try
      {
        Console.WriteLine("Connecting to MySQL...");
        conn.Open();
        string sqlCmd = "select * from users WHERE authid='" + authid + "'";
        MySqlDataAdapter adr = new MySqlDataAdapter(sqlCmd, conn);
        adr.SelectCommand.CommandType = CommandType.Text;
        DataTable data = new DataTable();
        adr.Fill(data); //opens and closes the DB connection automatically !! (fetches from pool)
        if (data.Rows.Count > 0)
        {
          return data;
        }
        else
        {
          string sqlCmd2 = "INSERT INTO users (authid) VALUES ('" + authid + "')";
          MySqlDataAdapter adrr = new MySqlDataAdapter(sqlCmd2, conn);
          return RetrieveUser(authid);
        }

      }
      catch (Exception ex)
      {
        Console.WriteLine(ex.ToString());
        return null;
      }
      conn.Close();
      Console.WriteLine("Done.");
    }
  }
}