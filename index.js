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

app.get("/second", (req, res) => {
  try {
    res.render("sedemotemplate");
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

app.post('/secondsendtemplateMessage', async (req, res) => {
  try {
    const { recipients, selectTemp } = req.body;
    const phoneNumberArray = recipients.split(',').map(phone => phone.trim());
    console.log(req.body);
    console.log(phoneNumberArray, "phoneNumberArray");
    for (const recipient of phoneNumberArray) {
      console.log("rec", recipient);
      const response = await axios.post(
        'https://graph.facebook.com/v18.0/265933736594328/messages',
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
            Authorization: 'Bearer EAAUZAW89HZBioBOZCFVMcyi55ZBIkZBaQEe8SWFXLHFnUkPnOqVkjE0UdZAQmRNNxrf54Orn31uAXb3O6i9tnqea7BoiyVVBLDGayVZAfXbSBNlEs920fojjvgY0rsatJZAesQI6HXRiXCw2rltS6ycS3akHcvB4qGX6ZCBjPfZBVvE9LjzdZApe94BrsZAZBSwDm6gYg',
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



//demo
// app.post('/secondsendtemplateMessagetry', async (req, res) => {
//   try {
//     const { recipients, selectTemp } = req.body;
//     const phoneNumberArray = recipients.split(',').map(phone => phone.trim());
//     console.log(req.body, phoneNumberArray);
//     for (const recipient of phoneNumberArray) {
//       const response = await axios.post(
//         'https://graph.facebook.com/v18.0/265933736594328/messages',
//         {
//           messaging_product: "whatsapp",
//           to: recipient,
//           type: "template",
//           template: {
//             name: selectTemp,
//             language: {
//               code: "en"
//             }
//           }
//         },
//         {
//           headers: {
//             Authorization: 'Bearer EAAUZAW89HZBioBOZCFVMcyi55ZBIkZBaQEe8SWFXLHFnUkPnOqVkjE0UdZAQmRNNxrf54Orn31uAXb3O6i9tnqea7BoiyVVBLDGayVZAfXbSBNlEs920fojjvgY0rsatJZAesQI6HXRiXCw2rltS6ycS3akHcvB4qGX6ZCBjPfZBVvE9LjzdZApe94BrsZAZBSwDm6gYg', // Replace with your actual access token
//             "Content-Type": "application/json"
//           },
//         }
//       );

//       console.log(`Message sent to ${recipient}`);
//     }

//     res.status(200).send('Messages sent successfully');
//   } catch (error) {
//     console.error('Error sending messages:', error);
//     res.status(500).send('Error sending messages');
//   }
// });
// app.post('/secondsendtemplateMessagetry', async (req, res) => {
//   try {
//     const { recipients, selectTemp, otpCode } = req.body; // Assuming you're also receiving the OTP code in the request body
//     console.log(req.body);
//     const phoneNumberArray = recipients.split(',').map(phone => phone.trim());

//     for (const recipient of phoneNumberArray) {
//       const response = await axios.post(
//         'https://graph.facebook.com/v18.0/265933736594328/messages',
//         {
//           messaging_product: "whatsapp",
//           to: recipient,
//           type: "template",
//           template: {
//             name: selectTemp,
//             language: {
//               "code": "en"
//             },
//             components: [
//               {
//                 type: "body",
//                 "parameters": [
//                   {
//                     "type": "text",
//                      "text": otpCode,
//                   }
//                 ]
//               }
//             ],
//           }
//         },
//         {
//           headers: {
//             Authorization: 'Bearer EAAUZAW89HZBioBOZCFVMcyi55ZBIkZBaQEe8SWFXLHFnUkPnOqVkjE0UdZAQmRNNxrf54Orn31uAXb3O6i9tnqea7BoiyVVBLDGayVZAfXbSBNlEs920fojjvgY0rsatJZAesQI6HXRiXCw2rltS6ycS3akHcvB4qGX6ZCBjPfZBVvE9LjzdZApe94BrsZAZBSwDm6gYg', // Replace with your actual access token
//             "Content-Type": "application/json"
//           },
//         }
//       );
//       console.log("gggggggggggggggggggggggg", response);
//       console.log(`Message sent to ${recipient}`);
//     }

//     res.status(200).send('Messages sent successfully');
//   } catch (error) {
//     console.error('Error sending messages:', error);
//     res.status(500).send('Error sending messages');
//   }
// });


app.get('/sendtemplatemessagess/:phoneNumber/:selectTemp/:otpCode', async (req, res) => {
  try {
    const { phoneNumber, selectTemp, otpCode } = req.params;

    const response = await axios.post(
      `https://graph.facebook.com/v18.0/265933736594328/messages?phone=${phoneNumber}`,
      {
        messaging_product: "whatsapp",
        to: phoneNumber,
        type: "template",
        template: {
          name: selectTemp,
          language: {
            "code": "en"
          },
          components: [
            {
              type: "body",
              "parameters": [
                {
                  "type": "text",
                  "text": otpCode,
                }
              ]
            }
          ],
        }
      },
      {
        headers: {
          Authorization: 'Bearer EAAUZAW89HZBioBOZCFVMcyi55ZBIkZBaQEe8SWFXLHFnUkPnOqVkjE0UdZAQmRNNxrf54Orn31uAXb3O6i9tnqea7BoiyVVBLDGayVZAfXbSBNlEs920fojjvgY0rsatJZAesQI6HXRiXCw2rltS6ycS3akHcvB4qGX6ZCBjPfZBVvE9LjzdZApe94BrsZAZBSwDm6gYg', // Replace with your actual access token
          "Content-Type": "application/json"
        },
      }
    );

    console.log("Response:", response.data);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error.response.data);
    res.status(500).send('Error sending message');
  }
});


//hello_world
//new
app.get('/sendtemplate/:phoneNumber/:selectTemp', async (req, res) => {
  try {
    const { phoneNumber, selectTemp } = req.params;

    const response = await axios.post(
      `https://graph.facebook.com/v18.0/101625952828140/messages?phone=${phoneNumber}`,
      {
        messaging_product: "whatsapp",
        to: phoneNumber,
        type: "template",
        template: {
          name: selectTemp,
          language: {
            "code": "en_US"
          }
        }
      },
      {
        headers: {
          Authorization: 'Bearer EAARKnq3oBa4BOZB8qiby3HyQK1uHD307ZA8rJGU8av34ZB8b3onxWtYhYqldQ8m5b5gpN720ivwq77aYrYpd9E0sJ0sum94IZCDOuCBZAhrMDrWFsyP2h9LY14U3rAZA0lBagCZBfuRUadeijpHFb1ZCEEUBC0jggtdNWp088apu9cYDK0I41JiuzcHRuUYxT5ZAdaeRZA8m3yZBs6O6LY9',
          "Content-Type": "application/json"
        },
      }
    );

    console.log("Response:", response.data);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error.response.data);
    res.status(500).send('Error sending message');
  }
});
app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
})
