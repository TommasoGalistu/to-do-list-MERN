const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token; // ✅ Legge il token HTTPOnly dai cookie

    if (!token) {
        return res.status(401).json({ error: "Accesso negato. Nessun token trovato." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ Verifica il token JWT
        req.user = decoded; // ✅ Salva l'utente nel req per le route protette
        next(); // ✅ Passa alla route successiva
    } catch (error) {
        return res.status(403).json({ error: "Token non valido o scaduto." });
    }
};

module.exports = authMiddleware;
