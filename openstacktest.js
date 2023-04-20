// let client = require("openstack-client");
// let token = client.authenticate({
//     endpoint: "https://192.168.29.10:5000/v3/",
//     name: "admin",
//     password: "f34sJtgS007EEB2Wx7NTs4xBcyvYnbUI",
//     userDomainName: "Default",
//     projectName: "test",
//     projectDomainName: "Default"
// });
// client.nova.server.list(token, "microstack").then(function(servers) {
//     console.dir(servers);
// });
import moment from 'moment';
const now = moment();
// const start = now.subtract(timeframe, 'hours');


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

const instances = [
    { project_name: 'test', project_id: 1, created_at: now },
    { project_name: 'test1', project_id: 2, created_at: now.subtract(1, 'hours') },
    { project_name: 'test2', project_id: 3, created_at: now.subtract(2, 'hours') }
];
import client from 'openstack-client'

// let client = require("openstack-client");
let token = client.authenticate({
    endpoint: "https://192.168.29.10:5000/v3/",
    name: "admin",
    password: "920eb00a07344ff0abb29d33d1bc5f7d",
    userDomainName: "Default",
    projectName: "test",
    projectDomainName: "Default"
        // verify: false // add this line to disable SSL certificate verification
});
// client.nova.server.list(token, "RegionOne").then(function(servers) {
//     console.dir(servers);
// });

// GRANT ALL PRIVILEGES ON keystone.*TO 'keystone'
// @ 'localhost'\
// IDENTIFIED BY 'root';

// [database]#...
// connection = mysql + pymysql: //keystone:root@controller/keystone

//     keystone - manage bootstrap--bootstrap - password root\
//     --bootstrap - admin - url http: //controller:5000/v3/ \
//     --bootstrap - internal - url http: //controller:5000/v3/ \
//     --bootstrap - public - url http: //controller:5000/v3/ \
//     --bootstrap - region - id RegionOne

export { client, token, instances }