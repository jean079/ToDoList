using System;
using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<TodoItem> TodoItems { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.TodoItems)
                .WithOne(t => t.User)
                .HasForeignKey(t => t.UserId);

            base.OnModelCreating(modelBuilder);
        }
    }
}

