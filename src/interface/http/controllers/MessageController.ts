import { Request, Response } from 'express';
import { sendTemplateMessage } from '../../../application/usecases/SendTemplateMessage';

export const sendTemplateMessageHandler = async (req: Request, res: Response) => {
    console.log('Request body:', req.body); // Adicione este log 
    const { phoneNumber, templateName } = req.body;
    console.log(phoneNumber, templateName);

    if (!phoneNumber || !templateName) {
      return res.status(400).json({ error: 'Phone number and template name are required' });
    }

    try {
      await sendTemplateMessage(phoneNumber, templateName);
      return res.status(200).json({ message: 'Template message sent successfully' });
    } catch (error) {
      console.error('Error in sendTemplateMessageHandler:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }
};
