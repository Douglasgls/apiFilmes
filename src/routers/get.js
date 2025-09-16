import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ 
        nome: "Inception",
        diretor: "Christopher Nolan",
        ano: 2010,
        genero: "Sci-Fi"
    });
});

export default router;