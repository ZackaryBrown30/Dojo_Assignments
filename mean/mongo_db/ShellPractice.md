Last login: Tue Jan 14 12:25:57 on ttys000
zackarybrown@zackarys-MacBook-Pro ~ % cd Documents/Dojo_Assignments
zackarybrown@zackarys-MacBook-Pro Dojo_Assignments % ls
JsNotes.md		java
README.md		mean
Web_fundamentals	projects
git instructions.md	python_stack
zackarybrown@zackarys-MacBook-Pro Dojo_Assignments % cd mean/  
zackarybrown@zackarys-MacBook-Pro mean % ls
Js_oop	angular	express	js_fun	node	notes
zackarybrown@zackarys-MacBook-Pro mean % mkdir mongo_db
zackarybrown@zackarys-MacBook-Pro mean % cd mongo_db 
zackarybrown@zackarys-MacBook-Pro mongo_db % mongo
MongoDB shell version v4.2.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
2020-01-14T13:32:43.363-0800 E  QUERY    [js] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SockeatException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:341:17
@(connect):2:6
2020-01-14T13:32:43.366-0800 F  -        [main] exception: connect failed
2020-01-14T13:32:43.366-0800 E  -        [main] exiting with code 1
zackarybrown@zackarys-MacBook-Pro mongo_db % npm install -g mongodb
+ mongodb@3.4.1
added 9 packages from 6 contributors in 0.746s


   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │      New patch version of npm available! 6.13.4 → 6.13.6       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.13.6   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯

zackarybrown@zackarys-MacBook-Pro mongo_db % npm install -g npm
/usr/local/bin/npx -> /usr/local/lib/node_modules/npm/bin/npx-cli.js
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
npm ERR! code EEXIST
npm ERR! syscall symlink
npm ERR! path ../../../lib/node_modules/npm/man/man1/npm-adduser.1
npm ERR! dest /usr/local/share/man/man1/npm-adduser.1
npm ERR! errno -17
npm ERR! EEXIST: file already exists, symlink '../../../lib/node_modules/npm/man/man1/npm-adduser.1' -> '/usr/local/share/man/man1/npm-adduser.1'
npm ERR! File exists: /usr/local/share/man/man1/npm-adduser.1
npm ERR! Remove the existing file and try again, or run npm
npm ERR! with --force to overwrite files recklessly.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/zackarybrown/.npm/_logs/2020-01-14T21_33_22_125Z-debug.log
zackarybrown@zackarys-MacBook-Pro mongo_db % sudo !!
sudo npm install -g npm
Password:
sudo: npm: command not found
zackarybrown@zackarys-MacBook-Pro mongo_db % sudo npm -i -g npm
sudo: npm: command not found
zackarybrown@zackarys-MacBook-Pro mongo_db % npm
zsh: command not found: npm
zackarybrown@zackarys-MacBook-Pro mongo_db % brew install npm
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
awscurl        dsvpn          findomain      glow
==> Updated Formulae
git ✔                         libvterm
acpica                        libxkbcommon
ammonite-repl                 mafft
artifactory                   magic-wormhole
ask-cli                       makedepend
atlassian-cli                 man-db
aws-elasticbeanstalk          mariadb
awscli                        mariadb@10.2
azure-cli                     mariadb@10.3
babel                         mda-lv2
balena-cli                    mdcat
bcftools                      mg
bit                           minio-mc
broot                         multimarkdown
cfn-lint                      mutt
convox                        mysql
cromwell                      mysql@5.6
csvq                          mysql@5.7
dhall                         node@12
dhall-json                    okteto
doctl                         opa
erlang                        pagmo
fades                         pdsh
fail2ban                      perltidy
fdroidserver                  phpstan
feedgnuplot                   pipx
firebase-cli                  pnpm
fluent-bit                    python-yq
fluxctl                       rhino
gitleaks                      rocksdb
golang-migrate                serverless
htslib                        shadowsocks-libev
httpie                        shfmt
imagemagick                   snapcraft
imagemagick@6                 stress-ng
imgproxy                      svtplay-dl
interactive-rebase-tool       tintin
jenkins                       tomee-jax-rs
kepubify                      tomee-plume
kind                          twtxt
libopenmpt                    verilator
libsixel                      xdotool
libuv
==> Deleted Formulae
apel                aws-elasticache     trr
auto-scaling        aws-sns-cli

Warning: node 13.6.0 is already installed and up-to-date
To reinstall 13.6.0, run `brew reinstall node`
zackarybrown@zackarys-MacBook-Pro mongo_db % brew reinstall node
==> Reinstalling node 
==> Downloading https://homebrew.bintray.com/bottles/node-
Already downloaded: /Users/zackarybrown/Library/Caches/Homebrew/downloads/ae37f7be85f2279494644d4b581706f9482d6d492e04e6fbf2f5e1d9be563e24--node-13.6.0.catalina.bottle.tar.gz
==> Pouring node-13.6.0.catalina.bottle.tar.gz
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d
==> Summary
🍺  /usr/local/Cellar/node/13.6.0: 4,663 files, 60MB
zackarybrown@zackarys-MacBook-Pro mongo_db % mongo
MongoDB shell version v4.2.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
2020-01-14T13:34:50.955-0800 E  QUERY    [js] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:341:17
@(connect):2:6
2020-01-14T13:34:50.959-0800 F  -        [main] exception: connect failed
2020-01-14T13:34:50.959-0800 E  -        [main] exiting with code 1
zackarybrown@zackarys-MacBook-Pro mongo_db % clear

zackarybrown@zackarys-MacBook-Pro mongo_db % npm install -g mongodb
+ mongodb@3.4.1
updated 1 package in 0.932s
zackarybrown@zackarys-MacBook-Pro mongo_db % mongo
MongoDB shell version v4.2.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
2020-01-14T13:35:06.144-0800 E  QUERY    [js] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:341:17
@(connect):2:6
2020-01-14T13:35:06.147-0800 F  -        [main] exception: connect failed
2020-01-14T13:35:06.147-0800 E  -        [main] exiting with code 1
zackarybrown@zackarys-MacBook-Pro mongo_db % brew serices start mongodb-community
Error: Unknown command: serices
zackarybrown@zackarys-MacBook-Pro mongo_db % mongo
MongoDB shell version v4.2.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
2020-01-14T13:36:51.378-0800 E  QUERY    [js] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:341:17
@(connect):2:6
2020-01-14T13:36:51.380-0800 F  -        [main] exception: connect failed
2020-01-14T13:36:51.381-0800 E  -        [main] exiting with code 1
zackarybrown@zackarys-MacBook-Pro mongo_db % brew tap mongodb/brew
zackarybrown@zackarys-MacBook-Pro mongo_db % brew install mongodb-community
Warning: mongodb/brew/mongodb-community 4.2.2 is already installed and up-to-date
To reinstall 4.2.2, run `brew reinstall mongodb-community`
zackarybrown@zackarys-MacBook-Pro mongo_db % brew reinstall mongodb-community
==> Reinstalling mongodb/brew/mongodb-community 
==> Downloading https://fastdl.mongodb.org/osx/mongodb-mac
Already downloaded: /Users/zackarybrown/Library/Caches/Homebrew/downloads/089f0d4e7b01b01d4a8965a98dd6e64785ed95da081b74ca6ae0e280d0d67a6e--mongodb-macos-x86_64-4.2.2.tgz
==> Caveats
To have launchd start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
==> Summary
🍺  /usr/local/Cellar/mongodb-community/4.2.2: 21 files, 274.5MB, built in 5 seconds
zackarybrown@zackarys-MacBook-Pro mongo_db % mongo
MongoDB shell version v4.2.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
2020-01-14T13:38:01.028-0800 E  QUERY    [js] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
connect@src/mongo/shell/mongo.js:341:17
@(connect):2:6
2020-01-14T13:38:01.030-0800 F  -        [main] exception: connect failed
2020-01-14T13:38:01.030-0800 E  -        [main] exiting with code 1
zackarybrown@zackarys-MacBook-Pro mongo_db % brew services start mongodb-community
==> Successfully started `mongodb-community` (label: homeb
zackarybrown@zackarys-MacBook-Pro mongo_db % brew
Example usage:
  brew search [TEXT|/REGEX/]
  brew info [FORMULA...]
  brew install FORMULA...
  brew update
  brew upgrade [FORMULA...]
  brew uninstall FORMULA...
  brew list [FORMULA...]

Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA

Contributing:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh
zackarybrown@zackarys-MacBook-Pro mongo_db % mongo
MongoDB shell version v4.2.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("95730062-d906-479f-8dfe-527372677195") }
MongoDB server version: 4.2.2
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
Server has startup warnings: 
2020-01-14T13:38:16.438-0800 I  CONTROL  [initandlisten] 
2020-01-14T13:38:16.438-0800 I  CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2020-01-14T13:38:16.438-0800 I  CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2020-01-14T13:38:16.438-0800 I  CONTROL  [initandlisten] 
---
Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

> clr
2020-01-14T13:38:32.843-0800 E  QUERY    [js] uncaught exception: ReferenceError: clr is not defined :
@(shell):1:1
> clear
2020-01-14T13:38:34.483-0800 E  QUERY    [js] uncaught exception: ReferenceError: clear is not defined :
@(shell):1:1
> use my_first_db
switched to db my_first_db
> db.students.insertOne()
2020-01-14T13:40:23.525-0800 E  QUERY    [js] uncaught exception: Error: argument passed to addIdIfNeeded is not an object :
DBCollection.prototype.addIdIfNeeded@src/mongo/shell/crud_api.js:31:15
DBCollection.prototype.insertOne@src/mongo/shell/crud_api.js:250:16
@(shell):1:1
> db.find()
2020-01-14T13:40:32.253-0800 E  QUERY    [js] uncaught exception: TypeError: db.find is not a function :
@(shell):1:1
> db.students.insertMany([
... {name: 'Zack', home_state: 'Louisiana', lucky_number: 42, birthday: {month: 09, day: 16, year: 1990}}]};
2020-01-14T13:44:11.404-0800 E  QUERY    [js] uncaught exception: SyntaxError: missing ) after argument list :
@(shell):2:102
> db.students.insertMany([ {name: 'Zack', home_state: 'Louisiana', lucky_number: 42, birthday: {month: 09, day: 16, year: 1990}}]);
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5e1e3653bd7f9978fb35fac7")
	]
}
> db.students.insertMany([ {name: 'Alina', home_state: 'California', lucky_number: 08, birthday: {month: 06, day: 19, year: 1990}}]);
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5e1e3680bd7f9978fb35fac8")
	]
}
> db.students.insertMany([ {name: 'Alina', home_state: 'California', lucky_number: 08, birthday: {month: 06, day: 19, year: 1990}}]);
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5e1e3847bd7f9978fb35fac9")
	]
}
> db.students.insertMany([ {name: 'Praminamine', home_state: 'Nepal', lucky_number: 13, birthday: {month: 01, day: 01, year: 1996}},
... {name: 'Binyam', home_state: 'Eritrea', lucky_number: 09, birthday: {month: 01, day: 01, year: 1985}},
... ]);
{
	"acknowledged" : true,
	"insertedIds" : [
		ObjectId("5e1e3869bd7f9978fb35faca"),
		ObjectId("5e1e3869bd7f9978fb35facb")
	]
}
> db.students.find({})
{ "_id" : ObjectId("5e1e3653bd7f9978fb35fac7"), "name" : "Zack", "home_state" : "Louisiana", "lucky_number" : 42, "birthday" : { "month" : 9, "day" : 16, "year" : 1990 } }
{ "_id" : ObjectId("5e1e3680bd7f9978fb35fac8"), "name" : "Alina", "home_state" : "California", "lucky_number" : 8, "birthday" : { "month" : 6, "day" : 19, "year" : 1990 } }
{ "_id" : ObjectId("5e1e3847bd7f9978fb35fac9"), "name" : "Alina", "home_state" : "California", "lucky_number" : 8, "birthday" : { "month" : 6, "day" : 19, "year" : 1990 } }
{ "_id" : ObjectId("5e1e3869bd7f9978fb35faca"), "name" : "Praminamine", "home_state" : "Nepal", "lucky_number" : 13, "birthday" : { "month" : 1, "day" : 1, "year" : 1996 } }
{ "_id" : ObjectId("5e1e3869bd7f9978fb35facb"), "name" : "Binyam", "home_state" : "Eritrea", "lucky_number" : 9, "birthday" : { "month" : 1, "day" : 1, "year" : 1985 } }
> db.students.find({}).pretty
function() {
    this._prettyShell = true;
    return this;
}
> db.students.find({}).pretty()
{
	"_id" : ObjectId("5e1e3653bd7f9978fb35fac7"),
	"name" : "Zack",
	"home_state" : "Louisiana",
	"lucky_number" : 42,
	"birthday" : {
		"month" : 9,
		"day" : 16,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3680bd7f9978fb35fac8"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3847bd7f9978fb35fac9"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35faca"),
	"name" : "Praminamine",
	"home_state" : "Nepal",
	"lucky_number" : 13,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1996
	}
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	}
}
> db.students.find({lucky_number: {$gt:3}}).pretty()
{
	"_id" : ObjectId("5e1e3653bd7f9978fb35fac7"),
	"name" : "Zack",
	"home_state" : "Louisiana",
	"lucky_number" : 42,
	"birthday" : {
		"month" : 9,
		"day" : 16,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3680bd7f9978fb35fac8"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3847bd7f9978fb35fac9"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35faca"),
	"name" : "Praminamine",
	"home_state" : "Nepal",
	"lucky_number" : 13,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1996
	}
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	}
}
db.students.find({home_state: {$et: California, Washington}}).pretty()
db.students.find({lucky_number: {$gt: 3, $lte: 10} }).pretty()

db.students.updateMany({},{$addToSet: {interests: ["coding", "brunch", "mongo_db"]}})
---
Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

> db.students.find({lucky_number: {$gt: 3, lte: 10} }).pretty()
Error: error: {
	"ok" : 0,
	"errmsg" : "unknown operator: lte",
	"code" : 2,
	"codeName" : "BadValue"
}
> db.students.find({lucky_number: {$gt: 3, $lte: 10} }).pretty()
{
	"_id" : ObjectId("5e1e3680bd7f9978fb35fac8"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3847bd7f9978fb35fac9"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	}
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	}
}
> db.students.updateMany({},{$addTOSet: {interests: ["coding", "brunch", "mongo_db"]}})
2020-01-14T14:31:45.367-0800 E  QUERY    [js] WriteError({
	"index" : 0,
	"code" : 9,
	"errmsg" : "Unknown modifier: $addTOSet. Expected a valid update modifier or pipeline-style update specified as an array",
	"op" : {
		"q" : {
			
		},
		"u" : {
			"$addTOSet" : {
				"interests" : [
					"coding",
					"brunch",
					"mongo_db"
				]
			}
		},
		"multi" : true,
		"upsert" : false
	}
}) :
WriteError({
	"index" : 0,
	"code" : 9,
	"errmsg" : "Unknown modifier: $addTOSet. Expected a valid update modifier or pipeline-style update specified as an array",
	"op" : {
		"q" : {
			
		},
		"u" : {
			"$addTOSet" : {
				"interests" : [
					"coding",
					"brunch",
					"mongo_db"
				]
			}
		},
		"multi" : true,
		"upsert" : false
	}
})
WriteError@src/mongo/shell/bulk_api.js:458:48
mergeBatchResults@src/mongo/shell/bulk_api.js:855:49
executeBatch@src/mongo/shell/bulk_api.js:919:13
Bulk/this.execute@src/mongo/shell/bulk_api.js:1163:21
DBCollection.prototype.updateMany@src/mongo/shell/crud_api.js:690:17
@(shell):1:1
> db.students.updateMany({},{$addToSet: {interests: ["coding", "brunch", "mongo_db"]}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }
> db.studnets.find({})
> db.students.find({}).pretty()
{
	"_id" : ObjectId("5e1e3653bd7f9978fb35fac7"),
	"name" : "Zack",
	"home_state" : "Louisiana",
	"lucky_number" : 42,
	"birthday" : {
		"month" : 9,
		"day" : 16,
		"year" : 1990
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
{
	"_id" : ObjectId("5e1e3680bd7f9978fb35fac8"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
{
	"_id" : ObjectId("5e1e3847bd7f9978fb35fac9"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35faca"),
	"name" : "Praminamine",
	"home_state" : "Nepal",
	"lucky_number" : 13,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1996
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
> db.students.updateOne( {name: 'Alina'} {$push:{interests: 'Mukbang' , 'ASMR'})
... 
... ;
... }}
2020-01-14T14:40:33.519-0800 E  QUERY    [js] uncaught exception: SyntaxError: missing ) after argument list :
@(shell):1:39
> db.students.updateOne( {name: 'Alina'}, {$push:{interests: 'Mukbang' , 'ASMR'}});
2020-01-14T14:41:28.440-0800 E  QUERY    [js] uncaught exception: SyntaxError: missing : after property id :
@(shell):1:77
> db.students.updateOne( {name: 'Alina'}, {$push:{interests: ['Mukbang' , 'ASMR']}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.updateOne( {name: 'Zack'}, {$push:{interests: ['Motorcycles' , 'Metal']}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.updateOne( {name: 'Pramila'}, {$push:{interests: ['Boys' , 'Boys']}});
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.students.find({});
{ "_id" : ObjectId("5e1e3653bd7f9978fb35fac7"), "name" : "Zack", "home_state" : "Louisiana", "lucky_number" : 42, "birthday" : { "month" : 9, "day" : 16, "year" : 1990 }, "interests" : [ [ "coding", "brunch", "mongo_db" ], [ "Motorcycles", "Metal" ] ] }
{ "_id" : ObjectId("5e1e3680bd7f9978fb35fac8"), "name" : "Alina", "home_state" : "California", "lucky_number" : 8, "birthday" : { "month" : 6, "day" : 19, "year" : 1990 }, "interests" : [ [ "coding", "brunch", "mongo_db" ], [ "Mukbang", "ASMR" ] ] }
{ "_id" : ObjectId("5e1e3847bd7f9978fb35fac9"), "name" : "Alina", "home_state" : "California", "lucky_number" : 8, "birthday" : { "month" : 6, "day" : 19, "year" : 1990 }, "interests" : [ [ "coding", "brunch", "mongo_db" ] ] }
{ "_id" : ObjectId("5e1e3869bd7f9978fb35faca"), "name" : "Praminamine", "home_state" : "Nepal", "lucky_number" : 13, "birthday" : { "month" : 1, "day" : 1, "year" : 1996 }, "interests" : [ [ "coding", "brunch", "mongo_db" ] ] }
{ "_id" : ObjectId("5e1e3869bd7f9978fb35facb"), "name" : "Binyam", "home_state" : "Eritrea", "lucky_number" : 9, "birthday" : { "month" : 1, "day" : 1, "year" : 1985 }, "interests" : [ [ "coding", "brunch", "mongo_db" ] ] }
> db.students.find({}).pretty()
{
	"_id" : ObjectId("5e1e3653bd7f9978fb35fac7"),
	"name" : "Zack",
	"home_state" : "Louisiana",
	"lucky_number" : 42,
	"birthday" : {
		"month" : 9,
		"day" : 16,
		"year" : 1990
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		],
		[
			"Motorcycles",
			"Metal"
		]
	]
}
{
	"_id" : ObjectId("5e1e3680bd7f9978fb35fac8"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		],
		[
			"Mukbang",
			"ASMR"
		]
	]
}
{
	"_id" : ObjectId("5e1e3847bd7f9978fb35fac9"),
	"name" : "Alina",
	"home_state" : "California",
	"lucky_number" : 8,
	"birthday" : {
		"month" : 6,
		"day" : 19,
		"year" : 1990
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35faca"),
	"name" : "Praminamine",
	"home_state" : "Nepal",
	"lucky_number" : 13,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1996
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		]
	]
}
> db.students.updateOne( {name: 'Praminamine'}, {$push:{interests: ['Boys' , 'Boys']}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.updateOne( {name: 'Binyam'}, {$push:{interests: ['Money' , 'Working Out']}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.updateOne( {name: 'Binyam'}, {$push:{interests: ['Taxes']}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.updateOne( {name: 'Binyam'}, {$pop:{array_key: (1)}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
> db.students.find({name: 'binyam'}).pretty()
> db.students.find({name: 'Binyam'}).pretty()
'{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		],
		[
			"Money",
			"Working Out"
		],
		[
			"Taxes"
		]
	]
}
> db.students.updateOne( {name: 'Binyam'}, {$pop:{array_key: (1)}});
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }
> db.students.find({name: 'Binyam'}).pretty()
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		],
		[
			"Money",
			"Working Out"
		],
		[
			"Taxes"
		]
	]
}
> db.students.update( {name: 'Binyam'}, {$pop:{array_key: (1)}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })
> db.students.find({name: 'Binyam'}).pretty()
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		],
		[
			"Money",
			"Working Out"
		],
		[
			"Taxes"
		]
	]
}
> db.students.update( {name: 'Binyam'}, {$pop:{interests: (1)}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.find({name: 'Binyam'}).pretty()
{
	"_id" : ObjectId("5e1e3869bd7f9978fb35facb"),
	"name" : "Binyam",
	"home_state" : "Eritrea",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 1,
		"day" : 1,
		"year" : 1985
	},
	"interests" : [
		[
			"coding",
			"brunch",
			"mongo_db"
		],
		[
			"Money",
			"Working Out"
		]
	]
}
> db.students.remove({name: "Praminamine"})
WriteResult({ "nRemoved" : 1 })
> db.students.remove({home_state: "Eritrea"})
WriteResult({ "nRemoved" : 1 })
> 

Add some unique interests for each particular student into each of their interest arrays.

db.students.updateOne( {name: 'Zack'}, {$push:{interests: ['Motorcycles' , 'Metal']}});

db.students.updateOne( {name: 'Binyam'}, {$pop:{array_key: (1)}});

db.students.remove({name: "Praminamine"})

db.students.remove({home_state: "Eritrea"})