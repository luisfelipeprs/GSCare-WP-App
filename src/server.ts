import * as express from 'express';
require('dotenv').config();
import { sendTemplateMessageHandler } from './interface/http/controllers/MessageController';

const app = express();
app.use(express.json()); // middleware: isso deve estar aqui

app.post('/send-template-message', sendTemplateMessageHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});