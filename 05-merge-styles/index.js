const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', (err) => {
  if (err) {
    console.log(err);
  }
});


fs.readdir(path.join(__dirname,'styles'), (err,data) => {
  data.forEach(file => {
    let currentPath = path.join(__dirname, 'styles', path.basename(file));
    
    fs.stat(currentPath, (error, stats) => {
      if (error) {
        console.log(error);
      }
      else {
        if (stats.isFile() && path.extname(file) == '.css') {

          fs.readFile(currentPath, 'utf8', (err, data) => {
            if (err) throw err;
            fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, function (err) {
              if (err) throw err;
            });
          });

        }
      }
    });
  });
});


