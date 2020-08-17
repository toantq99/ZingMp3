const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./db.json");
const app = express();
const fs = require("fs");

const addUser = (user) => {
	const id = db.length + 1;
	const newUser = { ...user, id };
	db.push(newUser);
	fs.writeFileSync("./db.json", JSON.stringify(db, null, 4));
	return newUser;
};

app.use(express.json());
app.use(cors());

const secretKey = "nichirin";

app.post("/api/user/login", (req, res) => {
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
		} else res.status(404).send({ message: "User Not Found" });
	}, 1000);
});

app.get("/api/user/auth", (req, res) => {
	let token = req.headers["x-access-token"] || req.headers["authorization"];
	try {
		if (token && token.startsWith("Bearer ")) {
			token = token.slice("Bearer ".length, token.length);
			const { id, username, password, fullName } = jwt.verify(token, secretKey);
			const matchedUser = { id, username, password, fullName };
			res.json({
				user: matchedUser,
				token: jwt.sign(matchedUser, secretKey),
			});
		} else throw new Error("Token not found");
	} catch (err) {
		res.status(401).send({ message: err.message || "Invalid Token" });
	}
});

app.post("/api/user/signup", (req, res) => {
	setTimeout(() => {
		const { newUser } = req.body;
		if (newUser) {
			const duplicatedUser = db.find(
				(item) => item.username === newUser.username
			);
			if (duplicatedUser) {
				res.status(401).send({ message: "Duplicated Username" });
			} else {
				const user = addUser(newUser);
				res.json({
					user,
					token: jwt.sign(user, secretKey),
				});
			}
		} else {
			res.status(401).send({ message: "Invalid User" });
		}
	}, 1000);
});

app.use((req, res) => {
	res.status(404).send({ message: "URL Not Found" });
});

app.listen(8080, () => console.log("Server on localhost:8080"));
