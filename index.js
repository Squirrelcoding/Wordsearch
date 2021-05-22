var fs = require('fs');
var path1 = require('path')
var _ = require('underscore')
var json = require('./config.json');
var moment  = require('moment');
/*
The list below includes all the directories. To check the directories, the blacklist checks if it includes 
it, and if it does it dosen't log the results in that directory
*/
var dirList = [];

if (!fs.existsSync('WordsearchLogs')){
  fs.mkdirSync('WordsearchLogs');
}


//Lines 18-23 make the log file.
var outputFile = path1.join("WordsearchLogs/" + moment().format('MMMM-D-YYYY_h.mm.ss') + ".txt");

fs.writeFile(outputFile, "=== Word Search Results ===\n", function(err) {
  if (err) {console.log(err)}
})



/*This is where the magic happens! */
function containsAny(str, items, daFile){

  //i is all the words that are being searched for
  for(var i in items){
      var item = items[i];
      var blacklistedFiles = json.blacklistedFiles;
      var dirBlacklist = json.blacklistedDirectories;

      for (var a in dirBlacklist) { //a is all the blacklisted directories.
        if (daFile.includes(dirBlackList[a])) {      //if directory is blacklisted
          if (dirBlacklist.length != 0) {
            continue;
          }
        }
      }
        if (blacklistedFiles.includes(daFile)) { //if file is blacklisted
          continue;
        }

        else if (str.includes(item)){   //if word is found
          fs.appendFile(outputFile, ("[!] Found Item: '" + item + "' in file " + daFile + "\n"), function(err, data) {
            if (err) {console.log(err);}
          })
        }

        else { //If word is not found.
          fs.appendFile(outputFile, ("Item Not Found: '" + item + "' in file " + daFile + "\n"), function(err, data) {
            if (err) {console.log(err);}
          })
        }
  }
}

//Get all the files in a directory
function getFiles(dir, files_){
  files_ = files_ || [];


  var files = fs.readdirSync(dir);

  for (var i in files){

      var name = dir + '/' + files[i];
      
      if (fs.statSync(name).isDirectory()){
          getFiles(name, files_);    //Append directory to list
          dirList.push(name)
      } else {
          //Append file to file list to check later.
          fs.readFile(name, 'utf8', function(err, data) {
            var lowerCaseData = data.toLowerCase();
            containsAny(lowerCaseData, list, filename)
          })
          files_.push(name);
      }
  }
  return files_;
}

//Useless function but it's still there.
function checkFile(filename, list) {
  fs.readFile(filename, 'utf8', function(err, data) {
    var lowerCaseData = data.toLowerCase();
    containsAny(lowerCaseData, list, filename)
  })
}

var list = json.keyWords;

getFiles(json.searchDir)