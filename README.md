# Ttw-App--WebSocketServer--DevTool_S

---

# 문의 사항

- thdtjsdn@gmail.com
- 'HTTPS' Repository는 [Ttw-App--WebSocketServer--DevTool_S](https://github.com/thdtjsdn/Ttw-App--WebSocketServer--DevTool_S) 입니다.

---

# HTTP Server 입니다.

- 보안 탁월 가볍고 성능 좋은 HTTP 서버입니다.
- 본서버는 Protocol Level에서 정의된 기능외 확장기능이 없기 때문에 보안에 안전합니다.

- Windows, Linux, Mac 지원
- Linux, Mac은 바이너리 권한 추가 sudo chmod 755 ./TtwAppWebSocketServerDevToolS 또는 Mac

- IP 차단 기능
- UserAgent 차단기능
- Log 시간 단위 저장

- 개인 데이터 그 무엇도 전송 및 보관하지 않습니다(수갑 차기 싫습니다.)

- 서버의 대상 폴더를 지정 후
	- .main.js 에서 ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB = '.web/';
	- http://localhost:48500/index.html 등 해당 파일에 접속후 소스를 수정 저장하면 바로 화면이 갱신됩니다.
	- 또는 작업 html 파일에 `</html><script src="http://thdtjsdn.com:49310/dev_ws"></script>` 코드 삽입시 (file:///D:/PROJECT/.web/index.html) 화면 페이지도 파일 수정시 자동 갱신합니다.

---

# 공유기에서 .config.json에 지정한 PORT 오픈하고 서버를 구동하는 장비로 PORT 포워딩 설정을 합니다.

- 공유기 PORT 오픈과 PORT 포워딩 설정은 각 공유기 제조사이트 확인

---

# .main.js 가 메인 소스 시작파일입니다.

- 추후 .config.json 설정으로 변경 할수도 있습니다만, 굳이..?

- 사용 예시 소스 코드가 존재합니다.

---

# 본 서버는 '무료제공' 입니다.

- 자유롭게 사용하셔도 무방합니다.

---

# API 목록(필요할 법한 목록만)

- UtilLogger.debug = function(o, g){}
- UtilLogger.error = function(o, g, l){}
- UtilLogger.log = function(o, g){}
- UtilLogger.logc = function(o, g){}
- UtilLogger.logi = function(o, g){}
- UtilLogger.logr = function(o, g){}
- UtilLogger.logy = function(o, g){}
- UtilLogger.verbose = function(o, g){}
- UtilLogger.warn = function(o, g){}
- 
- UtilDate.getNow = function(){}
- UtilDate.getNowLocaleString = function(){}
- UtilDate.getNowLocaleString__Dash = function(){}
- UtilDate.getNowLocaleString__Dash__Milliseconds = function(){}
- UtilDate.getNowLocaleString_D = function(){}
- UtilDate.getNowLocaleString_H = function(){}
- UtilDate.getNowLocaleString_HM = function(){}
- UtilDate.getNowString_D = function(){}
- 
- UtilFS.appendFile = function(r, n){}
- UtilFS.appendFile_Sync = function(t, e){}
- UtilFS.check_path = function(t){}
- UtilFS.close = function(e){}
- UtilFS.close_cb = function(t, e){}
- UtilFS.close_Sync = function(t){}
- UtilFS.createDirectory = function(t, e){}
- UtilFS.createDirectory_BefoeCheck = function(t){}
- UtilFS.deleteFile = function(t, e){}
- UtilFS.deleteAllFiles_Sync = function(t){}
- UtilFS.deleteFile_Sync = function(t){}
- UtilFS.deleteFiles_Sync__link_name = function(t, e){}
- UtilFS.getList_Directory = function(t){}
- UtilFS.getList_File = function(t){}
- UtilFS.getList_Folder = function(t){}
- UtilFS.getList_FileExtension = function(t, e){}
- UtilFS.getList_FE__css = function(t){}
- UtilFS.getList_FE__csv = function(t){}
- UtilFS.getList_FE__gz = function(t){}
- UtilFS.getList_FE__html = function(t){}
- UtilFS.getList_FE__js = function(t){}
- UtilFS.getList_FE__json = function(t){}
- UtilFS.getList_FE__mp3 = function(t){}
- UtilFS.getList_FE__tcss = function(t){}
- UtilFS.getList_FE__thtml = function(t){}
- UtilFS.getList_FE__tjs = function(t){}
- UtilFS.getList_FE__tjson = function(t){}
- UtilFS.getList_FE__ts = function(t){}
- UtilFS.getList_FE__tson = function(t){}
- UtilFS.getList_FE__tsv = function(t){}
- UtilFS.getList_FE__txml = function(t){}
- UtilFS.getList_FE__txt = function(t){}
- UtilFS.getList_FE__xml = function(t){}
- UtilFS.getList_FE__zip = function(t){}
- UtilFS.readDir_Sync = function(t){}
- UtilFS.readFile = function(r){}
- UtilFS.readFile_cb = function(t, e){}
- UtilFS.readFile_Sync = function(t){}
- UtilFS.readFile_UTF8_Sync = function(t){}
- UtilFS.readFile_UTF8_Sync__JSON = function(t){}
- UtilFS.writeFile_UTF8 = function(r, n, i){}
- UtilFS.writeFile_UTF8_Sync = function(t, e){}
- UtilFS.writeFile_UTF8_Sync__JSON = function(t, e){}
- UtilFS.writeFile_UTF8_Sync__JSON_Tab1 = function(t, e){}
- UtilFS.writeFile = function(r, n, i){}
- UtilFS.writeFile_Sync = function(t, e){}
- 
- UtilHttpNodeJS.get = function(t){}
- UtilHttpNodeJS.get_cb = function(r, o){}
- UtilHttpNodeJS.get_cb__string = function(t, i){}
- UtilHttpNodeJS.get_cb__string__utf8 = function(t, i){}
- UtilHttpNodeJS.getSync = function(r){}
- UtilHttpNodeJS.getSyncJSON = function(e){}
- UtilHttpNodeJS.post__native = function(t, n, e, r, o, i){}
- UtilHttpNodeJS.post = function(t, n, e, r){}
- 
- UtilHttpRequest.check_IP = function(e, t, r){}
- UtilHttpRequest.check_IP_N_Response = function(e, t, r){}
- 
- UtilHttpResponse.response_header_CORS = function(e, t){}
- UtilHttpResponse.response_header_common_json_utf8 = function(e, t){}
- UtilHttpResponse.response_header_common_text_utf8 = function(e, t){}
- UtilHttpResponse.response_header_contentType = function(e, t, n){}
- UtilHttpResponse.response_header_contentType__gz = function(e, t, n){}
- UtilHttpResponse.response_200 = function(e, t, n, o){}
- UtilHttpResponse.response_200__404 = function(e, t, n, o){}
- UtilHttpResponse.response_200_Boolean_False = function(e, t, n, o){}
- UtilHttpResponse.response_200_Boolean_True = function(e, t, n, o){}
- UtilHttpResponse.response_200_FileStream = function(e, t, n, o, s){}
- UtilHttpResponse.response_200_FileStream__Toss = function(e, t, n, o, s){}
- UtilHttpResponse.response_200_HTML = function(e, t, n, o){}
- UtilHttpResponse.response_200_JSON = function(e, t, n, o){}
- UtilHttpResponse.response_200_JSON__Array = function(e, t, n, o){}
- UtilHttpResponse.response_200_JSON__Error = function(e, t, n, o){}
- UtilHttpResponse.response_200_JSON__Object = function(e, t, n, o){}
- UtilHttpResponse.response_200_String = function(e, t, n, o){}
- UtilHttpResponse.response_301__google_thdtjsdncom = function(e, t, n){}
- UtilHttpResponse.response_301 = function(e, t, n, o){}
- UtilHttpResponse.response_400 = function(e, t, n, o){}
- UtilHttpResponse.response_400_JSON = function(e, t, n, o){}
- UtilHttpResponse.response_403 = function(e, t, n, o){}
- UtilHttpResponse.response_403_JSON = function(e, t, n, o){}
- UtilHttpResponse.response_404 = function(e, t, n, o){}
- UtilHttpResponse.response_404_JSON = function(e, t, n, o){}
- UtilHttpResponse.response_416 = function(e, t, n, o){}
- UtilHttpResponse.response_500 = function(e, t, n, o){}
- UtilHttpResponse.response_500_JSON = function(e, t, n, o){}
- UtilHttpResponse.response_501 = function(e, t, n, o){}
- UtilHttpResponse.response_501_JSON = function(e, t, n, o){}
- UtilHttpResponse.writeHead_response_206 = function(e, t, n, o, s, r){}
- UtilHttpResponse.writeHead_response_206__Video = function(e, t, n, o, s){}
- 
- UtilHttpsNodeJS.get = function(t){}
- UtilHttpsNodeJS.get_cb = function(o, r){}
- UtilHttpsNodeJS.get_cb__string = function(t, i){}
- UtilHttpsNodeJS.get_cb__string__utf8 = function(t, i){}
- UtilHttpsNodeJS.getSync = function(o){}
- UtilHttpsNodeJS.getSyncJSON = function(e){}
- 
- UtilObject.defineProperty__const = function(t, n, r){}
- UtilObject.defineProperty__const__if = function(t, n, r){}
- 
- UtilString.deleteNumbers = function(r){}
- UtilString.isIPAddress = function(r){}
- UtilString.isIPAddress_regexp = function(r){}
- 
- UtilStringIPAddress.getIPv4__NodeJS_Request_RemoteAddress = function(e){}
- UtilStringIPAddress.isIPAddress = function(e){}
- UtilStringIPAddress.isIPAddress_regexp = function(e){}
- 
- UtilStringPad_Number.pad_0_1 = function(t){}
- UtilStringPad_Number.pad_00_3 = function(t){}
- 
- UtilURL.getFileExtensionFromURI = function(e){}
- UtilURL.getFileExtensionFromURI_1 = function(e){}
- UtilURL.getFilePathFromURI = function(e, r){}
- UtilURL.getQueryFromURL = function(e){}
- UtilURL.getQueryFromURL_Decode = function(e){}
- UtilURL.getQueryObjectFromURL = function(e){}
- UtilURL.getQueryObjectFromURL_Decode = function(e){}
- UtilURL.getURIFromURL = function(e){}
- UtilURL.getURIFromURL_DecodeURI = function(e){}
- UtilURL.getURIFromURL_DecodeURIComponent = function(r){}

---