import express from "express";
import {
  getPatientRecord,
  addPatientRecord,
} from "../controllers/patientController";

const router = express.Router();

router.get("/patient/info", getPatientRecord);
router.post("/patient/add", addPatientRecord);

export { router };
