/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://dc300.netwin.cn/mea/api/v2/user/token`;
const method = `GET`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'APP-VER-NUM' : `605`,
'APP-SYSVER' : `14.4.2`,
'Content-Type' : `application/json`,
'User-Agent' : `du chuang/6.0.5 (iPhone; iOS 14.4.2; Scale/3.00)`,
'APP-TYPE' : `ios`,
'Authorization' : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDgxMzYxIiwiYXV0aCI6InVzZXIiLCJleHAiOjE2MzA4MTIwNDR9.lvsifcM46-GejBfAwSjqzssbG5UxEq3JidMPvnks5Xg-4KhYN9wSza4un7CKwE1nBcbh7GAQmpkKf1E_64vpfQ`,
'Cookie' : `Hm_lvt_7bcc4ab4f02912d93845682a3b0c5f6d=1627517432,1628134720,1628134776,1628220047; Hm_lvt_bed64e5f5583996cf2a56b3a9e534695=1627517432,1628134720,1628134776,1628220048; a7254ecf9e5641a9_gr_session_id=cde6fb60-ea15-469e-ba8b-2c3b0c0670d8; a7254ecf9e5641a9_gr_session_id_cde6fb60-ea15-469e-ba8b-2c3b0c0670d8=true; gr_user_id=00c3563a-4b23-4580-9968-8cf254b6971f; acw_tc=784c10e716282200134955708e47fa098012fca29f5a59b7ed61fdbb913ab3`,
'Host' : `dc300.netwin.cn`,
'APP-VER' : `6.0.5`,
'Accept-Language' : `zh-Hans-CN;q=1`,
'Accept' : `*/*`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
