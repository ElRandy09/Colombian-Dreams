// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, phone, email } = req.body;

    console.log('Datos recibidos:', name, phone, email);

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Usando Gmail como servicio
      auth: {
        user: 'juandimoru@gmail.com', // Tu correo personal
        pass: 'lyfr xsdv tzjn hqyt', // Usa la contraseña de aplicación aquí
      },
    });

    const mailOptions = {
      from: 'juandimoru@gmail.com', // Tu correo personal (de donde se envía el correo)
      to: 'juandimoru@gmail.com', // El correo donde quieres recibir los datos (también tu correo)
      subject: 'Nuevo formulario de contacto',
      text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}`,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      console.log('Correo enviado');
      res.status(200).json({ message: 'Formulario enviado correctamente' });
    } catch (error) {
      console.log('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar los datos' });
    }
  } else {
    // Si no es un método POST, responde con un error 405 (Método no permitido)
    res.status(405).json({ message: 'Método no permitido' });
  }
}
