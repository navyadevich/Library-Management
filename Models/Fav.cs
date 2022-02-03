using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularProjVideo2.Models
{
    [Table("Favourites")]
    public class Fav
    {
        [Key]
        [Column(Order = 1)]
        public string? id { get; set; }

        [Key]
        [Column(Order = 2)]
        public string? iVideoId { get; set; }

        [Column(Order = 3)]
        public string? vTitle { get; set; }

        [Column(Order = 4)]
        public string vUrl { get; set; }
        [Column(Order = 5)]
        public string vCategory { get; set; }
        [Column(Order = 6)]
        public string vCreator { get; set; }
        [Column(Order = 7)]
        public string vLanguage { get; set; }
    }
}

