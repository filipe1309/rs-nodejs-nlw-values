import express from 'express';

const app = express()

app.get("/test", (req, res) => res.send("Hello NLW"))
app.post("/test-post", (req, res) => res.send("Hello NLW Post"))

app.listen(3000, () => {
    console.log("Server is running");
})
