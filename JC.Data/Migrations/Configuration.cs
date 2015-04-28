namespace JC.Data.Migrations
{
    using JC.Model;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<JC.Data.JcDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(JC.Data.JcDbContext context)
        {
            context.Products.AddOrUpdate
                (
                    new Product 
                    { 
                        Description = "Banana with green topping",
                        Price = 7.90M,
                        ProductCode = "BAN-1",
                        ProductId = 1,
                        ProductName = "Banana",
                        ReleaseDate = DateTime.Now
                    },
                    new Product 
                    { 
                        Description = "Apple with worms",
                        Price = 0.90M,
                        ProductCode = "APP-1",
                        ProductId = 1,
                        ProductName = "Apple",
                        ReleaseDate = DateTime.Now
                    },
                    new Product 
                    { 
                        Description = "Pear with pinaple tase",
                        Price = 790.90M,
                        ProductCode = "PEA-1",
                        ProductId = 1,
                        ProductName = "Pear",
                        ReleaseDate = DateTime.Now
                    },
                    new Product 
                    { 
                        Description = "Coffe with milk",
                        Price = 7.90M,
                        ProductCode = "COM-1",
                        ProductId = 1,
                        ProductName = "Caffe latte",
                        ReleaseDate = DateTime.Now
                    },
                    new Product 
                    { 
                        Description = "Tea with sugar",
                        Price = 7.90M,
                        ProductCode = "TES-1",
                        ProductId = 1,
                        ProductName = "Tea",
                        ReleaseDate = DateTime.Now
                    }
                );
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
