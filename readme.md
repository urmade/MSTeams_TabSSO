# Teams Single-Sign-On for tabs
This repository is an _unofficial_ example implementation of how to build Single Sign On for Microsoft Teams tabs. If you want to learn more about what happens under the hood and how you can go even further, take a look at [the documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso) or read [this blog article](https://dev.to/urmade/seamless-sso-login-for-microsoft-teams-tabs-3n8k). 

# Set up this project
To get Single Sign On working, you will need three things in place:
1. A configured Azure Active Directory App registration (Tutorial [here](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso#1-create-your-aad-application-in-azure))
2. A Teams app manifest with SSO enabled (Tutorial in App Studio [here](https://dev.to/urmade/seamless-sso-login-for-microsoft-teams-tabs-3n8k#creating-a-teams-app-manifest) | in manifest.json [here](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-aad-sso#2-update-your-microsoft-teams-application-manifest))
3. A running server that hosts this tab

To set up this code example, you have to install Node.js and TypeScript on your machine. Additionally for testing purposes I would recommend to use ngrok.io to host a local server that can interact with Teams (but you could use any other web server as well). To get started, run:
1. npm install
2. tsc
3. node dest/index

That's it, now you can reference a static personal tab on *yourserver.com*/tab in your Teams App manifest and you are ready to go!