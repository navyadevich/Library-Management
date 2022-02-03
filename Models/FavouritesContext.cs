using System.Data.Entity;

namespace AngularProjVideo2.Models
{
    public class FavouritesContext:DbContext
    {
        string str = "server=LAPTOP-JBV6Q7VM\\SQLEXPRESS;database=MyVideoLibraryProject;Integrated Security=SSPI";
        public FavouritesContext(string str) : base(str)
        {

        }
        public DbSet<Favourites> Favouritess { get; set; }
    }
}
