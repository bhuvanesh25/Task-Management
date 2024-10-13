using Microsoft.EntityFrameworkCore;
using Task = TaskManagementApp.Models.Task;

namespace TaskManagementApp.Data
{
  public class TaskContext : DbContext
  {
    public TaskContext(DbContextOptions<TaskContext> options) : base(options) { }
    public DbSet<Task> Tasks { get; set; }
  }

}
