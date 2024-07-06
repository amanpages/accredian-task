const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Set up the email transporter using Google Mail Service API
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

app.post('/referral', async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Missing email or name' });
  }

  try {
    // Save referral data in the database
    const referral = await prisma.referral.create({
      data: { email, name }
    });

    // Send referral email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Referral Program',
      text: `Hi ${name},\n\nThank you for referring your friend!\n\nBest regards,\nYour Company`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Referral saved and email sent' });
  } catch (error) {
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
