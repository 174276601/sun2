
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://api.m.jd.com/client.action?functionId=myOrderInfo`;
const method = `POST`;
const headers = {
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `pin=jd_PdiIyZodthQT;wskey=AAJhDKArAEALU9Svk7AVtJqJ19PGJI8TL00Vum41WoJHDJrT6fEygpDrugbiIrteW5S6M6FIJN6N4odFRt8BaG6Hy-_wz8ze;whwswswws=hFlMIT6rIDjW47it6YHWbanrpk9GtN0/Pg9l+Os5PG/0mqfKzl6tMnbMvBXXAlDZaiDuiBxwIOynN6FJxyMEzaQ==;unionwsws={"jmafinger":"hFlMIT6rIDjW47it6YHWbanrpk9GtN0\/Pg9l+Os5PG\/0mqfKzl6tMnbMvBXXAlDZaiDuiBxwIOynN6FJxyMEzaQ==","devicefinger":"eidIfb09812312s9HsoRfVztR0a+yUkq8BqLPh7KEvSy\/M3oWP84FVT1y6HuROzP2qO3QFpPxYAwqmRkuoTYdYjgi0snBLYVDLNU7HVVhnCmGsjnLtNl"}`,
'Connection' : `keep-alive`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Accept' : `*/*`,
'Host' : `api.m.jd.com`,
'User-Agent' : `JD4iPhone/167685 (iPhone; iOS 14.0.1; Scale/3.00)`,
'Referer' : ``,
'Accept-Language' : `zh-Hans-CN;q=1`
};
const body = `area=6_309_32061_32087&body=%7B%22from%22%3A%22%22%2C%22orderId%22%3A%22215919493995%22%2C%22position%22%3A%226_325_0%22%2C%22regularBuyMainOrderId%22%3A%22215919493995%22%2C%22jingxiCloseTime%22%3A%22%22%2C%22isPublish%22%3A%22%22%2C%22bannerCloseTime%22%3A%22%22%7D&build=167685&client=apple&clientVersion=10.0.1&d_brand=apple&d_model=iPhone11%2C6&eid=eidIfb09812312s9HsoRfVztR0a%2ByUkq8BqLPh7KEvSy/M3oWP84FVT1y6HuROzP2qO3QFpPxYAwqmRkuoTYdYjgi0snBLYVDLNU7HVVhnCmGsjnLtNl&isBackground=N&joycious=32&lang=zh_CN&networkType=2g&networklibtype=JDNetworkBaseAF&openudid=42fb41af59594e421627555517bb9ab4b2158c18&osVersion=14.0.1&partner=apple&rfs=0000&scope=10&screen=1242%2A2688&sign=5ecbfab67d1975738c4cda0a51e67f76&st=1628217450135&sv=110&uemps=0-1&uts=0f31TVRjBSsqndu4/jgUPz6uymy50MQJhqnFgaWe4R7DMRvejxWCrA1g/b7Bsi2XJsd4JB3LpWTPV9DWTqgE9bxJm/Usaic23XPPhs3wzx%2BTLMEWRco2KZK4L2vF/dRnNjhKDvu265kf8uaySkz45MzP2P1jM%2BpFTproTW%2BmVtCoDvz5RBS1hAohG72Yi5xyihzVE7Fh1rZUa4tIgkPo5Q%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=unknown`;

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
