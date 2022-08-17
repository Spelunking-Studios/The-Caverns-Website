import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
	const enemyName = req.query.enemy;
	const jsonDirectory = path.join(process.cwd(), 'enemyData');
	try {
		const fileContents = await fs.readFile(jsonDirectory + `/${enemyName}.json`, 'utf8');
		res.status(200).json(JSON.parse(JSON.stringify(fileContents)));
	} catch (err) {
		res.status(404).json(JSON.stringify({
			message: "Resource Not Found"
		}));
		return;
	}
}