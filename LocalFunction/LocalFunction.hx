class LocalFunction
{
    /**
     * Method to call the callback function with data passed
     * @param  data     :             String  Data to send to the callback
     * @param  callback :             (String -> Void) Callback function
     */
    public static function call(data : String, callback : (String -> Void)) : Void
    {
        callback(data);
    }

    /**
     * Main
     */
    public static function main()
    {
        var callback = function(data: String) : Void {
            trace(data);
        }

        call('Hello World', callback);
        call('It works !', callback);
    }
}