# sos-plz-save-me
☎️ A programable button using Azure Functions and Twilio to trigger a fake call ☎️

![fake bf gif](https://media.giphy.com/media/nnm9NOlVa8yqWbwarv/giphy.gif "Your new fake bf is calling...")

Have you ever wished you could magically get a call in the middle of an awkward social situation?
Then you've come to the right place!

# What's in this repo 📝

+ Sample TwiML
+ The code needed to run and create your own fake bf/gf/cousin/friend/coworker [Azure Functions](https://azure.microsoft.com/en-us/services/functions/?WT.mc_id=sosplzsaveme-github-chcondon)
+ MP3s you may use for the audio of your fake call

# Tools Needed 🛠

+ A [Flic Button](https://amzn.to/2FzdJZo)
+ An Azure Account- you can get a [free account here](https://azure.microsoft.com/en-us/free/?wt.mc_id=sosplzsaveme-github-chcondon)
+ A Twilio account & phone number

# How to Build Your Own Bae 👩🏼‍💻

1. Create a resource in [Azure](https://azure.microsoft.com/en-us/free/?wt.mc_id=sosplzsaveme-github-chcondon) & create a Webhook + API Trigger. For detailed instructions check out [this page](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function/?wt.mc_id=sosplzsaveme-github-chcondon). You can also use the local.settings.json file to run locally.

2. Create a Twilio account & phone number (you can use a trial, but your meesages will have trial messaging in them)

3. Create your 2 [Azure Functions](https://azure.microsoft.com/en-us/services/functions/?WT.mc_id=sosplzsaveme-github-chcondon) for your call & messages. You can repurpose the code I have provided, using your Twilio credentials, Twilio phone number, your phone number, custom message, and/or MP3s. 

*Note*: The TwiML used for the message itself has been provided for the MP3 + custom robot message voice. TwiML and MP3s can be hosted through Twilio in the Assets and TwiML Bins section under Runtime.

4. Add your function URL to your [Flic Button](https://amzn.to/2FzdJZo) app under 'Internet Request'.

5. Create a contact for your fake human in your phone, using the Twilio number you created earlier.

6. Push your [Flic Button](https://amzn.to/2FzdJZo)! *(If you need music for inspo, try [this](https://youtu.be/kAjrKYstfDM?t=102) 🙃🎶)*

🚨 Need more visuals? Stuck? You can read my blog post [here](LINK!) for a more verbose version. 🚨

# FAQS 🤔

#### Does it have to be a fake boyfriend?
Nope- it can be whatever you want! Your dad, a friend, your cousin, Cher- you can upload and record whatever MP3 you wish!

#### Do I need to pay for a Twilio phone number?
If you'd like to have the recordings and texts play seamlessly, yes.
Otherwise, you'll get a message about your trail account before each message.

#### Do I need an Azure subscription?
Yes- you can get a [free account here](https://azure.microsoft.com/en-us/free/?wt.mc_id=sosplzsaveme-github-chcondon)

#### Did you build this because guys are creepy around you?
No, I built this because I'm an ambivert. You can read all about that [here](LINK).
