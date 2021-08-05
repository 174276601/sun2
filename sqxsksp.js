
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`;
const method = `POST`;
const headers = {
'Cookie' : `isg=BA8PUsUNsg28krbzqw9Gwi4ElKcZNGNWcX3x7iEckH6F8DryKQWTpNLw9KbOkzvO; cna=Q6iQGcTkhF8CAXjPBS4GHesT`,
'Accept' : `*/*`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `ocean.shuqireader.com`,
'User-Agent' : `shuqireader/4.3.6 (iPhone; iOS 14.0.1; Scale/3.00)`,
'Accept-Language' : `zh-Hans-CN;q=1`
};
const body = `_public=skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D2g%26umidtoken%3DYFHvkSdla5UDAO0ygGI6DM3/%26user_id%3D2901940403%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTAxOTQwNDAzIiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYyODY1MDAyMSwidXNlcklkIjoiMjkwMTk0MDQwMyIsImlhdCI6MTYyODEzMTYyMSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.im4LOKyXnWpgq9sYKap1QbE635KBaCMZhKuaJfWMhGvQxX76j-SwX-uGmZioPUvxX4r37vpX5sDBzqd0uBoRgQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3/%26utype%3Dvip%26sdk%3D14.0.1&deliveryId=1175&key=sq_app_ad&miniWua=HHnB_KDldCcIqOfMDm25vuSxGUVEQEWql1o9iml0r3tvWh9w%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=E109A33463C92696C8D4C1E142ECDC6D&timestamp=1628131682&userId=2901940403&user_id=2901940403&wua=HIVW_Qf00pofcCTRWUn%2BNC5GQYZTD9fzoxZ%2BYZ/Kct25JDGL9YW3Q7u2zczjnF7ablx5GeLjQCHMr9CvIU%2BU8Na3KWblmFFu6ug5Od5mtjBdjzYa997kXVN/3dFDxtIM7iOM1yVMCSyeUn4lgB2TfI6n1DOKIFAo8RfpqW0mK9giKcuJxeL6ZBk9WXfP/Qh3DjGOBJPrKXVeC1VIgdTOWCFbxfpt2rcpzOiWby3lzXfONsyc%3D`;

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
