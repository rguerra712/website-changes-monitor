# website-changes-monitor

This project is intended to send an e-mail and sms text notification upon the monitoring and change of a website checked every minute.

# Getting Started

1. First clone this repository.
1. Next copy the file `config.template.json` and rename it for each environment to which you wish to deploy. For instance, if you wish to deploy to dev, you will need a file titled `config.dev.json`.

# Deployment

To Deploy, run the command:

```
serverless deploy --email <EMAIL> --sms <SMS>
```

with a valid e-mail and sms replacing the variables `<EMAIL>` and `<SMS>` in the command above.
