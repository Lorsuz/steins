import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { registerSchema, loginSchema } from '../config/validationSchemas.js';
// import { type } from 'os';
import dotenv from 'dotenv';
dotenv.config();

const router: Router = Router();

async function comparePassword(password: string, hashedPasswordFromDatabase: string): Promise<boolean> {
	const value = await bcrypt.compare(password, hashedPasswordFromDatabase);
	return value;
}
const users = [
	{ id: 1, username: 'Felipe', password: '$2b$10$WLnzB59fKZn5Q2c3DOQqDuQ57APKSU3xgilUnw68/jHpGcdy6PxPi' },
	{ id: 2, username: 'Ariel', password: '$2b$10$2HLF5yvDPbwGFDbuIILUme0y6kCVM1y8Urq6oNmCOQSbzrynflAEC' }
];
type Mens = {
	message: string;
};
router.post('/api/register', async (req: Request, res: Response) => {
	try {
		type User = {
			username: string;
			password: string;
		};
		const { username, password }: User = registerSchema.parse(req.body);

		const passwordHashed: string = await bcrypt.hash(password, 10);

		users.push({ id: users.length + 1, username, password: passwordHashed });

		res.json({ message: 'Registration successful' });
	} catch (error: unknown) {
		res.status(400).json({ error: error.message, message: 'Registration unsuccessful' });
	}
});

router.post('/api/login', async (req, res) => {
	try {
		const { username, password } = loginSchema.parse(req.body);

		let user = null;

		for (const u of users) {
			const compareHash = await comparePassword(password, u.password);
			if (u.username === username && compareHash) {
				user = u;
				break;
			}
		}

		if (!user) {
			res.status(401).json({ message: 'Invalid credentials' });
		} else {
			const SECRET_KEY = 'secretKey';
			const token = jwt.sign({ userId: user.id }, SECRET_KEY);

			console.log(token);
			res.json({ message: 'Login successful', token });
		}
	} catch (error: unknown) {
		res.status(400).json({ error: error.message });
	}
});

export default router;
