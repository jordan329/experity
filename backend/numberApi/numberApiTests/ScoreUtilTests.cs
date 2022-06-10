using numberApi.Data.Models;
using numberApi;
using numberApi.enums;

namespace numberApiTests
{
    public class ScoreUtilTests
    {
        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        [InlineData(4)]
        [InlineData(5)]
        [InlineData(6)]
        [InlineData(7)]
        [InlineData(8)]
        public void GetScore_Test(int input)
        {

            var doctorScore = 2;
            var patientScore = 3;

            var result = ScoreUtil.GetScore(input, doctorScore, patientScore);
            switch (input)
            {
                case 1:
                    Assert.Equal(Score.None, result);
                    break;
                case 2:
                    Assert.Equal(Score.Doctor, result);
                    break;
                case 3:
                    Assert.Equal(Score.Patient, result);
                    break;
                case 4:
                    Assert.Equal(Score.Doctor, result);
                    break;
                case 5:
                    Assert.Equal(Score.None, result);
                    break;
                case 6:
                    Assert.Equal(Score.Both, result);
                    break;
                case 7:
                    Assert.Equal(Score.None, result);
                    break;
                case 8:
                    Assert.Equal(Score.Doctor, result);
                    break;
            }
        }
    }
}