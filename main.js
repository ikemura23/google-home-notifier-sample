var googlehome = require('google-home-notifier');
var language = 'ja'; // if not set 'us' language will be used

googlehome.device('Google-Home-Mini-81636ca99c13bbb15b0828a8f55e8e50', language); // Change to your Google Home name
// or if you know your Google Home IP
// googlehome.ip('172.16.96', language);

googlehome.notify('テストです', function(res) {
  console.log(res);
});