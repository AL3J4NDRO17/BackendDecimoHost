const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutos
  max: 1000000000, // Máximo 100 solicitudes por IP
  message: "Demasiadas solicitudes, intenta de nuevo más tarde.",
});

module.exports = limiter;
