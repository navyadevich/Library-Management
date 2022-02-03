using AngularProjVideo2.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularProjVideo2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoLibraryController : ControllerBase
    {
        static string str = "server=LAPTOP-JBV6Q7VM\\SQLEXPRESS;database=MyVideoLibraryProject;Integrated Security=SSPI";
        private VideoLibraryContext db = new VideoLibraryContext(VideoLibraryController.str);
        
        private FavouritesContext db1 = new FavouritesContext(VideoLibraryController.str);

        // GET: api/<VideoLibraryController>
        [HttpGet]
        public IQueryable<VideoLibrary> GetVideos()
        {
            return db.VideoLibraries;
        }

        // GET api/<VideoLibraryController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<VideoLibraryController>
        [HttpPost]
        public void PostfavVideo(Favourites fav)
        {
           
            db1.Favouritess.Add(fav);
            db.SaveChanges();
        }

        // PUT api/<VideoLibraryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<VideoLibraryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
          

            VideoLibrary vid = db.VideoLibraries.Find(id);
            db.VideoLibraries.Remove(vid);
            db.SaveChanges();
        }
    }
}
