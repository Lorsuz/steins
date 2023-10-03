const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const app = express();
const port = 3001;

const secretKey = 'your-secret-key';

const users = [
  { id: 1, username: 'Felipe', password: '$2b$10$WLnzB59fKZn5Q2c3DOQqDuQ57APKSU3xgilUnw68/jHpGcdy6PxPi' },
  { id: 2, username: 'Ariel', password: '$2b$10$2HLF5yvDPbwGFDbuIILUme0y6kCVM1y8Urq6oNmCOQSbzrynflAEC' },
];

app.use(bodyParser.json());
app.use(cors());


const registrationSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

app.post('/api/register', async (req, res) => {
  try {
    var { username, password } = registrationSchema.parse(req.body);

    password = await bcrypt.hash(password, 10);
    users.push({ id: users.length + 1, username, password });
    users.forEach((element) => {
      console.log(element);
    });
    res.json({ message: 'Registrado com sucesso, checado no back' });
  } catch (error) {
    handleRegistrationError(error, res);
  }
});
function handleRegistrationError(error, res) {
  res.status(400).json({ error: error.message, message: 'Registração sem sucesso, erro na rota' });
}

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = loginSchema.parse(req.body);


    async function comparePassword(password, hashedPasswordFromDatabase) {
      const value = await bcrypt.compare(password, hashedPasswordFromDatabase);
      return value;
    }


    let user = null;
    for (const u of users) {
      const compareHash = await comparePassword(password, u.password);
      if (u.username === username && compareHash) {
        user = u;
        break;
      }
    }

    if (!user) {
      res.status(401).json({ message: 'Credencias Invalidas, checadas no back' });
    } else {

      const token = jwt.sign({ userId: user.id }, secretKey);

      console.log(token);
      res.json({ message: 'Logado com sucesso, checado no back', token });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
