import axios from "axios";

export async function sendGmail(accessToken) {
  const message =
    "From: you@example.com\r\n" +
    "To: recipient@example.com\r\n" +
    "Subject: Test\r\n\r\n" +
    "Hello from Node.js!";

  const encodedMessage = Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  try {
    const res = await axios.post(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
      { raw: encodedMessage },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data || err.message);
  }
}

export async function refreshAccessToken() {
  const url = "https://oauth2.googleapis.com/token";
  const params = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  };

  try {
    const res = await axios.post(url, null, { params });
    return res.data.access_token; // Use this to replace your old access token
  } catch (err) {
    throw new Error(err.response?.data || err.message);
  }
}
