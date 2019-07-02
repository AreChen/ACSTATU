var cpuStat = require('cpu-stat');
cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
        return console.log(err);
    }

    //the percentage cpu usage over all cores
    console.log(percent);

    //the approximate number of seconds the sample was taken over
    console.log(seconds);
});