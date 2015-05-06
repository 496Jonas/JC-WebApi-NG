using JC.Data;
using JC.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JC.Repository
{
    public class ProductRepository
    {
        private JcDbContext db = new JcDbContext();

        public Product Create()
        {
            Product product = new Product
            {
                ReleaseDate = DateTime.Now
            };
            return product;
        }

        public List<Product> Retrieve()
        {
            var products = db.Products.ToList();
            return products;
        }

        public Product Save(Product product)
        {
            var products = db.Products.Where(p => p.ProductId == product.ProductId).FirstOrDefault();
            if (products == null)
            {
                db.Products.Add(product);
            }
            else
            {
                db.Entry(product).State = EntityState.Modified;
            }
            db.SaveChanges();
            return product;
        }
    }
}
