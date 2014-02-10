class Asynchronus implements async.Build
{
    @async static function wait() : Many<String>
    {
        for (i in 0...1000000) {}
        trace('Done');
        return many('Yop');
    }
}

class Main 
{  
    public static function main()
    {
        var str: String;
        [str] = Asynchronus.wait();
        trace('Salut');
    }
}