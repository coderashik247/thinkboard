import rateLimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {
    try {
        // Implement your rate limiting logic here
        const {success} = await rateLimit.limit("my-limit-key");
        // For example, you can use a library like express-rate-limit or implement your own logic using Redis or in-memory storage
        if (!success) {
            // If the user has exceeded the rate limit, return a 429 Too Many Requests response
            return res.status(429).json({ message: 'Too many requests, please try again later.' });
        }
        // Otherwise, call next() to proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Error in rateLimiter middleware', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
}

export default rateLimiter;