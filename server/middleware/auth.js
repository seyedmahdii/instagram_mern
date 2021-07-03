import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        // Checking validity of token
        const token = req.headers.authorization.split(" ")[1];

        // The data we wanna get from token
        let decodedData;

        if (token) {
            decodedData = jwt.verify(token, "testPass");
            req.userId = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;
