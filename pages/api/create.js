import { FaCommentSlash } from 'react-icons/fa';
import dataFile from '../../data.json';

export default function handler(req, res) {
  const data = req.body;
  console.log('Backend: ', data);

  dataFile.push(data);
  res.status(201).json({ message: 'Successfully processed' });
}
