const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname,'files-copy'), (err) => {
  if (err) copyDir();
});



copyDir();

function copyDir() {

  fs.readdir(path.join(__dirname,'files-copy'), (err,data) => {
    data.forEach(file => {
      let currentPath = path.join(__dirname, 'files-copy', path.basename(file));
      fs.unlink(currentPath, (err) => {console.log(err);});
    });
  });

  fs.readdir(path.join(__dirname,'files'), (err,data) => {
    data.forEach(file => {
      let currentPath = path.join(__dirname, 'files', path.basename(file));
      fs.copyFile(currentPath, path.join(__dirname,'files-copy', path.basename(file)), (err) => {console.log(err);});
    });
  });

}

