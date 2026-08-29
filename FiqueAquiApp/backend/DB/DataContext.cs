using backend.Entities;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace backend.DB
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User>  Users { get; set; } 
        public DbSet<CareFacility> CareFacilities { get; set; }
    }
}
