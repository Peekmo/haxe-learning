class Main
{
    public static function facultatifs(str: String, ?str2: String, ?entier: Int, ?str3: String) : Void
    {
        trace(str);
        trace(str2);
        trace(entier);
        trace(str3);
    }

    // @param func: Fonction ayant un paramètre string, et ne renvoyant rien (Void)
    public static function funcParam(func: String->Void): Void
    {
        var maVar : String = 'Ne sera pas utilisé dans la fonction';
        func('test !');
    }

    public static function main() : Void
    {
        var maVar : String = 'Super texte !';

        var varFunc = function(str: String) {
            trace(str);
            trace(maVar);
        }

        funcParam(varFunc);
    }
}

        //varFunc('test fonction');
