
class JeUXDiCode
{
    public var lesBool(default, null): Bool; // autorise lecture mais pas modification
    private var  floatMoi: Float; // Inaccessible depuis l'exterieur
    public static var electricite: Dynamic;

    public function new() // Constructeur unique
    {
        this.lesBool = true; // Mot clé "this" facultatif
        this.floatMoi = 2.4;
        electricite = {}; // "this" non utilisable pour var static
    }
}


typedef Table = { // Défini des variables mais de méthodes
    var largeur: Int;
    var longueur: Int;
}

class TypesTest
{
    public static function main(): Void
    {
        var string: String = '4';
        trace(string);

        var string2 = 5;
        trace(string2);

        // var string3 : String = 6; // Erreur de compilation
        // trace(string3);

        var jeudi : JeUXDiCode = new JeUXDiCode();
        trace(jeudi.lesBool);
        //trace(jeudi.floatMoi); // Impossible

        trace(JeUXDiCode.electricite); // Appel d'une var static sur une classe

        var tableCool : Table = {largeur: 5, longueur: 10};
    }
}