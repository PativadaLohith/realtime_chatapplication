import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	console.log("JWT_SECRET:", process.env.JWT_SECRET);
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, 
		sameSite: "strict", 
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;