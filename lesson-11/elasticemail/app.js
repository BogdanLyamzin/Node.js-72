import ElasticEmail from '@elasticemail/elasticemail-client';
import "dotenv/config";

const {ELASTIC_API_KEY, EMAIL_FROM} = process.env;
 
const defaultClient = ElasticEmail.ApiClient.instance;
 
const {apikey} = defaultClient.authentications;
apikey.apiKey = ELASTIC_API_KEY;
 
const api = new ElasticEmail.EmailsApi();
 
const email = ElasticEmail.EmailMessageData.constructFromObject({
  Recipients: [
    new ElasticEmail.EmailRecipient("lafic23473@viperace.com")
  ],
  Content: {
    Body: [
      ElasticEmail.BodyPart.constructFromObject({
        ContentType: "HTML",
        Content: "<strong>Test email</strong>"
      })
    ],
    Subject: "Test email",
    From: EMAIL_FROM
  }
});
 
const callback = function(error, data, response) {
  if (error) {
    console.error(error.message);
  } else {
    console.log('API called successfully.');
  }
};

api.emailsPost(email, callback);