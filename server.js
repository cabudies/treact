let express = require('express');
let app = express();
var cors = require('cors')
const path = require('path');
let nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// var Router = require('router');
 
// var router = Router()

// Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var transporter = nodemailer.createTransport({
//   host: "mail.YOURDOMAIN.com", 
//     port: 587,
//     secure: false,
  service: 'gmail',
  auth: {
    user: "gurjassingh92@gmail.com",
    pass: "cabudies" 
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/access', (req, res, next) => {
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: Website \nemail: ${email} \nmessage: ${message} `;

  var mail = {
    from: email,
    to: 'societyofai.info@gmail.com',
    message: message,
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      res.json({
       status: 'success'
      });
    }
  })
})


// const PORT = process.env.PORT || 8080
app.listen(8000, () => console.info(`server has started on 8000`))