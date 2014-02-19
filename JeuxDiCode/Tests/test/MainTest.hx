class MainTest
{
    public static function main()
    {
        var runner = new haxe.unit.TestRunner();
        runner.add(new SuperTest());
        // On peut ajouter autant de tests que l'on veut

        runner.run();
    }
}