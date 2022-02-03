using System.Data.Entity;

namespace AngularProjVideo2.Models
{
    public class FavContext:DbContext
    {
        string str = "server=LAPTOP-JBV6Q7VM\\SQLEXPRESS;database=MyVideoLibraryProject;Integrated Security=SSPI";
        public FavContext(string str) : base(str)
        {

        }
        public DbSet<Fav> Favs { get; set; }
    }
}
