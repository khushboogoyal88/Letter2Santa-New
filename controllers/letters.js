const Letter = require('../models/Letters')

// desc GET all letters
// @route GET /api/v1/letters
// access Public

exports.getLetters = async (req, res, next) => {
    try {
        const letters = await Letter.find();
        
        return res.status(200).json({
            success: true,
            count: letters.length,
            data: letters
        })
    } catch (err) {
        return res.send(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// desc Add new letter
// @route POST /api/v1/letters
// access Public

exports.addLetters = async (req, res, next) => {
    try {
        const { name, age, pic, isNice, message } = req.body;
        
        const letter = await Letter.create(req.body);
        
        return res.status(201).json({
            success: true,
            data: letter
        });
        
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
    
}

// desc DELETE letter
// @route DELETE /api/v1/transactions/:id
// access Public
""
exports.deleteLetters = async (req, res, next) => {
    try {
        const letter = await Letter.findById(req.params.id);
        
        if (!letter) {
            return res.status(404).json({
                success: false,
                error: 'No letter found'
            })
        }
        
        await letter.remove();
        
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}