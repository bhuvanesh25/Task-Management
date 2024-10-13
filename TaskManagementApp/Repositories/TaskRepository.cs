using TaskManagementApp.Data;
using TaskManagementApp.Interfaces;

namespace TaskManagementApp.Repositories
{
  public class TaskRepository : Repository<Models.Task>, ITaskRepository
  {
    public TaskRepository(TaskContext context) : base(context) { }
  }

}
