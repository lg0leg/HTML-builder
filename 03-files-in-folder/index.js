const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname,'secret-folder'), (err,data) => {
 
  data.forEach(file => {

    let currentPath = path.join(__dirname,'secret-folder',path.basename(file));

    fs.stat(currentPath, (error, stats) => {
      if (error) {
        console.log(error);
      }
      else {
        if (stats.isFile()) {
          console.log('\n' + path.basename(file,path.extname(file)) + ' - ' + path.extname(file) + ' - ' + stats.size + ' байт' + '\n');
        }
      }
    });

  });
});