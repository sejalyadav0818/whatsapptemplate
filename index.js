const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8888;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const axios = require('axios');

const ejs = require('ejs');
app.set('view engine', 'ejs');
require('./database/conn');

app.use(cookieParser());


app.get("/", (req, res) => {
  try {
    res.render("demotemplate");
  } catch (error) {
    res.status(500).send("internal server Error");
  }
});

app.post('/sendtemplateMessage', async (req, res) => {
  try {
    const { recipients, selectTemp } = req.body;
    const phoneNumberArray = recipients.split(',').map(phone => phone.trim());
    console.log(req.body);
    console.log(phoneNumberArray, "phoneNumberArray");
    for (const recipient of phoneNumberArray) {
      console.log("rec", recipient);
      const response = await axios.post(
        'https://graph.facebook.com/v18.0/243678098829351/messages',
        {
          messaging_product: "whatsapp",
          to: recipient,
          type: "template",
          template: {
            name: selectTemp,
            language: {
              code: "en"
            }
          }
        },
        {
          headers: {
            Authorization: 'Bearer EAAWqeZCMrJ6sBO2nZCLcUirtdE77KegWssKhPymZAtDitZBR29TwEQ9INU5NQXOURqcieZBKg8B4ZCSszXQX3yjBkB8VrZBey0t7CD2wzCPFTHYJjhNDcSOZACJtXlPdrwpqZA27QCsweZBssZBClpJFSMHPhTbuD6QjkGzzZBQBu17ppvr1SnzR6DjV1OO3vY8MjHYuffdcMNrlF9H6L12BVQkNhZBnZCrZAHjr1eU',
            "Content-Type": "application/json"
          },
        }
      );
      console.log(`Message sent to ${recipient}`);
    }

    res.status(200).send('Messages sent successfully');
  } catch (error) {
    console.error('Error sending messages:', error);
    res.status(500).send('Error sending messages');
  }
});

app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
})
