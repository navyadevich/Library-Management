using System.Data.Entity;

namespace AngularProjVideo2.Models
{
    public class VideoLibraryContext:DbContext
    {
        string str = "server=LAPTOP-JBV6Q7VM\\SQLEXPRESS;database=MyVideoLibraryProject;Integrated Security=SSPI";
        public VideoLibraryContext(string str) : base(str)
        {

        }
        public DbSet<VideoLibrary> VideoLibraries { get; set; }
    }
}
