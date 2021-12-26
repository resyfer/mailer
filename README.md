# mailer
A mailer for long list of email IDs

## Instructions for use

Install the dependencies
```
npm i
```

<br/>

Copy the `.env.example` to `.env`
```
cp .env.example .env
```
and change the required parameters

<br/>

Make a `data.json`
```
touch data.json
```

<br/>

and paste this sample in it
```
{
  "sender": {
    "name": "resyfer"
  },
  "email": {
    "id": [
      "test1@gmail.com",
      "test2@gmail.com",
      "test3@gmail.com"
    ],
    "subject": "Test",
    "html": "<b>Hello World</b>"
  }
}
```
and change the required values

and send the mails using
```
npm start
```
