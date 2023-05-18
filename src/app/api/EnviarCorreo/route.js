import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const { method } = req;
  const data = await req.json();
 
  switch (method) {
    case "POST":
      const { nombre, empresa, telefono, comentario } = data;

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GOOGLE_EMAIL,
          pass: process.env.GOOGLE_PASSWORD,
        },
      })

      try {
       const response= await transporter.sendMail({
          from: "CorporationAOSC",
          to: "roberthenrryleonhuaman552@gmail.com",
          subject: "Nuevo Mensaje de Auditory:",
          text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nTelefono: ${telefono}\nComentario: ${comentario}`,
        });
    
        return NextResponse.json({ message: "El mensaje se envió correctamente." });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Ocurrió un error al enviar el mensaje." });
      }

      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Método ${method} no permitido en esta ruta`);
      break;
  }
}