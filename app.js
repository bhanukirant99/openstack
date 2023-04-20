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



const list = [
    { id: 1, name: "VM 1" },
    { id: 2, name: "VM 2" },
    { id: 3, name: "VM 3" },
    { id: 4, name: "VM 1Week Ago" },
    { id: 5, name: "VM 2Weeks Ago" },
    { id: 6, name: "VM 1Month Ago" },
    { id: 7, name: "VM 3Months Ago" },
    { id: 8, name: "VM 6Months Ago" },
    { id: 9, name: "VM 1Year Ago" },
    { id: 10, name: "VM More Than 1 Year Ago" },
];
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