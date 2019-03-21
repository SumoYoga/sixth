var FtpDeploy = require('ftp-deploy')
var ftpDeploy = new FtpDeploy()

var config = {
  user: process.env.ftp_user,
  password: process.env.ftp_password,
  host: process.env.ftp_host,
  port: process.env.ftp_port,
  localRoot: __dirname + '/build',
  remoteRoot: '/run/www/',
  // include: ['*', '**/*'],      // this would upload everything except dot files
  include: ['*'],
  exclude: ['build/**/*.map'], // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
  deleteRemote: true, // delete ALL existing files at destination before uploading, if true
  forcePasv: true, // Passive mode is forced (EPSV command is not sent)
}

console.log(__dirname)
console.log(pwd)

// use with promises
ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err))

// use with callback
ftpDeploy.deploy(config, function(err, res) {
  if (err) console.log(err)
  else console.log('finished:', res)
})

/*
var fs = require('fs');
var FtpClient = require('ftp-deploy');

if (process === null) {
  console.log("process is null");
} else {
  uploadToFTP();
}
function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push({full_path: name, rel_path: files[i]});
    }
  }
  return files_;
}

function uploadToFTP(files) {
  var ftp = new FtpClient();
  var ftpConfig = getConfiguration();

  console.log("ftp.host =" + ftpConfig.host);
  console.log("ftp.username =" + ftpConfig.username);
  console.log("ftp.password length =" + ftpConfig.password.length);
  console.log("ftp.localRoot =" + ftpConfig.localRoot);
  console.log("ftp.remoteRoot =" + ftpConfig.remoteRoot);
  console.log("ftp.port =" + ftpConfig.port);

  ftp.deploy(ftpConfig, function (err, fileName) {
    if (err) {
      console.log("error " + err);
    } else {
      console.log("Completed uploading");
    }
  });
}
function getConfiguration() {
  return {
    host: process.env.ftp_host,
    port: process.env.ftp_port,
    username: process.env.ftp_user,
    password: process.env.ftp_password,
    localRoot: process.env.ftp_localPath,
    remoteRoot: process.env.ftp_remotePath
  };
}
*/
