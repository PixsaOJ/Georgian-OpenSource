const {Router} = require('express');

const Job = require('../models/job');

const router = Router();

// api/jobs/

router.get('/', async (req, res, next) => {
    try {
        let jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const job = new Job(req.body);
        const createdjob = await job.save();
        res.json(createdjob);
    } catch (error) {
        if (error.name == 'ValidationError') res.status(422);
        next(error);
    }
});

module.exports = router;