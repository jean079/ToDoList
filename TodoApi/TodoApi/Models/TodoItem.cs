using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public int Id { get; set; }

        [Column(TypeName = "text")] // Specify 'text' for PostgreSQL
        public string Title { get; set; }

        public bool IsCompleted { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
