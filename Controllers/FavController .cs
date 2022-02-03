using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AngularProjVideo2.Models;
using System.Data;
using System.Data.SqlClient;


namespace AngularProjVideo2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FavController : ControllerBase
    {
        static string str = "server=LAPTOP-JBV6Q7VM\\SQLEXPRESS;database=MyVideoLibraryProject;Integrated Security=SSPI";
        private FavouritesContext db = new FavouritesContext(FavController.str);

        [HttpGet("{id:regex(^[[a-zA-Z]])}")]

        public List<Fav> Get([FromRoute] string id)
        {
            SqlConnection con = null;
            List<Fav> inv = new List<Fav>();

            try
            {
                string connectionString = "server=LAPTOP-JBV6Q7VM\\SQLEXPRESS;database=MyVideoLibraryProject;Integrated Security=SSPI";
                con = new SqlConnection(connectionString);

                SqlCommand cmd = new SqlCommand("select * from Favourites join Videos on Videos.iVideoId = Favourites.iVideoId join AspNetUsers on favourites.id = AspNetUsers.id where AspNetUsers.username = @username", con);
                {
                    SqlParameter parameter = new SqlParameter
                    {
                        ParameterName = "@username",
                        Value = id,
                        SqlDbType = System.Data.SqlDbType.Char,
                        Size = 100
                    };
                    cmd.Parameters.Add(parameter);
                }
                con.Open();
                SqlDataReader sqr = cmd.ExecuteReader();

                while (sqr.Read())
                {
                    inv.Add(new Fav
                    {
                        id = sqr["id"].ToString(),
                        iVideoId = sqr["iVideoId"].ToString(),
                        vCategory = sqr["vCategory"].ToString(),
                        vCreator = sqr["vCreator"].ToString(),
                        vLanguage = sqr["vLanguage"].ToString(),
                        vTitle = sqr["vTitle"].ToString(),
                        vUrl = sqr["vUrl"].ToString(),
                    }
                    );
                }

            }


            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                con.Close();
            }
            return inv;

        }
        [HttpPost]
        public void PostfavVideo(Favourites fav)
        {

            db.Favouritess.Add(fav);
            db.SaveChanges();
        }

        [HttpDelete("{id}/{iVideoId}")]
        public IQueryable<Favourites> Deletefavourites(string id,int iVideoId)
        {
            Favourites favr = db.Favouritess.Find(id, iVideoId);
            if(favr== null)
            {
                return(IQueryable<Favourites>)NotFound();
            }
            db.Favouritess.Remove(favr);
            db.SaveChanges();
            return db.Favouritess.Where(v => v.id == id);
        }

       

    }
}

