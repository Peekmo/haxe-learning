class Average
{
    /**
     * Using IntIterator object
     * @param  marks: Array<Int>    Marks
     * @return        Average
     */
    public static function withIntIterator(marks: Array<Int>) : Float
    {
        var iterator = new IntIterator(0, marks.length);
        var sum : Float = 0;
        for (i in iterator) {
            sum += marks[i];
        }

        return cast(sum/marks.length, Float);
    }

    /**
     * Using Array's Iterator
     * @param  marks: Array<Int>    Marks
     * @return        Average
     */
    public static function withArrayIterator(marks: Array<Int>) : Float
    {
        var iterator = marks.iterator();
        var sum : Float = 0;
        for (mark in iterator) {
            sum += mark;
        }

        return cast(sum/marks.length, Float);
    }

    /**
     * Main class
     */
    public static function main()
    {
        var marks : Array<Int> = new Array();
        marks.push(10);
        marks.push(20);

        var av = withIntIterator(marks);
        trace('IntIterator : ${av}');

        var av = withArrayIterator(marks);
        trace('ArrayIterator : ${av}');
    }
}