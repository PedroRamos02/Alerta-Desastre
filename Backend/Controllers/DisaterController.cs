using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DisasterController : ControllerBase
    {
        
        [HttpGet]
        public IActionResult Get()
        {
           
            return Ok("Get all disasters");
        }

      
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
          
            return Ok($"Get disaster with id {id}");
        }

   
        [HttpPost]
        public IActionResult Post([FromBody] Disaster disaster)
        {
            
            return Ok("Create a new disaster");
        }

      
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Disaster disaster)
        {

            return Ok($"Update disaster with id {id}");
        }

   
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
           
            return Ok($"Delete disaster with id {id}");
        }
    }

    public class Disaster
    {
     
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
     
    }
}