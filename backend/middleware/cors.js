const corsMiddleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); 

    
    if (req.method === "OPTIONS") {
        return res.sendStatus(204);
    }

    next(); 
};

module.exports = corsMiddleware