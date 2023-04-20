// const express = require('express');

import express from 'express'
// const moment = require('moment');
import moment from 'moment';
const app = express();
import cors from 'cors'
import { client, token, instances } from './openstacktest.js';

app.use(cors)

app.get('/', (req, res) => {
    console.log("working")
})

// Define the route for GET /instances
app.get('/instances', (req, res) => {
    console.log("yes")

    const timeframe = req.query.timeframe;
    const now = moment();

    const start = now.subtract(timeframe, 'hours');

    const filteredInstances = instances.filter(instance => {
        const instanceTime = moment(instance.created_at);
        return instanceTime.isBetween(start, now);
    });

    res.json(filteredInstances);
});



app.get("/vms", (req, res) => {
    console.log(req.query.period)
    const period = req.query.period;
    // Assuming that the period is used to filter the list
    console.log(period)
    const filteredList = list.filter((vm) => vm.name.includes(period));
    res.json(filteredList);
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});