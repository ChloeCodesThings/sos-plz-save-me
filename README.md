# sos-plz-save-me
☎️ A programable button using Azure Functions and Twilio to trigger a fake call ☎️

![fake bf gif](https://media.giphy.com/media/nnm9NOlVa8yqWbwarv/giphy.gif "Your new fake bf is calling...")

Have you ever wished you could magically get a call in the middle of an awkward social situation?
Then you've come to the right place!

![diagram](https://cdn-images-1.medium.com/max/1600/1*epHpHigBLPGaCK5tuxzn4w.png)

# What's in this repo 📝

+ Sample TwiML
+ The code needed to run and create your own fake bf/gf/cousin/friend/coworker [Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=academic-0000-chcondon)
+ MP3s you may use for the audio of your fake call

# Tools Needed 🛠

+ A [Flic Button](https://amzn.to/2FzdJZo)
+ An Azure Account- you can get a [free account here](https://azure.microsoft.com/free/?WT.mc_id=academic-0000-chcondon)
+ A Twilio account & phone number

# How to Build Your Own Bae 👩🏼‍💻

1. Create a resource in [Azure](https://azure.microsoft.com/free/?WT.mc_id=academic-0000-chcondon) & create a Webhook + API Trigger. For detailed instructions check out [this page](https://docs.microsoft.com/azure/azure-functions/functions-create-first-azure-function/?WT.mc_id=academic-0000-chcondon). You can also use the local.settings.json file to run locally.

2. Connect your GitHub account with Azure. You can do this by navigating to the **Platform Features** tab on your Azure Functions **Overview** page. Select **GitHub** under Source Control, and **App Service Kudu build server** as your Build Provider. Next, select the **Oragnization**, **Repository**, and **Brand** from the dropdown menus under Configure. Finally, click **Finish** to deploy! The Microsoft Docs have step by step instructions on this with visuals [here](https://docs.microsoft.com/azure/app-service/deploy-continuous-deployment/?WT.mc_id=academic-0000-chcondon)

3. Create a Twilio account & phone number (you can use a trial, but your meesages will have trial messaging in them)

4. Create your 2 [Azure Functions](https://azure.microsoft.com/services/functions/?WT.mc_id=academic-0000-chcondon) for your call & messages. You can repurpose the code I have provided, using your Twilio credentials, Twilio phone number, your phone number, custom message, and/or MP3s. **You will need to update your Twilio Auth token, Twilio SID, as well as your phone numbers to run this locally**. I highly suggest using your **Applications settings* in Azure to set up encrypted environment variables (to ensure your SID, token, and phone numbers don't get accidentally shared and abused). You can learn more about [App Settings](https://docs.microsoft.com/azure/app-service/web-sites-configure/?WT.mc_id=academic-0000-chcondon) and [Deployment](https://docs.microsoft.com/azure/app-service/deploy-continuous-deployment/?WT.mc_id=academic-0000-chcondon) in the Microsoft Docs!

*Note*: The TwiML used for the message itself has been provided for the MP3 + custom robot message voice. TwiML and MP3s can be hosted through Twilio in the Assets and TwiML Bins section under Runtime.

5. Add your function URL to your [Flic Button](https://amzn.to/2FzdJZo) app under 'Internet Request'.

6. Create a contact for your fake human in your phone, using the Twilio number you created earlier.

7. Push your [Flic Button](https://amzn.to/2FzdJZo)! *(If you need music for inspo, try [this](https://youtu.be/kAjrKYstfDM?t=102) 🙃🎶)*

🚨 Need more visuals? Stuck? You can read my blog post [here](https://medium.com/@chloecondon/an-ambiverts-guide-to-azure-functions-95931976c565) for a more verbose version. 🚨



# FAQS 🤔

#### Does it have to be a fake boyfriend?
Nope- it can be whatever you want! Your dad, a friend, your cousin, Cher- you can upload and record whatever MP3 you wish!

#### Do I need to pay for a Twilio phone number?
If you'd like to have the recordings and texts play seamlessly, yes.
Otherwise, you'll get a message about your trail account before each message.

#### Do I need an Azure subscription?
Yes- you can get a [free account here](https://azure.microsoft.com/free/?WT.mc_id=academic-0000-chcondon)

#### Did you build this because guys are creepy around you?
No, I built this because I'm an ambivert. You can read all about that [here](https://medium.com/microsoftazure/an-ambiverts-guide-to-azure-functions-95931976c565).
