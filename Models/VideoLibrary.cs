using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularProjVideo2.Models
{
    [Table("Videos")]
    public class VideoLibrary
    {
        [Key]
        public int iVideoId { get; set; }
        public string vTitle { get; set; }
        public string vUrl { get; set; }
        public string vCategory { get; set; }
        public string vCreator { get; set; }
        public string vLanguage { get; set; }
    }
}
