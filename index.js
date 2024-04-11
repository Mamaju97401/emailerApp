require('dotenv').config();
const nodemailer = require ('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

/*
// Creation Client OAUTH2
const oauth2Client = new OAuth2 (
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.URL_REDIRECTION
); 
*/

/*
//Refresh Token
oauth2Client.setCredentials({
    refresh_token:process.env.REFRESH_TOKEN
});


const accesToken = oauth2Client.getAccessToken()

//console.log (accesToken)

//Creation transporter nodemailer
const smtpTransport =  nodemailer.createTransport({ 
    service :"gmail", 
    auth :  { 
         type :"OAuth2", 
         utilisateur :"bouget.mathieu69@gmail.com", 
         clientId :process.env.CLIENT_ID, 
         clientSecret :process.env.CLIENT_SECRET, 
         refreshToken :process.env.REFRESH_TOKEN, 
         accessToken :accesToken
    },
   tls : {
      rejectUnauthorized : false 
    }
});
*/

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Remplacez par le serveur SMTP approprié
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: process.env.MAIL_CLIENT, // Remplacez par votre adresse e-mail
      pass: process.env.CLIENT_MDP // Remplacez par votre mot de passe d'e-mail
  }
});

/*
//Verify connection of transporter

smtpTransport.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
});
*/

//Creation of Mail

const mailOptions =  { 
  from :"bouget.mathieu69@gmail.com", 
  cc: [ "julieaudelallemand@gmail.com", 
        "bouget.mathieu@live.fr"
      ],
  subject :  "Node.js Email with Secure OAuth", 
  generateTextFromHTML : true , 
  html :  "<b>It's Work ......it's live... </b>" 
};

//Send Email

transporter.sendMail(mailOptions, (error, response) => { 
  if(error){
    console.log(error)
  } else {
    console.log(response)
  }
  /*erreur ? console.log (error) : 
  console.log(response); */
  smtpTransport .close (); 
});