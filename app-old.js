const http = require('http');
const port = 3000;

http.createServer(( req, res) =>{

    console.log(req);
    res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type':'application/csv'});
   
    res.write('Hola Mundo');
    res.end();
})

.listen( port );   
console.log(`http://localhost:${port}`);
