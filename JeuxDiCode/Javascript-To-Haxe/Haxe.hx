extern class Javascript
{
    public function new() {}
    public function write(variable: Int) : Void;
    public function sum(a: Int, b: Int): Int;
}

class Haxe 
{  
    public static function main()
    {
        var js  : Javascript = new Javascript();
        js.write(js.sum(2, 3));
    }
}