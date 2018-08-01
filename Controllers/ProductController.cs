using System;
using System.Linq;
using ClientNotifications;
using Microsoft.AspNetCore.Mvc;
using ProductMgmt.Data;
using ProductMgmt.Models;
using static ClientNotifications.Helpers.NotificationHelper;

namespace ProductMgmt.Controllers {
    public class ProductController : BaseController {
        private ApplicationDbContext _context;
        public ProductController (ApplicationDbContext context, IClientNotification clientNotification) : base (clientNotification) {
            _context = context;
        }
        public IActionResult Index () {
            var products = _context.Products.ToList ();
            return View (products);
        }
        public IActionResult Detail (int id) {
            var product = _context.Products.FirstOrDefault (x => x.Id == id);
            return View (product);
        }

        [HttpGet]
        public IActionResult New () {
            ViewBag.IsEditMode = "false";
            return View (new Product ());
        }

        [HttpPost]
        public IActionResult New (Product product, string IsEditMode) {
            if (!ModelState.IsValid)
                return View (product);

            try {
                if (IsEditMode.Equals ("false")) {
                    _context.Products.Add (product); // to save in database
                    _context.SaveChanges (); // to save in database
                } else {
                    _context.Products.Update (product);
                    _context.SaveChanges ();
                }

                Notify ("Product created or updated", NotificationType.success, "");
            } catch (Exception) {
                Notify ("Could not create or update product", NotificationType.error, "");
            }

            return RedirectToAction (nameof (Index));

        }
        public IActionResult Edit (int id) {
            ViewBag.IsEditMode = "true";
            var product = _context.Products.FirstOrDefault (x => x.Id == id);
            return View ("New", product);
        }

        // [HttpPost]
        [HttpGet]
        public IActionResult Delete (int id) {
            try {
                var product = _context.Products.FirstOrDefault (x => x.Id == id);

                _context.Products.Remove (product);
                _context.SaveChanges ();

                return Ok ();
            } catch (Exception) {
                return BadRequest ();
            }

        }
        [HttpGet]
        public IActionResult SayHello(string message)
        {
            
            return Ok(message);
        }
        public IActionResult Calculate (int numberOne,int numberTwo)
        {
            return Ok(numberOne+numberTwo);
        }
        public IActionResult Amount(int quantity, int rate)
        {
            return Ok(quantity*rate);
        }
    }

}