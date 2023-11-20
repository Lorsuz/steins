var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { registerSchema, loginSchema } from '../config/validationSchemas.js';
// import { type } from 'os';
import dotenv from 'dotenv';
dotenv.config();
const router = Router();
function comparePassword(password, hashedPasswordFromDatabase) {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield bcrypt.compare(password, hashedPasswordFromDatabase);
        return value;
    });
}
const users = [
    { id: 1, username: 'Felipe', password: '$2b$10$WLnzB59fKZn5Q2c3DOQqDuQ57APKSU3xgilUnw68/jHpGcdy6PxPi' },
    { id: 2, username: 'Ariel', password: '$2b$10$2HLF5yvDPbwGFDbuIILUme0y6kCVM1y8Urq6oNmCOQSbzrynflAEC' }
];
router.post('/api/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = registerSchema.parse(req.body);
        const passwordHashed = yield bcrypt.hash(password, 10);
        users.push({ id: users.length + 1, username, password: passwordHashed });
        res.json({ message: 'Registration successful' });
    }
    catch (error) {
        res.status(400).json({ error: error.message, message: 'Registration unsuccessful' });
    }
}));
router.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = loginSchema.parse(req.body);
        let user = null;
        for (const u of users) {
            const compareHash = yield comparePassword(password, u.password);
            if (u.username === username && compareHash) {
                user = u;
                break;
            }
        }
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
        else {
            const SECRET_KEY = 'secretKey';
            const token = jwt.sign({ userId: user.id }, SECRET_KEY);
            console.log(token);
            res.json({ message: 'Login successful', token });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
export default router;
