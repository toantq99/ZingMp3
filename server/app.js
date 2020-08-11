const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./db.json");
const app = express();

app.use(express.json());
app.use(cors());

const secretKey = "nichirin";

app.post("/api/login", (req, res) => {
	setTimeout(() => {
		const { user } = req.body;
		const matchedUser = db.find(
			(item) =>
				item.username === user.username && item.password === user.password
		);
		if (matchedUser) {
			res.json({
				user: matchedUser,
				token: jwt.sign(matchedUser, secretKey),
			});
		} else res.json({ error: { message: "User not found" } });
	}, 1000);
});

app.post("/api/auth", (req, res) => {
	const { token } = req.body;
	try {
		const { id, username, password, fullName } = jwt.verify(token, secretKey);
		const matchedUser = { id, username, password, fullName };
		res.json({
			user: matchedUser,
			token: jwt.sign(matchedUser, secretKey),
		});
	} catch (err) {
		console.log(err);
		res.json({ error: { message: err.message } });
	}
});

app.listen(8080, () => console.log("Server on localhost:8080"));
