using numberApi.enums;

namespace numberApi.Data.Models
{
    public class GridResult
    {
        public Guid Id { get; set; }
        public int SampleNumber { get; set; }
        public Score Score { get; set; }
    }
}