const express = require(`express`);
const router = express.Router();
const Member = require(`../models/member`)
router.post('/login', async (req, res) => {
  try {
    const { username, email, password } = req.body;
      
    const userName = await Member.findOne({ userName });
    if (userName) {
        return res.status(401).json({ error: `The username has already been taken`});
    }
    const member = await Member.findOne({ email });

    if (!member) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordMatch = await member.comparePassword(password);
  
    if (isPasswordMatch) {
      res.redirect(`/home`);
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
