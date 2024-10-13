using Microsoft.AspNetCore.Mvc;
using TaskManagementApp.Interfaces;

namespace TaskManagementApp.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class TaskController : ControllerBase
  {
    private readonly ITaskRepository _taskRepository;

    public TaskController(ITaskRepository taskRepository)
    {
      _taskRepository = taskRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTasks()
    {
      var tasks = await _taskRepository.GetAllAsync();
      return Ok(tasks);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTaskById(int id)
    {
      var task = await _taskRepository.GetByIdAsync(id);
      if (task == null)
        return NotFound();
      return Ok(task);
    }

    [HttpPost]
    public async Task<IActionResult> CreateTask(Models.Task task)
    {
      await _taskRepository.AddAsync(task);
      return CreatedAtAction(nameof(GetTaskById), new { id = task.Id }, task);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(int id, Models. Task task)
    {
      if (id != task.Id)
        return BadRequest();
      await _taskRepository.UpdateAsync(task);
      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
      await _taskRepository.DeleteAsync(id);
      return NoContent();
    }
  }

}
