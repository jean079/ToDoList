using System;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApi.Models
{
    public class User
    {
        public int Id { get; set; }

        [Column(TypeName = "text")] // Use 'text' for PostgreSQL
        public string Username { get; set; }

        [Column(TypeName = "text")] // Use 'text' for PostgreSQL
        public string PasswordHash { get; set; }

        public ICollection<TodoItem> TodoItems { get; set; }
    }
}

