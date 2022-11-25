# @monkey_king/sendemail

A node package to send emails built on top of nodemailer.
This package uses mailgun as transporter for now...

## Installation

To get started, run:

```
npm i @monkey_king/sendemail
```

## Usage

To use this package, you will need an account at https://www.mailgun.com/.

To use this, in an ECMAScript, you will need to:

```
import {sendemail} from '@monkey_king/sendemail'

const send = () => {
    sendemail(
        auth, //required. will be the authentication object required by mailgun
              //auth = {auth: {api_key: <Your private key>, domain: <Your domain>}}

        sender, //required. string of the email sending the mail.
                //It should be the same as the one used to create mailgun account

        recipient, //required. Array of the list of emails to send to. They should
                  // be verified emails if you are using a free foundation plan in mailgun

        subject, //required. string of the email subject

        emailContent, //required. html passed as a string (ex: '<h1>Hello everyone</h1>')

        callback, //optional, takes two params. (error, result) => ...
    )
}
```

Example:

```
import {sendemail} from '@monkey_king/sendemail'

const auth = {
    auth: {
        api_key: <Your API key>,
        domain: <Your domain>
    }
}

const emailContent = `
    <div>
        <h1>Hello</h1>
        <p>Welcome to the party</p>
    </div>
`

const send = () => {
    sendemail(
        auth,
        sender@gmail.com,
        ["recipient1@gmail.com", "recipient2@gmail.com"],
        "Test the package",
        emailContent
    )
}
```

To use this, in an CommonJS, you will need to:

```
const {sendemail} = require('@monkey_king/sendemail')

/**
* Rest of code goes here as for ECMAScript
*/
```

## What next?

We will be building to add aws SES and other transporters

## Contributing

Your pull request is one button away, don't hesitate. Face any issue? let us know

## License

This has an MIT license.
