var exec = require('child_process').exec;

exec("kill -9 $(ps | grep "child.js" | grep -v grep | awk '{ print $1 }')",
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    if (error !== null) {
      console.log('exec output: ' + error);
    }
});