Script started on Sat 11 Jan 2014 08:11:17 AM CET
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ j
java         jexec        jockey-gtk   join         jot          json_pp
javaws       jobs         jockey-text  join-dctrl   jpegtopnm    
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ j[Kjsc helloworld.js 
No command 'jsc' found, did you mean:
 Command 'osc' from package 'osc' (universe)
 Command 'psc' from package 'sc' (universe)
 Command 'jsvc' from package 'jsvc' (universe)
 Command 'dsc' from package 'dsc-statistics-collector' (universe)
 Command 'hsc' from package 'hsc' (universe)
 Command 'js' from package 'rhino' (main)
 Command 'js' from package 'nodejs' (universe)
 Command 'asc' from package 'asc' (universe)
 Command 'rsc' from package 'radare-common' (universe)
 Command 'csc' from package 'chicken-bin' (universe)
 Command 'jsb' from package 'jsonbot' (universe)
 Command 'fsc' from package 'scala' (universe)
 Command 'gsc' from package 'gambc' (universe)
 Command 'sc' from package 'sc' (universe)
jsc: command not found
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mkdir HelloWorld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ cp [K[K[Kmv 
build.hxml     HelloWorld/    HelloWorld.hx  helloworld.js  test.html
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mv *. HelloWorld
mv: cannot stat `*.': No such file or directory
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mv *. HelloWorld[C[Ch HelloWorldx HelloWorld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mv *.hx HelloWorld[1P HelloWorld[1P HelloWorldj HelloWorlds HelloWorld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mv *.js HelloWorld[1P HelloWorld[1P HelloWorldh HelloWorldx HelloWorld* HelloWorld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mv *.hx* HelloWorld[C[1P HelloWorld[1P HelloWorld[1P HelloWorldh HelloWorldt HelloWorldl HelloWorld[1P HelloWorldm HelloWorldl HelloWorld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ cp ../Haxe/[K[K[K[K[K[K[K[K[K[K[Kcp HelloWorld/build.hxml .
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ cp HelloWorld/build.hxml .
cp: cannot stat `HelloWorld/build.hxml': No such file or directory
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ cp HelloWorld/build.hxml .
cp: cannot stat `HelloWorld/build.hxml': No such file or directory
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ cp HelloWorld/build.hxml .[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[Khaxe build.hxml 
Error: : Invalid directory.
Haxe Compiler 3.0.1 - (C)2005-2013 Haxe Foundation
 Usage : haxe -main <class> [-swf|-js|-neko|-php|-cpp|-as3] <output> [options]
 Options :
  -cp <path> : add a directory to find source files
  -js <file> : compile code to JavaScript file
  -swf <file> : compile code to Flash SWF file
  -as3 <directory> : generate AS3 code into target directory
  -neko <file> : compile code to Neko Binary
  -php <directory> : generate PHP code into target directory
  -cpp <directory> : generate C++ code into target directory
  -cs <directory> : generate C# code into target directory
  -java <directory> : generate Java code into target directory
  -xml <file> : generate XML types description
  -main <class> : select startup class
  -lib <library[:version]> : use a haxelib library
  -D <var> : define a conditional compilation flag
  -v : turn on verbose mode
  -debug : add debug information to the compiled code
  -dce [std|full|no] : set the dead code elimination mode
  -swf-version <version> : change the SWF version (6 to 10)
  -swf-header <header> : define SWF header (width:height:fps:color)
  -swf-lib <file> : add the SWF library to the compiled SWF
  -swf-lib-extern <file> : use the SWF library for type checking
  -java-lib <file> : add an external JAR or class directory library
  -x <file> : shortcut for compiling and executing a neko file
  -resource <file>[@name] : add a named resource file
  -prompt : prompt on error
  -cmd : run the specified command after successful compilation
  --flash-strict : more type strict flash API
  --no-traces : don't compile trace calls in the program
  --gen-hx-classes : generate hx headers for all input classes
  --next : separate several haxe compilations
  --display : display code tips
  --no-output : compiles but does not generate any file
  --times : measure compilation times
  --no-inline : disable inlining
  --no-opt : disable code optimizations
  --php-front <filename> : select the name for the php front file
  --php-lib <filename> : select the name for the php lib folder
  --php-prefix <name> : prefix all classes with given name
  --remap <package:target> : remap a package to another one
  --interp : interpret the program using internal macro system
  --macro  : call the given macro before typing anything else
  --wait <[host:]port> : wait on the given port for commands to run)
  --connect <[host:]port> : connect on the given port and run commands there)
  --cwd <dir> : set current working directory
  -version : print version and exit
  --help-defines : print help for all compiler specific defines
  --help-metas : print help for all compiler metadatas
  -help  Display this list of options
  --help  Display this list of options

peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ haxe build.hxml 
Class not found : HelloWorld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ haxe build.hxml 
Error: : Invalid directory.
Haxe Compiler 3.0.1 - (C)2005-2013 Haxe Foundation
 Usage : haxe -main <class> [-swf|-js|-neko|-php|-cpp|-as3] <output> [options]
 Options :
  -cp <path> : add a directory to find source files
  -js <file> : compile code to JavaScript file
  -swf <file> : compile code to Flash SWF file
  -as3 <directory> : generate AS3 code into target directory
  -neko <file> : compile code to Neko Binary
  -php <directory> : generate PHP code into target directory
  -cpp <directory> : generate C++ code into target directory
  -cs <directory> : generate C# code into target directory
  -java <directory> : generate Java code into target directory
  -xml <file> : generate XML types description
  -main <class> : select startup class
  -lib <library[:version]> : use a haxelib library
  -D <var> : define a conditional compilation flag
  -v : turn on verbose mode
  -debug : add debug information to the compiled code
  -dce [std|full|no] : set the dead code elimination mode
  -swf-version <version> : change the SWF version (6 to 10)
  -swf-header <header> : define SWF header (width:height:fps:color)
  -swf-lib <file> : add the SWF library to the compiled SWF
  -swf-lib-extern <file> : use the SWF library for type checking
  -java-lib <file> : add an external JAR or class directory library
  -x <file> : shortcut for compiling and executing a neko file
  -resource <file>[@name] : add a named resource file
  -prompt : prompt on error
  -cmd : run the specified command after successful compilation
  --flash-strict : more type strict flash API
  --no-traces : don't compile trace calls in the program
  --gen-hx-classes : generate hx headers for all input classes
  --next : separate several haxe compilations
  --display : display code tips
  --no-output : compiles but does not generate any file
  --times : measure compilation times
  --no-inline : disable inlining
  --no-opt : disable code optimizations
  --php-front <filename> : select the name for the php front file
  --php-lib <filename> : select the name for the php lib folder
  --php-prefix <name> : prefix all classes with given name
  --remap <package:target> : remap a package to another one
  --interp : interpret the program using internal macro system
  --macro  : call the given macro before typing anything else
  --wait <[host:]port> : wait on the given port for commands to run)
  --connect <[host:]port> : connect on the given port and run commands there)
  --cwd <dir> : set current working directory
  -version : print version and exit
  --help-defines : print help for all compiler specific defines
  --help-metas : print help for all compiler metadatas
  -help  Display this list of options
  --help  Display this list of options

peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ cp [K[K[Kv HelloWorld/* .
v: command not found
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ v HelloWorld/* .[1@m
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ nek [Ko helloworld.
Uncaught exception - load.c(181) : Module not found : helloworld.
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ neko helloworld.n
HelloWorld.hx:5: Hello World
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ nekotools build.hxml [K[K[K[K[K[K[K[K[K[K[Kboot helloworld.n 
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ /§[K:[Khome/[K[K[K[K[Khell[K[K[K[K[Kls
build.hxml  [0m[01;34mHelloWorld[0m     helloworld.js  test.html
[01;32mhelloworld[0m  HelloWorld.hx  helloworld.n
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ ./helloworld 
HelloWorld.hx:5: Hello World
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ rm helloworld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mv helloworld.* HelloWorld
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ rm HelloWorld.hx 
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ mv test.html HelloWorld/
peekmo@Peekmo ~/Haxe [0;36m[0;31m[0m$ git init
Initialized empty Git repository in /home/peekmo/Haxe/.git/
peekmo@Peekmo ~/Haxe [0;36m[0;31m*[0m$ git remote add origin git@github.com:Peekmo/haxe-learni ng.git
peekmo@Peekmo ~/Haxe [0;36m[0;31m*[0m$ git push origin master
error: src refspec master does not match any.
error: failed to push some refs to 'git@github.com:Peekmo/haxe-learning.git'
peekmo@Peekmo ~/Haxe [0;36m[0;31m*[0m$ git push origin masterremote add origin git@github.com:Peekmo/haxe-learninng.git[Apeekmo@Peekmo ~/Haxe [0;36m[0;31m*[0m$ [C[C[C[C[33Ppush origin master
[K[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[1@ [1@-[1@u
error: src refspec master does not match any.
error: failed to push some refs to 'git@github.com:Peekmo/haxe-learning.git'
peekmo@Peekmo ~/Haxe [0;36m[0;31m*[0m$ mv[K[Kcp build.hxml HelloWorld/
peekmo@Peekmo ~/Haxe [0;36m[0;31m*[0m$ git add -A
peekmo@Peekmo ~/Haxe [0;36m[0;31m*[0m$ git commit -m "Hello World"
[master (root-commit) c2864b9] Hello World
 6 files changed, 167 insertions(+)
 create mode 100644 HelloWorld/HelloWorld.hx
 create mode 100644 HelloWorld/build.hxml
 create mode 100644 HelloWorld/helloworld.js
 create mode 100644 HelloWorld/helloworld.n
 create mode 100644 HelloWorld/test.html
 create mode 100644 build.hxml
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m[0m$ git push origin master 
Counting objects: 8, done.
Delta compression using up to 4 threads.
Compressing objects:  12% (1/8)   Compressing objects:  25% (2/8)   Compressing objects:  37% (3/8)   Compressing objects:  50% (4/8)   Compressing objects:  62% (5/8)   Compressing objects:  75% (6/8)   Compressing objects:  87% (7/8)   Compressing objects: 100% (8/8)   Compressing objects: 100% (8/8), done.
Writing objects:  12% (1/8)   Writing objects:  25% (2/8)   Writing objects:  37% (3/8)   Writing objects:  50% (4/8)   Writing objects:  62% (5/8)   Writing objects:  75% (6/8)   Writing objects:  87% (7/8)   Writing objects: 100% (8/8)   Writing objects: 100% (8/8), 7.96 KiB, done.
Total 8 (delta 0), reused 0 (delta 0)
To git@github.com:Peekmo/haxe-learning.git
 * [new branch]      master -> master
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m[0m$ git push origin master commit -m "Hello World"add -A[Kcp build.hxml HelloWorld/git push -u origin master[3P[C[C[C[C[C[C[C[C[C[C[C[C[Cremote add origin git@github.com:Peekmo/haxe--learning.git[Apeekmo@Peekmo ~/Haxe [0;36m(master)[0;31m[0m$ [C[C[C[Cinit[K
[K[A[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[C[Cmv test.html HelloWorld/[7Prm HelloWorld.hx mv helloworld.* HelloWorld[13Prm helloworld./helloworld ls[Knekotools boot helloworld.n [11P helloworld.n[K[K[K[K[K[K[K[K[K[K[K[Kaverage.n 
Average.hx:15: 15
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ cp [K[K[Kneko average.n [8@git push origin master[C[8Pneko average.n[Ccp average.* [K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[Kmv average.* Average/
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ cp build.hxml ave[K[K[KAverage/
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ git add -A
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ git commit -m "First loop / array"
[master 93a95e0] First loop / array
 6 files changed, 108 insertions(+), 4 deletions(-)
 create mode 100644 Average/Average.hx
 create mode 100644 Average/average.js
 create mode 100644 Average/average.n
 create mode 100644 Average/build.hxml
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m[0m$ git push origin master 
Counting objects: 12, done.
Delta compression using up to 4 threads.
Compressing objects:  11% (1/9)   Compressing objects:  22% (2/9)   Compressing objects:  33% (3/9)   Compressing objects:  44% (4/9)   Compressing objects:  55% (5/9)   Compressing objects:  66% (6/9)   Compressing objects:  77% (7/9)   Compressing objects:  88% (8/9)   Compressing objects: 100% (9/9)   Compressing objects: 100% (9/9), done.
Writing objects:  11% (1/9)   Writing objects:  22% (2/9)   Writing objects:  33% (3/9)   Writing objects:  44% (4/9)   Writing objects:  55% (5/9)   Writing objects:  66% (6/9)   Writing objects:  77% (7/9)   Writing objects:  88% (8/9)   Writing objects: 100% (9/9)   Writing objects: 100% (9/9), 7.81 KiB, done.
Total 9 (delta 2), reused 0 (delta 0)
To git@github.com:Peekmo/haxe-learning.git
   c2864b9..93a95e0  master -> master
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m[0m$ git pull origin master 
remote: Counting objects: 4, done.[K
remote: Compressing objects:  50% (1/2)   [Kremote: Compressing objects: 100% (2/2)   [Kremote: Compressing objects: 100% (2/2), done.[K
remote: Total 3 (delta 0), reused 0 (delta 0)[K
Unpacking objects:  33% (1/3)   Unpacking objects:  66% (2/3)   Unpacking objects: 100% (3/3)   Unpacking objects: 100% (3/3), done.
From github.com:Peekmo/haxe-learning
 * branch            master     -> FETCH_HEAD
Updating 93a95e0..027dc50
Fast-forward
 README.md |    1 +
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m[0m$ s[Kneko average.n 
Average.hx:21: 15
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ neko average.n 
Average.hx:45: IntIterator : 15
Called from ? line 1
Called from Average.hx line 47
Called from Average.hx line 29
Uncaught exception - Invalid operation (+)
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ neko average.n 
Average.hx:45: IntIterator : 15
Called from ? line 1
Called from Average.hx line 47
Called from Average.hx line 29
Uncaught exception - Invalid operation (+)
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ neko average.n 
Average.hx:45: IntIterator : 15
Called from ? line 1
Called from Average.hx line 47
Called from Average.hx line 29
Uncaught exception - Invalid operation (+)
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ neko average.n 
Average.hx:45: IntIterator : ${av}
Called from ? line 1
Called from Average.hx line 47
Called from Average.hx line 29
Uncaught exception - Invalid operation (+)
peekmo@Peekmo ~/Haxe [0;36m(master)[0;31m*[0m$ neko average.n 
Average.hx:45: I