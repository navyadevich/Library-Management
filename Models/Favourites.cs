using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularProjVideo2.Models
{
    [Table("Favourites")]
    public class Favourites
    {
        [Key]
        [Column(Order =1)]
        public string id { get; set; }

        [Key]
        [Column(Order = 2)]
        public int iVideoId { get; set; }
    }
}
