using numberApi.Data.Models;
using numberApi.enums;

namespace numberApi
{
    public static class ScoreUtil
    {
        public static Score GetScore(int i, int doctor, int patient)
        {
            var patientDenominator = patient;
            var doctorDenominator = doctor;
            var isPatient = false;
            var isDoctor = false;

            if (i % patientDenominator == 0)
            {
                isPatient = true;
            }

            if (i % doctorDenominator == 0)
            {
                isDoctor = true;
            }

            if (isDoctor && isPatient)
            {
                return Score.Both;
            }
            else if (isDoctor || isPatient)
            {
                if (isDoctor)
                {
                    return Score.Doctor;
                }
                return Score.Patient;// must be is patient no need to check
            }
            else
            {
                return Score.None;
            }
        }
    }
}
