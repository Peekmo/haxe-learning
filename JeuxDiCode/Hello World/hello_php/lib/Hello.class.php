<?php

class Hello {
	public function __construct(){}
	static function main() {
		haxe_Log::trace("Hello World !", _hx_anonymous(array("fileName" => "Hello.hx", "lineNumber" => 5, "className" => "Hello", "methodName" => "main")));
	}
	function __toString() { return 'Hello'; }
}
