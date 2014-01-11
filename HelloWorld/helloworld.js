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
  --