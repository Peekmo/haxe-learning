class Server 
{
    public static function main() {
        var server = js.node.Http.createServer(function(req, res) {
                res.write('Client connected');
                res.end();
            });

        server.listen(9000);
    }
}