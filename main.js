var googlehome = require('google-home-notifier');
var language = 'ja'; // if not set 'us' language will be used

googlehome.device('Google-Home', language); // Change to your Google Home name
// or if you know your Google Home IP
googlehome.ip('192.168.3.8', language);

googlehome.notify('Hey Foo', function(res) {
  console.log(res);
});