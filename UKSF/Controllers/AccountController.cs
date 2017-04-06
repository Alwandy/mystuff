using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using UKSF.Models;
using UKSF.Models.AccountViewModels;
using UKSF.Services;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace UKSF.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return new ChallengeResult("Auth0", new AuthenticationProperties() { RedirectUri = "/" });
        }

        public async Task Logout()
        {
            await HttpContext.Authentication.SignOutAsync("Auth0", new AuthenticationProperties
            {
                RedirectUri = Url.Action("Index", "Home")
            });
            await HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }
    }
}
