
// config
SERVER.PATH_ROOT = '.web/';

ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB = '.web/';

//----------------------------------------------------------------------------------------------------;

global.createWatchServer(ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB);

//----------------------------------------------------------------------------------------------------;

/*/
global.RJSA
global.RJSR
//*/

//----------------------------------------------------------------------------------------------------;

// Adding a Router and Transferring Files Sample
SERVER.addRouter('/', function(req, res, owner){
	UtilHttpResponse.response_200_FileStream(req, res, ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB + 'index.html', 'html', owner);
});

(function(){
	// Sample mapping the same router to multiple URIs

	// index.html
	const ROUTER = function(req, res, owner){ UtilHttpResponse.response_200_FileStream(req, res, ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB + 'index.html', 'html', owner); };
	SERVER.addRouter('/', ROUTER);
	SERVER.addRouter('/index', ROUTER);
	SERVER.addRouter('/index.asp', ROUTER);
	SERVER.addRouter('/index.html', ROUTER);
	SERVER.addRouter('/index.jsp', ROUTER);
	SERVER.addRouter('/index.php', ROUTER);
	SERVER.addRouter('/main.asp', ROUTER);
	SERVER.addRouter('/main.html', ROUTER);
	SERVER.addRouter('/main.jsp', ROUTER);
	SERVER.addRouter('/main.php', ROUTER);
	SERVER.addRouter('/root.asp', ROUTER);
	SERVER.addRouter('/root.html', ROUTER);
	SERVER.addRouter('/root.jsp', ROUTER);
	SERVER.addRouter('/root.php', ROUTER);
})();

//----------------------------------------------------------------------------------------------------;

// for development
// 해당 폴더의 소스가 수정되면 서버 재기동 없이 소스 다시 실행
// If the source of the folder is modified, re-run the source without restarting the server.
(function(){
	var path0 = 'js-router/'; global.RJSR(path0 + '.main.js'); UtilFSWatch.watch(path0, { recursive: true }, function(e, fnm){ if(fnm){ global.RJSR(path0 + '.main.js'); } });
	var path1 = 'js-source/'; global.RJSR(path1 + '.main.js'); UtilFSWatch.watch(path1, { recursive: true }, function(e, fnm){ if(fnm){ global.RJSR(path1 + '.main.js'); } });
})();
