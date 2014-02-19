class Main
{
    public static function main()
    {
        var language : InterfaceLanguage;

        #if javascript
            language = new Javascript();
        #elseif neko
            language = new Neko();
        #else
            throw "Language non supporté";
        #end

        language.talk();
    }
}

