var googlehome = require('google-home-notifier');
var language = 'ja'; // if not set 'us' language will be used

googlehome.device('Google-Home-Hub-2f7308cc5c82a07ace28bb764814eb9d', language); // Change to your Google Home name
// or if you know your Google Home IP
googlehome.ip('172.16.99.104', language);

googlehome.notify('ゆめみのイケムラです', function(res) {
  console.log(res);
});