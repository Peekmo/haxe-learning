class SuperTest extends haxe.unit.TestCase
{
    public function testTrue()
    {
        assertTrue(true); // Ça marchera sûrement
    }

    public function testFalse()
    {
        assertFalse(false); // Ça marchera aussi sûrement
    }

    public function testMaClasse()
    {
        var classe = new MaClasse();
        assertEquals('Salut', classe.returnString());
    }
}

