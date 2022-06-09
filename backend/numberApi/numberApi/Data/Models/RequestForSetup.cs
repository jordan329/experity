namespace numberApi.Data.Models
{
    public class RequestForSetup
    {
        public Guid Id { get; set; }
        public DateTime TimeOfRequest { get; set; }
        public int SampleMaxCount { get; set; }
        public int PatientScore { get; set; }
        public int DoctorScore { get; set; }
        public string UploadedMessage { get; set; }
    }
}