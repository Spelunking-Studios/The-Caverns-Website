import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
	const enemyName = req.query.enemy;
	const directory = path.join(process.cwd(), 'public/images/enemies');
	try {
		const imageBuffer = await fs.readFile(directory + `/${enemyName}.png`);
		res.setHeader('Content-Type', 'image/png');
		res.status(200);
		res.send(imageBuffer);
	} catch (err) {
		res.status(404).json(JSON.stringify({
			message: "Resource Not Found"
		}));
		console.log(err);
		return;
	}
}