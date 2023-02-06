var express = require("express");
var router = express.Router();
var preciosModel = require("../models/preciosModel");
var cloudinary = require("cloudinary").v2;
var nodemailer = require("nodemailer");

router.get("/administrador", async function (req, res, next) {
  let precios = await preciosModel.getPrecios();

  precios = precios.map((precios) => {
    if (precios.img_id) {
      const imagen = cloudinary.url(precios.img_id, {
        width: 200,
        height: 200,
        crop: "fill",
      });
      return {
        ...precios,
        imagen,
      };
    } else {
      return {
        ...precios,
        imagen: "",
      };
    }
  });

  res.json(precios);
});

router.post("/contacto", async (req, res) => {
  const mail = {
    to: "piovesanmatias@gmail.com",
    subject: "Contacto web - solicitud de turno",
    html: `${req.body.nombre} se contacto a traves de la web, su correo es: ${req.body.email} <br> y su numero de telefono es: ${req.body.telefono}. <br> SOLICITA TURNO. <br> El mensaje que te dejo es: ${req.body.mensaje}`,
  };
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: "Mensaje Enviado con Exito!!",
  });
});

module.exports = router;
