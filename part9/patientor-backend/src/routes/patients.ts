import express from 'express';
import patientService from "../services/patientService";
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = res.send(patientService.getEntries());
  res.json(data);
});

router.get('/:id', (req, res) => {
  const patient = patientService.findById(String(req.params.id));

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newPatient = toNewPatientEntry(req.body);

    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

// router.post('/', (req, res) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const { id, name, dateOfBirth, ssn, gender, occupation } = req.body
//   const newPatientEntry = patientService.addPatient({
//     id,
//     name,
//     dateOfBirth,
//     ssn,
//     gender,
//     occupation
//   });
//   return res.json(newPatientEntry);
// })

export default router;