import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

// addPatientRecord and getPatientRecord

const addPatientRecord = async (req: Request, res: Response) => {
  try {
    const {
      fname,
      lname,
      dob,
      age,
      blood_group,
      gender,
      appointment,
      phone_number,
      email,
      cnic,
      address,
      reason,
    } = req.body;
    const existingPatientEmail = await prisma.patient.findUnique({
      where: {
        email,
      },
    });
    const existingPatientCnic = await prisma.patient.findUnique({
      where: {
        cnic,
      },
    });
    if (existingPatientEmail) {
      return res
        .status(409)
        .json({ message: "This email is already linked to other patient" });
    } else if (existingPatientCnic) {
      return res
        .status(409)
        .json({ message: "This Cnic is already linked to other patient" });
    }
    const addPatient = await prisma.patient.create({
      data: {
        fname,
        lname,
        dob,
        age,
        blood_group,
        gender,
        appointment,
        phone_number,
        email,
        cnic,
        address,
        reason,
      },
    });
    return res.status(200).json({ message: "Patient Added Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

const getPatientRecord = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

export { addPatientRecord, getPatientRecord };
