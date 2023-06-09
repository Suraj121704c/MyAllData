const validator = (req, res, next) => {
    const { player_name, position, team, goals, assists, nationality, age, mutable } = req.body
    if (!player_name || !age || !position || !goals || !assists || !team || !nationality) {
        return res.status(400).json({ err: 'Few fields are missing, cannot process the request' });
    }

    // check age range
    if (age < 18 || age > 40) {
        return res.status(400).json({ err: 'You are not eligible to Play' });
    }

    // check position
    const validPositions = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'];
    if (!validPositions.includes(position)) {
        return res.status(400).json({ err: 'Incorrect details' });
    }

    // check goals and assists
    if (goals < 50 || assists < 20) {
        return res.status(400).json({ err: 'You are not eligible to play' });
    }

    next();
}

module.exports = validator