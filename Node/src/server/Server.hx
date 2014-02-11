class Server 
{
    public static function main() {
        var server : js.node.http.Server = js.node.Http.createServer(function(req, res) {
            res.on(js.node.http.ServerResponse.EVENT_FINISH, function() {
                trace('end');
            });

            res.write('Client connected');
            res.end();

        });

        server.listen(9000);
        server.setTimeout(1000, function() {
            trace('timeout');
        });
    }
}