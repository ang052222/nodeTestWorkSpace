// 아까 설치한 라이브러리를 설치해주세요.
const express = require('express');

// 라이브러리를 이용해서 객체를 만들어 주세요. 
const app = express();


app.listen(8083, function(){
    // 첫번째 파라미터
    // port에 서버를 띄워주세요.

    // 두 번째 파라미터
    // 서버가 열렸을 때 어떤 일을 해줄까요.
    
    console.log('listening on 8083');
});


// ㅇㅇ 경로로 들어오면 ㄹㄹ를 보내줌
/*app.get('/경로', function(요청, 응답){
    응답.send('반갑습니다.');
});*/

app.get('/pet', function(요청, 응답){
    응답.send('펫 용품을 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', function(요청, 응답){
    응답.send('뷰티 용품을 쇼핑할 수 있는 페이지입니다.');
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});