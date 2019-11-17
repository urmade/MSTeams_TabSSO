import express from "express";
import request from "request";
import path from "path";

const app = express();

app.get("/tab", (req,res) => {
    res.sendFile(path.join(__dirname, "..", "tab.html"));
})

app.get("/storeToken", (req,res) => {
    const idToken = req.query.token;
    if (!idToken) {
        res.status(500).send("There was no token contained in the request. ");
        return;
    }
    console.log(idToken);
    request("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "form": {
            "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
            "client_id": "your_client_id",
            "client_secret": "your_client_secret",
            "scope": "user.read",
            "requested_token_use": "on_behalf_of",
            "assertion": idToken
        }
    }, (error,response,body) => {
        const access_token = JSON.parse(body)["access_token"];
        console.log(access_token);
        res.send();
    })
})


app.listen(8000, () => {
    console.info("Server is running on Port 8000");
});