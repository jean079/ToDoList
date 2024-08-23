using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore.PostgreSQL;

namespace TodoApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<TodoItem> TodoItems { get; set; }
    
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            Users = Set<User>();
            TodoItems = Set<TodoItem>();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Host=localhost;Database=TodoList;Username=docker;Password=docker");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the User entity
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Username).HasColumnType("text"); // Use 'text' for PostgreSQL
                entity.Property(e => e.PasswordHash).HasColumnType("text"); // Use 'text' for PostgreSQL

                // Define the relationship between User and TodoItems
                entity.HasMany(u => u.TodoItems)
                      .WithOne(t => t.User)
                      .HasForeignKey(t => t.UserId);
            });

            base.OnModelCreating(modelBuilder);
        }

    }
}
