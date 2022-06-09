using Microsoft.AspNetCore.Mvc;

namespace numberApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DoctorPatientController : ControllerBase
    {


        private readonly ILogger<DoctorPatientController> _logger;

        public DoctorPatientController(ILogger<DoctorPatientController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "")]
        public void Get()
        {
           
        }
    }
}