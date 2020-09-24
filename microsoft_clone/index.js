var cron = require('node-cron');

cron.schedule('55 1 * * *', () => {
    console.log('Runing a job at 01:00 at America/Indiana/Indianapolis timezone');
  }, {
    scheduled: true,
    timezone: "America/Indiana/Indianapolis"
  });

