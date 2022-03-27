import express from "express";
import cors from 'cors';
import diagnoseRouter from './routes/diagnose';
import patientRouter from './routes/patients';
const app = express();
const PORT = 3001;

app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use('/api/diagnoses', diagnoseRouter);
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
