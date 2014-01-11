class Average
{
    public static function main()
    {
        var marks : Array<Int> = new Array();
        marks.push(10);
        marks.push(20);

        var iterator = new IntIterator(0, marks.length);
        var sum : Float = 0;
        for (i in iterator) {
            sum += marks[i];
        }

        trace(sum / marks.length);
    }
}