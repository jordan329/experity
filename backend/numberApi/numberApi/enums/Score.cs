using System.ComponentModel;

namespace numberApi.enums
{
    public enum Score
    {
        [Description("None")]
        None,

        [Description("Doctor")]
        Doctor,

        [Description("Patient")]
        Patient,

        [Description("Both")]
        Both,
    }
}
