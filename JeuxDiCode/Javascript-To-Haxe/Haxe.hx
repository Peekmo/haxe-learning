@:native('Javascript') // Nom de classe originale (non obligatoire ici)
extern class Javascript // Classe qui ne doit pas être générée
{
    public function new() {}
    public function write(variable: Int) : Void;
    public function sum(a: Int, b: Int): Int;
}

class Haxe 
{  
    public static function concatenation(texte: String, entier: Int)
    {
        // Type "untyped" obligatoire lors de l'utilisation de la fonction
        // magique __js__ (idem pour __php__ etc..)
        // On execute directement du code javascript        
        return untyped __js__("concat")(texte, entier);
    }

    public static function main()
    {
        var js  : Javascript = new Javascript();
        js.write(js.sum(2, 3));
    }
}