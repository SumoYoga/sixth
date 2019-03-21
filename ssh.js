var SSH = require('simple-ssh');
 
var ssh = new SSH({
    host: process.env.ftp_host,
    user: process.env.ftp_user,
    pass: process.env.ftp_password
});
 
ssh.exec('echo $PATH', {
    out: function(stdout) {
        console.log(stdout);
    }
}).start();
 
/*** Using the `args` options instead ***/
ssh.exec('echo', {
    args: ['$PATH'],
    out: function(stdout) {
        console.log(stdout);
    }
}).start();