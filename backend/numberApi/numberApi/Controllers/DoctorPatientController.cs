using Microsoft.AspNetCore.Mvc;
using numberApi.Data.Models;
using numberApi.Data;
using numberApi.enums;
using numberApi.Extensions;

namespace numberApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DoctorPatientController : ControllerBase
    {
        private readonly NumberApiContext _context;

        public DoctorPatientController()
        {
            _context = new NumberApiContext();//needs DI
        }

        /// <summary>
        /// Gets GridResults based on the most recent request submitted to the backend
        /// </summary>
        /// <returns>string</returns>
        [HttpGet("/")]
        public ActionResult<List<GridResult>> Get()
        {
            return new ActionResult<List<GridResult>>(_context.GridResults.ToList());
        }

        /// <summary>
        /// Gets GridResults based on the most recent request submitted to the backend
        /// </summary>
        /// <returns>string</returns>
        [HttpGet("/message")]
        public ActionResult<MessageViewModel> GetMessage()
        {
            return new ActionResult<MessageViewModel>(new MessageViewModel()
            {
                Message = _context.RequestsForSetup.ToList().OrderByDescending(x => x.TimeOfRequest).FirstOrDefault().UploadedMessage
            });
        }

        /// <summary>
        /// Set RequestForSetup which is used to calculate gridResults in subsequent calls to 'get'
        /// </summary>
        /// <param name="RequestForSetup">the RequestForSetup that will dictate what is returned on the next get request</param>
        /// <returns>string</returns>
        [HttpPost("/")]
        public ActionResult<List<GridResult>> Post(RequestForSetup requestForSetup)
        {
            //remove all previous records
            _context.GridResults.Select(x => x).ToList().ForEach(x => _context.GridResults.Remove(x));
            _context.SaveChanges();

            var i = 1;
            while (requestForSetup.SampleMaxCount >= i)
            {
                _context.GridResults.Add(new GridResult()
                {
                    Id = Guid.NewGuid(),
                    SampleNumber = i,
                    Score = ScoreUtil.GetScore(i, requestForSetup.DoctorScore, requestForSetup.PatientScore),
                });
                i++;
            }
            requestForSetup.Id = Guid.NewGuid();
            _context.RequestsForSetup.Add(requestForSetup);
            _context.SaveChanges();
            return new ActionResult<List<GridResult>>(_context.GridResults.ToList());
        }
    }
}