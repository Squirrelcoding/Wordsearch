# Wordsearch
Find *any* word in a directory, regardless of size and file extension!

## How to use Wordsearch
To use Wordsearch, you must have the following:
- Node.js 12+
- npm 6+

### Fork the repo
### Set up `config.json`
There are some options in `config.json`, here they are:

### `blacklistedFiles`
To ignore a file, just add it to the array of `blacklistedFiles`.

### `blacklisedDirectories`
Ignores a directory. **Keep in mind that this does not ignore it, it just dosen't add its result's to the log.**

### `keyWords`
Add the words you are looking for to the array. 

### `searchDir`
Enter the directory where you want to search the word(s) for.

## Run `setup.sh`
After setting up `config.json`, run the following command in the shell: `sh setup.sh`. This will install the dependencies in `package.json` and then run the script that will search for the words. \

## Logs being created
A folder called `wordFinderLogs` will be created and will contain your results. It look's very messy at the moment but it will look cleaner in future versions!

---
# Bugs
This is guranteed to have a LOT of bugs, so please report them in the [issues section!](https://github.com/Squirrelcoding/Wordsearch/issues)