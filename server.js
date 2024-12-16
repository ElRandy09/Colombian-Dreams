// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Para enviar correos
const cors = require('cors');

const app = express();

// Configuración para permitir solicitudes desde otros orígenes (CORS)
app.use(cors());

// Configuración para analizar los datos del cuerpo de las solicitudes POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta de prueba para asegurarnos de que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor Express en funcionamiento');
});

// Ruta para recibir los datos del formulario de contacto
app.post('/submit', (req, res) => {
  const { name, phone, email } = req.body;

  console.log('Datos recibidos:', name, phone, email);

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Usando Gmail como servicio
    auth: {
      user: 'juandimoru@gmail.com', // Tu correo personal
      pass: 'lyfr xsdv tzjn hqyt' // Usa la contraseña de aplicación aquí
    }
  });
  
  const mailOptions = {
    from: 'juandimoru@gmail.com', // Tu correo personal (de donde se envía el correo)
    to: 'juandimoru@gmail.com', // El correo donde quieres recibir los datos (también tu correo)
    subject: 'Nuevo formulario de contacto',
    text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}`
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error al enviar el correo:', error);
      return res.status(500).json({ message: 'Error al enviar los datos' });
    } else {
      console.log('Correo enviado:', info.response);
      return res.status(200).json({ message: 'Formulario enviado correctamente' });
    }
  });
});

// Iniciar el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
