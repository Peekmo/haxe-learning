
extern class Test
{
    public function new(): Void;
    public function test(): Void;
}


class Main
{
    public static function main()
    {
        // trace('ok');
        __cpp__("#include \"../lib/Test.h\"");
        var test = new Test();
        test.test();
    }
}