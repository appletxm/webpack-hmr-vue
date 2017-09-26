var path = require('path'),
    fs = require("fs"),
    isMock = false,
    serverRouter;

//function openFile(path, cb){}

serverRouter = {
    '*': function(req, res, next){
        console.info('[req info]', req.path, req.baseUrl, req.params);
        next();
    },

    '/api': function(req, res, next){
        var reqPath = req.path;

       if(process.env.NODE_ENV === 'mock'){
           isMock = true;
           reqPath = reqPath.replace('/api', '');
           reqPath = path.join(__dirname, '../mock' + reqPath);

           fs.readFile(reqPath, function(err, result){
                var result = JSON.parse(String(result));
                if (err) {
                    res.send(err);
                }else{
                    res.set('content-type','application/json');
                    res.send(result);
                }
                res.end();
           });
       }

        if(next){
            next();
        }
    },

    '/': function(req, res, compiler, next){
         //TODO compiler.outputPath is equal to the webpack publickPath
        var filename = path.join(compiler.outputPath,'index.html');
        //console.info('####', compiler.outputPath, path.join(compiler.outputPath, 'index.html'));
        
        compiler.outputFileSystem.readFile(filename, function(err, result){
            if (err) {
                res.send(err);
            }else{
                res.set('content-type','text/html');
                res.send(result);
            }
            res.end();

            if(next){
                next();
            }
        });
    }
};

module.exports = serverRouter;