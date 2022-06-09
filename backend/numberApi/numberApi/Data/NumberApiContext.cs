using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using numberApi.Data.Models;

namespace numberApi.Data
{
    public class NumberApiContext : DbContext
    {
        public NumberApiContext() : base("NumberApiContext")
        {
        }

        public DbSet<GridResult> GridResults { get; set; }
        public DbSet<RequestForSetup> RequestsForSetup { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}