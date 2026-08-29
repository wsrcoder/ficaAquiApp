using backend.Entities;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CareFacilityController : ControllerBase
    {
        private readonly ICareFacilityService _careFacilityService;

        public CareFacilityController(ICareFacilityService service)
        {
            _careFacilityService = service;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CareFacility facility)
        {
            try
            {
                var createdFacility = await _careFacilityService.Create(facility);
                return Ok(createdFacility);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

    }
}
