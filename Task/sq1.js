

const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    //await dailysign();
    //await $.wait(1000);
    //await vedioreward();
    //await $.wait(1000);
    //await vediorewarddraw();
    //await $.wait(1000);
    //await drawreward();
    //await $.wait(1000);
    //await read();
    //await $.wait(1000);
    await share();
    await $.wait(1000);
    await receive();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(1000);
    await jsvedioreward20();
    await $.wait(1000);
    //await  jsvedioreward10();
    //await $.wait(1000);
    await  jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await vedioreward426();
        await $.wait(1000);
    }
    await $.wait(1000);
    //await read426();

}


  function vedioreward426() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
   'Accept' : `*/*`,
   'Accept-Encoding' : `gzip, deflate, br`,
   'Connection' : `keep-alive`,
   'Content-Type' : `application/json`,
   'Host' : `api-access.pangolin-sdk-toutiao.com`,
   'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
   'Accept-Language' : `zh-Hans-CN;q=1`
};
        const body = "{"message":"2SQoD3UhxkParqRkVTBC7vg50\/SIQvc+xteKY7XXIC1KjUpirW+EbrFQpPS4oC4r4YESVnBMphNFoQum\/vYmlVz5kVjhyHzZ78uv3LfpcdmO\/sdOp1kn9AJF2DK9WaFEWiSHZvd7UrqBk6Ly9sdLt6b\/p79IrGuEhPWWcdXpM\/IcNGOh1xwBW67YG9axlXioZO8kMJRseDr3I7DZXQSdhnrAilNmH4CaoCcuJeBRpF6TDFIFLpGGgNFYBosTPmHH6c+fTab1opEtiVmY5H5Fr6CCZeDT4hy8OiUlY2gpYgrxL0GgPUWtmWxx+UXAhqkOHNki2rXLMrCSndaAR0Q850t2wnuwskSAyG5e6jzv+K7oUulKMmBAhN3SKtILUFKYVbpHPbQcRjWpnTZrtrAcpyMi1VUoFOKpOB94l6gfwoAPf5HleHaR5USnS1MTFKm8vpFXWshIL6Yp+XPe\/1X3QXEtBk9MPrWI+S1KCEUombBcFdORYMd0z9fiNeg0NeEpXwW3vCMhHpiZNvKurLTuP3CwgG4GWODaTaqgIFzUl+BvJK4j4GxhYGul893JDcquN88mCs6HWaU8p1\/Y49nsUJt4JeFTLOEHvNPSH14ZfwAeVL\/9OkXsdjIFg3+psfV0E83Tkljs5Ys+sx3hg05zVShb0HPpye91SbrtCoBmjFQg4RPE5QvBrQY\/NeGdYCTnHPUARpDjkyIfw8jshDknnRlKAdAEtIVSMBDFZuORLodlLvcXIbA0GBxpBi26pmz3IZbD\/yko1XqvXGVGacS+oM5YmDe\/NwXr8qYtFAQthgCwUaUlAMP8Y0Zt3g\/ouyqzKeIn4US8WGrwu4MyoVli040IhoC5eo11p07YQIR1tOLK9\/mMIZRglThTd6FKA7Gkv5uyTnuJMOxYLK1Q2rOzTbm8vNu2xNFPZa6JtnqO8p2voPij874e+mOec8kUj8UlY1XZOrzddwhplSlHU4HOK8SrTw\/cH7Nk\/ORorJa1lMZQOiXT9BlMEBM4uKH1P2i6+hw63J+FPukviYRX+Q72AhuSLbu3yIHZeq9lyGXKHsuEmML68wntGakKjqmchsqMwz3Kq0cHiaIFpdU4XB3NIed9AzodfgBW3R0e\/4BKAL5Ev+anwtrhPC4gO2ZUYN\/6AR+AlMiErppOG2hfxBfQGnV6gZa1mekAec4EhNTAC5N7WxKK\/i5NUWMcfsWDHONnU2JTbcK5cC2YQ7xTk+d8oYvU1LOV0f0uVGBDPbtQUaRhjpgtNKZXSmgQLm8hNn6GmMQo3hDojBywAtPMIZuIA7tx+bWAWNeS4TKauzGZMy8scxuil67KMjW+JbUp9WAo8g576M96rRPxbcZygS1PXaBWimZn0nUCBufFGrOja9tc7Ep4mtRBD7lMLfm2c8srUaVH6+VcCM8BczGZOalVx0l3Zaqv8UEA8FC43nPIrucrtE9DIBp4b0eWbxG1hcOxbIsLxzFrgvzIDjdEW8RGoJIc3wkxA7jfgZcFJ7Ulw1QIALQNJluMjzZ5o4jQKO7xrHUxEWCGNnvoBHj\/4VHAl8d5ArLq3EvhNZb6JHtSy9y1TdMInsDSvQEupBgbmIGfN519W0WTOOoFZVRVAtdTMFcIh\/G\/P8A4j4IrIGdIBqaBQcHrSMLp0TjpBGueU616sW1qvYBBimLTmGoMuf4nWwLnR7Gdnj5Uy0jFhrvoH1d+76MESTwk\/L6HUSFx8rPi2A+wOkHxFmpq\/2Er5zF1JcUnzwNjooehrwbQAZwXxhOvENBmnSU7oQUSYXPBeIpNeDVwmj54Jf2UfQRrf337+Sgfcjzulya+igAlcg7SDXSaIJ6q3Y7NCcN2FAAaHoGnbyvukqXuGhRrdyhrKJ3HoWxDV4ZjR+7sRwx53GvTPg4glCtwnUkmY\/upzvEiyL14V1HPWcOYpa6yrLkQFpb5fLYTuLS3\/bzvpj4+m7HT0BZ6iIm7QpK96ogkL8mbHpagfcnatUmR6poR3v+W0iJzZ3Rzs6z\/KG1ZSgG9gAkbtNBCsw0Y3PArxRIjJKEENhdIiSTPuCxlUCWBngvlBUGEiNpLALnS1U08zy19W3xYgaOLwl2EYAJxyKWUHMnvPNkZ5HtiLskVH4\/CAO\/1dmA1gwZNsYHdUSmcUFxZHyXbhfkcLlXbdvhoIt6XzyOfwBwEupFD6v2a0wj6owl21bpGJbxc77P0MnJJ59r98HyYntMUa2RTxU7TvT9QdO6Ec2m3DlsEku+nLTmknzhev6YiK7BEZvctlxp\/7nztPWpd9gIknhqFMxgLyNyAj2cVPwD39k6r3TPNOTyVNI3MjjYidyv\/kg5sNpLbHd+HcyMeKvgMnQ2avEzkMNuD647VUdSgoSrEGxog7q7toQrtiDpFYG8rAR3zeDpzQmQVXI4V8eEW6SFjDiMuMyjn3LkXfmCBT1PostKDn5WmslwyxpS+xB1LOUbVrs\/EuhyjJRIvbmFqycu0swY74+cXqJjZjQljf\/2tmN40Vk5wTnePLoisQHAUI8rAiKEG66lvV\/2HQykajuJgT1Pfz7ClimYYE6bQKBl2fTWMiQNcQ+aWCWUtiSBpdSQeKc0RB0NknVUlUkOeiWu5ca6hLvh8qyIc4J+uWYSkoQ7nIvZfOIoXXpMGZ+k2xER+hB5R2uZ0tIlc4MjRaaECf+\/nKnON3R+Fr5owa3t\/z9k9l8ck3mZOSdvA+R4bpn1VYjmYRISwb3jxvwO82x+B6d3bUGDIbphSw4A+XzxlbYGY9ieFFp3j72jh8Tw1IS9hCP1Z0MKq+UJnxEiQ7DmvYGxgECwjnKNfBsCJd0XSARJiyOC9hC8KxY73tempykTV+6jKcoP0kB0VgnyIm8s9meViNT\/FYnNeReeAJw7Peas5h1QPt1PlD4g9268T3kiHuW89avq\/kaZWz9nq2CrAuIH30WMj5pI4Kb3krwg3euuXZFdJ\/9vKGhz\/Xs45rfE4cvGiQh5oGLzdCjcQ3eW7pLTyHZnhmvKvpTuq7G9hAJvPMoy3fYF+we0hD9YbnQCeLqtxzuhvXSIRXbrMGsF4bE1qNvPNPpwYfNVgbhKj+pWD65LdP3M3wdWRAE2UwljQdlzJ61d0Wv4PdnKjM+2wyP\/2AKqdrBBMsG9n\/5\/qLr\/4BBRPM2nkG4V3FvTeGxo5tbvCkVdoqQlUiyyke4TbSk3K9Up9Hdm2Ak10PbjdYp2+DHOPh5fpfyG3UaCdjNgK1E7pfwAUJ1zuYwOXNDgs1syYQ8RYiN4IEA\/tUnzhMXDAjzJhMn\/Ptcrm44ndavvMCgRb08UkCnSUbP\/LAMHRu5TllXmLMbTkcemRczwxXvS+53I04OxeUyJWUCwK1eSXpEPj\/xB+XiBDiFtse+4khlPb2WCYPzBGGMUST8W9ihwPY15b\/+JxDTy8gI8DoL7zCVJPtO5i5SdGq8iLI4x1QHqB5Cpnhkn8e5iHVpJyWaoV89cMkyOQe8SFqESN9Ciq\/aX8n47f+8597j\/Y\/ReStdzc+HfzakrJzjfxXSEsiHpDiUnS0S5zecakQY4zfEeYUu8WCk6zWX+gg3+6jP3CTyUlHnB62mxApsG0oqmHYLkHB0QL+J7Ne0YnRbVOG53N4kGRkHXw\/bUbVqmbqf3Bbpbys3eycg2o\/SxCkMVC9ziqHCww\/FkRl0V76oI\/uUG4qp6acFC4psQCSDlMp1Ol1OXMqsjn4\/K+qa6MHSZ\/unPS\/99E0GC+CfAykEHrpjszeKlZ7NkKUwXXrRxQJFh0Io\/qSF3uKRIzdOigpkVHa9Ax1OzfAuCOvpb2gZ2ziYxaQDgBAgOgOXUjiLE1HngCXqAZNkgM7zpWT57sS18aagE7U8dMjhhcb8uYY3ELrGiBONB7LO5HujeM+8KsO3vmCAagZtqa60rmZdR6U6iPnly0Q58JR8Q8NMcQo5qCXXeMNzJruwaZ80VQ6UuNt78kzqP2VAwoNhweKtLON9EeNNCfGUEj8o4Z9LIBMaKiMrSVIB4yswHxPMJWBdWhwQLVjmb2VzcBhKKq+rAgtqyYD2nZR7uPccE+In0xmC6ub7Z1X35XNjwpdXmr0g6JtausUia17SkQH\/yCPOEmab8h6P1dM7ij2\/WFD9H0arSoQhOTVMpaYF4YG59kX500PA87o91ILKNlM4EBiEGhC7kcXLMwVazeSuqrVVXzDLie2d\/n14j3S0KFJfUP\/oGU7U85Kf5GtCreSbaNwDp7ALq6\/ahufXJrg\/7c9gqa3WVKqm6mSHotn5qZEL\/+C6SwEs2LidVhlKwaZpnfU4ERyD+lMbXIGi1fOGd4uAv8KtdkQg\/FOSfBV5O5r58pgC7ggcwW5sKzaomLR+y3\/ujiZ\/+XHZnvS+nAkXrAQfH3K2MsRH4WaUS\/yFs+Fzfly9gnUlRmbX5Iqx0wmIHd0YtYMPwSZ13l+o8I9sH1KLTMFdVxZ8Dp7xz7QvP+6EGoKN1IRt6WVyuZv61IREopWNTLy3oY5NYv8VM+Cg+3UcYk+4JAG9jhCOEhw4\/pByR+vgVIPA6pm2no1a9FuN7DVMhWzF6bfjC8GcRIJ0szPtl1cgg6dq9xrNnHp6NdqQpXZ74MiU+j2o1vPX1CB0YK9m7JccK4lkSijIdiZHfk5ESFCC1brLxaw6xAQRGyNG5tax5gpM8nUT6mYszRal6InqnGUH2JX5gHcLNPxQEwiwNTZd\/h5pLW0KXv4+t9KMkc5gaPg7GzdWqzhbqCEgsvlX0XHzKN6QthPa+Ck6AxzS6ZxjQYSihGcfQM7LeT7jmaSE9f42JHaqdpgnIpxv6AbQsf6rk5uvG1j7eHQZO2u7X41AFtd6cOsbJ0iEnY\/UCBcbdqFpQCnCsWtADqET7cPRxUocuJahTWKHLlyrNxLqqa1q6dGLkZtfJbuUxxe94Dv42O3GeFMuWvvOE1PcUQ=","cypher":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  function read426() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
         const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "isg=BJWVwCP9WMjvbHw07CngquuyrpVPkkmkfsWvxRc6UIxbbrdg3-LsdoA8PvRY9WFc; cna=wVmjGXEJsiUCAXAfvZEK/5zJ",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.2.6 (iPad; iOS 13.2.2; Scale/2.00)",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "_public=skinId%3D999%26idfa%3D021BC905-6AFA-424D-8B50-99F11074780F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwwan%26umidtoken%3DYRxruFbmacIDADjqvrFJgz0i%26user_id%3D2916901745%26sn%3D2C6C8B4E89B5253B7A6EFE559CF0C08C1229D01C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA06F6AB9661003A1DA723B28A1AF20643BB3296%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiQkEwNkY2QUI5NjYxMDAzQTFEQTcyM0IyOEExQUYyMDY0M0JCMzI5NiIsInNuIjoiMkM2QzhCNEU4OUI1MjUzQjdBNkVGRTU1OUNGMEMwOEMxMjI5RDAxQyIsImV4cCI6MTYyOTc3MTE1NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTI1Mjc1Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.PPT_1Wimc2dL141NpVNCweAfe-uJOvy18_UxEwg7VAF-amgti--izqVsPN0QJFuvT5YCojiB8Pn8lvupwboHSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPad4G%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYRxruFbmacIDADjqvrFJgz0i%26utype%3Dvip%26sdk%3D13.2.2&deliveryId=531&key=sq_app_ad&miniWua=HHnB_xPXK19arARvcrQepQw5tGVMuA1Q9DUHiWCJm9nGcwpspzMwcskQhXo2LQ7esM7LHlgp9UFCSNJIaB/azua2UywuDTc9nzfZGax3GHldNa//kamdwqXBX0bf4bK4u6k6c&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0FA00ADC614941171F259622F0234BDB&timestamp=1629252811&userId=2916901745&wua=HIVW_gka845tP4apVJpT8T3jvuTCLAlAdR6ZSX2hU/OKCP9NKuytiA6UpqB/DtGEhj5QuiADEypSd4LPac8cp8V7G/F%2BJsiO3yWaNRrkVDywhs1E3oEwWwzwBhdem93cpQj4Tzeh4lDq75qyHoVNw7dKHnAWzRKIjnCAs30ojR0TgFdm89VgM0xjNtFHvdF5yqcEwJkhnYi7D3xNjL5kJ/mF4I8SBoiTEhb0hYK1lh56K1D7b1N0sEXOkozMvbfVfo9X3oRIPhcPo3DKKHsSmNr4iPsk9y4zVLa2yFoswD4Re9t%2Bneo77L%2BBW%2Bxaw1tnmLzm3jec4z%2BIlNrXyAFg0Bh1wuA7xHu0AbTVnrut88Zb28gO2puegDsurUx4y4KlYIcxw";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await read426();
                         await $.wait(500);
                    }
                }


            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function receive() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.3.0.0) 1125x2436 Winding(WV_6) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=bCxLedRLOls1JDV7SC1arg%2BRtgLyo21t&msv=8.0.0&brand=Apple&imei=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw&skinColor=23B383&platform=iOS&ver=210107&mod=iPhoneXS&statusBarHeight=44.000000&skinVersion=1&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
    "Content-Length": "1229",
    "Accept-Language": "zh-cn"
};
         const body = "src=204&userId=2916901745&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1629068787&sqSv=1.0&sign=2c2acb044b04498358f5e430d7289311&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTU4Njk4NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTA2ODU4Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.AcBAYU38rshb57uGyd6FwFvoZccUs8ysDHDMsUrZij4xtnf8cU54vggPnbsvGVFA5btM4aB3h2mPkaTaJHpBVw%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  



function share() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    'Origin' : `https://render-web.shuqireader.com`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Connection' : `keep-alive`,
    'Content-Type' : `application/x-www-form-urlencoded`,
    'Accept' : `application/json, text/plain, */*`,
    'Host' : `ocean.shuqireader.com`,
    'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18A393 AliApp(shuqi/4.2.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.2.6.0) 1242x2688 Winding(WV_3) WK`,
    'Referer' : `https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&upf=20363&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=0&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2111665808&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=YFHvkSdla5UDAO0ygGI6DM3%2F&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&statusBarHeight=44.000000&skinColor=23B383&platform=iOS&ver=201102&mod=iPhoneXMAX&skinVersion=1&wh=1242x2688&skinId=999&soft_id=21&utype=pre_vip&idfa=FA83D0D2-0895-482A-8B1B-48011F454733`,
    'Accept-Language' : `zh-cn`
};
         const body = "actTaskId=262&wua=HIVW_nhDmwAjiBMYZ0OYYgT8oWPsc0EjHjYH7nbiqOEhAt0wqo8mPSwUBJ2L8Ob0nK14qPcAg%2BDbDD52Mx0mUD6mhbNm7L7E%2FLYga7Y13n4uFIRC3EnOW9y%2FFWIOzZ4RXQimP05iJpBN8EUQIuk%2BW%2FpHkQuNZsVWMnlqafAkvUJ0dny1%2B1LZaXRCWiWZb9yo4kx%2B%2Bd8DF6MzykZV859KBGuWs2kFoM3TavdYE8V5BNNFss2Dn7hzHMyC%2FIZrE7esuRXIJdGtQggNaTE4iDth2GDhTiF3IWFRlOknilAP7Mmm51O7grdQMYjh4XIW1pSQ3aSTt47It4XdxnpNCUiDYGTEh5CJL8G%2Bfbdg9Uo4BGugARKBzjNOR1rWmj8aVg9TuQvk4QVNn7bOAeOgWiyzV4sd%2Bqw%3D%3D&ua=140%23bWfdxv82zzWoVQo2aQdMM4CXc73bNvZhunAzzP6r3yZ%2FWifrgg%2F%2FL9pekiI3xQ0mkPqb1dyDCt35HuFJOO412LfD1Mo5lKBwGlsh9NDH4YwEWPWX2ebUMYznhAl6ug%2FrVGcNrZR6yfQoEOfy2S8FMgrz9tzzYHGWrfoM0v2UWdMybrBNbMhjzSxr5eo%2B4Twx5LSBTjbzM5uFp0TxS4L4Q9%2FrZqhpMAaLpjVOKHWyLweQ88NHB%2FW7rozr03L74EusUVFQNWIUnANyNdgO%2BDNIPAOQvpWfBEGWHU7zmLer5fI%2B8CG8zoLJey1t6n2BpsWr%2BMkZif00sLrLeQ%2FAYVAIWT49%2BccXgYVBnEpSF3Tx4NJqlbzxgiEbxJCMzzr132NVl3MzzPzbVXlqlbrxaZHUp6gqzHOb2XjcmDU%2Bxxn%2BL%2BJBUbrz2Do6g3TAzjOb2wEfYNsxbIonVwBBUbDHXLD%2BVwGSzFdgjOMMltQzBquiVzmulFr0EDzM36hqISzG22Q1ZMfxzAh4VfVulFzvBDdCwth%2FzzzbkX8%2BoSUHzDcWSLnqEVFz5Pc%2BVoun1uI0MI2y7yDY5anrHRqjELrEilhuyqGSQsUVx2dI2W2HEdcy02%2BnsRo54fzaw00abUhC945NoYOVNM4m%2BijOD%2FJKu3k8xyX6PEu4E5V8mf8YRpIXmFcUzKp8ZPn7aH0%2FSRVCggoQmPvsQz%2B0uweEzOUJh69yfCq3Dsbenc2ZHYrWPkKTuSztdHmerhopd9lQcp6YgR8KewsH670%2FN1cKcvM1SHSn9XP2yqTd7NRZTYYOX0ysnRIkKZszKIgWT1rUYPJa21n3ZyUO60fXOf%2FfZxoR%2F60D0Bz88WJJQdIsTdC%2BamYJBfJlQ2HQrtQMl9t6UvA8tK5LevOUW6%2Fme7rWYXVYTO1khYBoLKspWMCpEncHZlcNSRhkDO8iMSEMfTwGp%2BulzAW%2FKhfwqP%2B2RpsQQcb2eYqeOeHBt0%2BGFnUeFpg292L6hK7NNN8Mtw0gCck0MPzcXEz1qjOfZqvcKiNqSXVDMjZf9rOPwyPwMLWL3pwRJGDS8qXuW%2F%2Fgq8JDUD2aqWV3yRsficMxnWiiqF20A6szlxPACcDaevW1uU2Fe4Sh50%2FXo9YkHPYNAP7DICyoC1HoWpgGstqTSfuznf6g7xyQdk9CSlr8Xk35O2hNmqOOM1Jnaki%2BLsLICfiAxK4IhNCvw9qs%2FMWGY7K6hwAyMFokejiijaAXBvNuhS%2BUnbIyd%2BLlBJrxVM36wJSNFuZ2u2wxV9V9XeOLbn19LuDj2IL9jDXy77IyUc4vA9aeWHZJVHtfsM%2F%2FLeZ4axz6UwLYufWyPjzoJXey9gAStEkjRg0heWdoBuB6mub%2FRk9Bq6ACXNSt1URp0%2F%2FrgSlXGAElw9uqfWZXZ1RJYQ6kXD%2B%2B%2BMVbH8eyEXde4golq8AYYRi9alBnRwjNyf4mpcT532ur2e7fIE8MxmCBpV%2FOH4QQSsLDrba719Rg3wXxlqoN3s8LkFWzOeN4WBElilSXiGmn1jt3nhmjX87l5i%2BB0oSkte%2Bh0%2BXFcTf874nS6XAvtBET5AF72uFKTlroq6vbsF1y7cyeiDDWlrj%2FI2scs7ZiRzXJBjGR5QfaJM2VAZHv6i5NuNgQ2Czx4B1fUWCFYh%2Bt25WZBP4FyADaSwYd%2Ff6w9JmwkEB4i2q4PVPXaozs8eJ5PTHkytQYGz8xwjL73%2B8%2BUgPtjOJvN1CA&miniWua=HHnB_AjujGhREhOAZ%2F9SX0ugaIuSD4NTEu04LHv1hiESuVowPjuAl7yDdAYhHNgdmNfQ%2BuyT70MQT1q2DyPyqLdDUbgubPFToRdhNCPyELEh%2FNSpX8kadBsAXpiqmdCxB7G2E&userId=2111665808&umidtoken=YFHvkSdla5UDAO0ygGI6DM3%2F&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.6.0&placeId=111111&timestamp=1631693663&sqSv=1.0&sign=3fe873d479d52ee27616d898dc9e8658&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D0%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2111665808%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26statusBarHeight%3D44.000000%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhoneXMAX%26skinVersion%3D1%26wh%3D1242x2688%26skinId%3D999%26soft_id%3D21%26utype%3Dpre_vip%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function jsread() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.6&ustatus=1&umidtoken=wGRLAd1LOjxByTV7SSyOvpA4qSfDtolT&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
         const headers = {
   'Cookie' : `isg=BGNjpqDSBgoVFcpANMOMOU2_-KMNWPeajxACnJXAiUIm1Nr2HSny6nlOyiJa70-S; cna=Mp/FGZTpP3UCATIHn3xjUi0q`,
   'Accept' : `*/*`,
   'Connection' : `keep-alive`,
   'Content-Type' : `application/x-www-form-urlencoded`,
   'Accept-Encoding' : `gzip, deflate, br`,
   'Host' : `ocean.shuqireader.com`,
   'User-Agent' : `shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)`,
   'Accept-Language' : `zh-Hans-CN;q=1`
};
         const body = "actId=355&miniWua=HHnB_59pfVLjoUerS%2Bn61x86wMkXFFt3dyEadw1BBFBdSG0QzoWqvUf9XaHmTSalEjb5TO6VbSa2Ly%2BSc3Ajr0tveZPhooYp0jqUB5zivCRiVdp8ynz0rYtXMihkwYvU4WjId&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1631597629&userId=2111665808&wua=ktgi_WGIxj9RZH8hS5111lfNrVXxvzN2DsCnkFwXynhixDIRuEN9M1ngzR7b0i4MrS1bhCnHnR%2B4N/1jfyxkyN38j/T9bfV4xXxBZ9zJ6KBkM2j%2BmgrDCkA5vVmWZnWgnHd0QC9ILOSaxU5Lth7KyLUWNo/xLiLo1lel3GWNPkvne5gj6Ki9%2BX93NFA8O1GNVZXhbV6HBHOGUxhejHtpbieQHyIwQpDCekkfUeht5LJZSMLNd%2B8ummH6jANrjD3DcL9z4GGMbrEGFqJQFOWGeA7NBeJfTSO%2B0ARuLLocn9K24xVMIte/Nz9wjn%2Bf7MCwPRL/QQJrnAWJ7PGlwP19oK32PWxLFs0Rbq6ZWgHrbCEkmRzfAxXZbQdS6JVNGNsxmxRON";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsread();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

function read() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BDIyVn-9h1VRsrtp7nV3yEDjiXwUwzZdhviC__wLa-Xtj_aJ5FO0byale60z5K71; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzMDkxMCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMjUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XflxZv-XcfSRCM8xOPe9cTov51UPtAsEGN8uNnu59Gl-GykDa9PiD6hLSmBft0gUKXmJZ-jUuql5wFtceuB8zw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=707&key=sq_app_ad&miniWua=HHnB_U3vcrUclZBGI8xgdUJ8toyc%2Bcu3V7L6584b4LJIqAo9rKD4xOidudtaDEkcZkA34sDtTnXBwQcsP06dfIT%2BwJny1aqZ4O0U9X4YOywUGltpZN1pnlmCAZT/aayksQ%2BsR&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D68E7080F23E0123C177D2F090C22836&timestamp=1629014445&userId=2916901745&wua=HIVW_5GYaKaLjxLSXInwlxv92LU3UYSySyk5Zb1vIqiSKppZ3k/5ybmHegQJtI6SFnGMca6CRW8KEDuZTBpJG3oWo9wQTHmeBIvTt1/3VesMgxwl/6ump9ia7jvKwqSpZjY7Hq5JON%2Bzk/QhpAfitngKoSxhPKHLDAzpbRZTU06Vs7egZTirraGpMjB9685eeUXqfQt%2BAo%2BaRqFym8u40CdVOPOALEMLGQGGCmQFS9VolpMGFfhS4Iw4vELFzXblrumStKtxJZPnJw7EJ7px/sw9POkjSsxGRc2IEwjcocqaYJ2ueMxvhZzim/Cvk8v2wOFKbIewXvqnvtCG/mnPdf8grdg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await read();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function timeupload() {
    return new Promise((resolve, reject) => {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsshare() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
           'Origin' : `https://render-web.shuqireader.com`,
           'Accept-Encoding' : `gzip, deflate, br`,
           'Connection' : `keep-alive`,
           'Content-Type' : `application/x-www-form-urlencoded`,
           'Accept' : `application/json, text/plain, */*`,
           'Host' : `ocean.shuqireader.com`,
           'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,2__shuqi__v1.0.4.0) 1242x2208 Winding(WV_2) WK`,
           'Referer' : `https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=YRjKkqmnuBoDABOa54Af002O&net_env=wifi&placeid=111111&user_id=2111665808&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTI2OTEsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTQyOTEsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Ubxapu_jKHuh3oo0cHUGi9hzDxiTR3oHA5f_twxFDpbn-m53EwXu3M2YWcGkE2dxggBH-2XdGIAX-3I3wO1xVA&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1`,
           'Accept-Language' : `zh-cn`
        };
        const body = "actTaskId=327&wua=ktgi_xoO%2F68QDmd6Mq7uiEtYCz59R%2BoumvDOybAfUq80Kp%2BPhtj0nl2AZT5Jpaiip4A2EhCwsQ1mv%2FGCMaPzYouLYRf0kV%2FBflaLHxregXT66%2FriCIWG8JuWkp%2F%2BInbXDFeIX1P4jKsp7h%2FbYLYl5gjmvzIEEfTOJwlgec9jAKCPuWReTxc4eSBQ6OmHyYTx3lNFgGQ5kNiehdW3Rv4FBuaeb7EXTrN4RPMcKR8OKMoL7739FsB3B83tTCgEXkeS5yk55ZVTi%2FNdshbVwzDqnJusnLvXpkWMyGYORmIfc5It4TAd3hqHpAgeOgechVtvRo95o7q9It8Q3qASIhkRHft0BAyzRU43eR6lWO51HJnQTCJ%2FJSjFMoqf9H0v4Lv8cyOb1&ua=&miniWua=HHnB_CCNWRV3wCE%2FpE7qIj7yWGqafkNzVLq7k7I%2BuWBZWZoVrhslaTwwzAORTpVtrN9UPqg6irBhu8%2BYQtJBR6gn7W23mHgql%2FE0w837rVtpA1080rKCVk9ejsCchvE9SNtWw&userId=2111665808&umidtoken=YRjKkqmnuBoDABOa54Af002O&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1631594456&sqSv=1.0&sign=61bdb3f856790e8ac59e5f5e411cba55&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DYRjKkqmnuBoDABOa54Af002O%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2111665808%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTI2OTEsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTQyOTEsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Ubxapu_jKHuh3oo0cHUGi9hzDxiTR3oHA5f_twxFDpbn-m53EwXu3M2YWcGkE2dxggBH-2XdGIAX-3I3wO1xVA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsshucheng() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000";
        const headers = {
           'Cookie' : `isg=BMbGbiXN25E9PI8LUWzBEpCYHbhIJwrhYpcHF7DvgunbsyvNGLe68FwJj2l_AAL5; cna=Mp/FGZTpP3UCATIHn3xjUi0q`,
           'Accept' : `*/*`,
           'Connection' : `keep-alive`,
           'Content-Type' : `application/x-www-form-urlencoded`,
           'Accept-Encoding' : `gzip, deflate, br`,
           'Host' : `ocean.shuqireader.com`,
           'User-Agent' : `shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)`,
           'Accept-Language' : `zh-Hans-CN;q=1`
        };
        const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2111665808";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsvedioreward10() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BMHBbsFARAgBa6gqAIVl62-Y2gnb7jXga-9oWCMW0EiKCsXcaz76sNhA6PhMGc0Y; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=897&key=sq_app_ad&miniWua=HHnB_3SMWpVcrf%2BGigHsqHAbaMwFZjmFYm/nSWDLJ5MCjNLvVFtYMwQJEaFFm5sFGqFQ0hCqOXKk1d1MBbmEzQRNjNAGg/HPQe%2B6SZQCZa%2BgRylsfQ7NHm//jwtWr%2BOe89EbQ&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A1C6AC2353277A8E0CD35370A39ADDC8&timestamp=1629015720&userId=2916901745&user_id=2916901745&wua=ktgi_KWcfFAwrcl4kSYsk%2BqAf/XvZ/3UoOoaWSR4pkDOU%2BdxQ06K5q11k4BjdoLwZrrwIoEXsz66a/JsDq8xM%2Bgr2YNlBWtoiubDDvcF2Y//B0d9uYQ7ATL88qSRS46doPR8iY7rBdy6084VMi5wrcgNAocBn%2BAJCaKjZASokU4TZf5WgBWpdN/0ln4keyqPUnrOPOUDPWqxXO2lBuVr0BkGEBrGhBBWDrFw945P93o62quEBP/nvJLLX8/6g9kQHOIQLh1FWqxgUGfXYgQrQ/3en%2B9mDDgySVVXu48iTcTAg93zZ03Nz3/KdAP1/nUcR6b4O";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsvedioreward10();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsvedioreward20() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
          'Cookie' : `isg=BLi41M9kLVsSUkGhEyqXqDJGg2JKIRyrZwO0HfIpC_OuDV33mjCWOcRvwYO9RtSD; cna=Mp/FGZTpP3UCATIHn3xjUi0q`,
          'Accept' : `*/*`,
          'Connection' : `keep-alive`,
          'Content-Type' : `application/x-www-form-urlencoded`,
          'Accept-Encoding' : `gzip, deflate, br`,
          'Host' : `ocean.shuqireader.com`,
          'User-Agent' : `shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/3.00)`,
          'Accept-Language' : `zh-Hans-CN;q=1`
        };
        const body = "_public=idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1%26ustatus%3D1%26net_env%3D4g%26umidtoken%3D/%2BtLBQFLOuocqzV74k19QitQ42IqNbwL%26placeid%3D111111%26user_id%3D2111665808%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTc3MTcsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTkzMTcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.xXCrucGFA8yuzAzrC_X-BVh9LoQQS0M13rTvidF-pnqdn_BVaq_LQmOrFKjgx_gcZlQCRpYqejOQ_ye4KP3yUg%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26sdk%3D14.3&deliveryId=980&key=sq_app_ad&miniWua=HHnB_j3lAHupER/p4JEBB7NKgBfO8NL6V2vv7w7XZLNigU0ODLuQRy2OTnYXczgaCvxLkpJhuKB2xzt//Oug1qpCehrVS1ARdiYyvit0cJZGm66MAGC%2BAGiR9Mk851aM1lV2sWHss7tPHVfdyFc/Uz62ypg%3D%3D&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=89448213DBE3BD20433771155CBDCFB0&timestamp=1631599689&userId=2111665808&user_id=2111665808&wua=ktgi_2MkvRp/G%2B7cR593N4nJPYum45XbiWPeHZEqJL3g4mJT7ngNdrTcqtBbMdAFx3STAEm/XpazqvSX/%2BGleiKCjhHm2uGWF2Pw0fGbYH3JYYODlQHQfpGPqTidy/7p8ZlUlAVokgofR3vv5RDMi/YKu%2BnDKHz0KHz/5R61eH6uDEc2R0%2BA4TywGkhqYoJD19BQ8ysjQJP3PYY3XHFxWm6Iy5uGUXzs5NFv9fqljRGgd7xr9JOpXoI5NZBFuxEG3tzuEl0JpL7B2vvuUTRZgTd2EVNhzSWDJs6gYhBCmJ7g/6ilbG%2B3T%2BzXNJh9gfY0qbA%2Bwmig9P75J/nO8JuIwIAa9NVS8sfno9FjL7vBt2k5kASAnNGB164eGgkxnn18a/bIG0V%2BePxvwOMmyZ4QsAPrF%2Bg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await jsvedioreward20();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function jsdailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
           'Origin' : `https://render-web.shuqireader.com`,
           'Accept-Encoding' : `gzip, deflate, br`,
           'Connection' : `keep-alive`,
           'Content-Type' : `application/x-www-form-urlencoded`,
           'Accept' : `application/json, text/plain, */*`,
           'Host' : `ocean.shuqireader.com`,
           'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.4.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,2__shuqi__v1.0.4.0) 1242x2208 Winding(WV_2) WK`,
           'Referer' : `https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=YRjKkqmnuBoDABOa54Af002O&net_env=wifi&placeid=111111&user_id=2111665808&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTI2OTEsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTQyOTEsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Ubxapu_jKHuh3oo0cHUGi9hzDxiTR3oHA5f_twxFDpbn-m53EwXu3M2YWcGkE2dxggBH-2XdGIAX-3I3wO1xVA&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1`,
           'Accept-Language' : `zh-cn`
        };
        const body = "clientTimestamp=1631594424&position=601&signInType=1&wua=ktgi_vSwUyP%2FHHsYdAJhOk9FKBxJ8ZmbA33s56K%2B2HkOEih%2BaQm0C0i%2F3Jsp0D%2FesWqSD4QsXQ%2BXxaeqUTD8s5R2W0%2B%2FHNLXyv3KfLjIVknpPAtDObKzgavOZw9pDoKYYJZ6AM9R65dWG5qIj%2FcK72t3PSYTFzCBYTzaS6uUrMgu2N8IsbJdqHfr1SYP%2BRUd%2FACk4JOYh3dHOKLpDvQJAan6ay4fTawdliDkIXzWTP9i%2BLte%2F6vDIVWMttzejplnhi8xxgPtxjT5W2ycNuLI1WKb2JxOAkJQG6sDbqr3qerRqKDwiGxnfHWIo6EmnGz3vYWdY3H5y0GYxVBDvZfi%2F3rja7%2FeIx1RdffopyhVFBkS7HqDRbKgV%2B0oUkxWI8JeeG8%2Bg&ua=&miniWua=HHnB_zXhuWQCorD7U%2BDVlbxBq3BtRvQKDRIT3OyjeXGUS2Wcla4lgf70o%2BodaS8fPfkAVZBIKzbpP4sGnHMiesrKinUF%2BeUPtgfCS15L1N9McH4NnynTEkoRcAadMxdaK9HRD&userId=2111665808&umidtoken=YRjKkqmnuBoDABOa54Af002O&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.4.0&placeId=111111&timestamp=1631594424&sqSv=1.0&sign=a329b20be8b513367b87b37f7e0ba790&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DYRjKkqmnuBoDABOa54Af002O%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2111665808%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.4.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzIxMTI2OTEsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzE1OTQyOTEsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Ubxapu_jKHuh3oo0cHUGi9hzDxiTR3oHA5f_twxFDpbn-m53EwXu3M2YWcGkE2dxggBH-2XdGIAX-3I3wO1xVA%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210309%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}





function dailysign() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "2001",
            "Accept-Language": "zh-cn"
        };
        const body = "clientTimestamp=1629010657&position=501&signInType=1&wua=HIVW_SHrM3h2JkyoYAgn3ql4jRIy6b5g0AnUJP7I1U6aGiqQwA7oQSEgNZ%2BN8ALcrbeN4XfImFmU1WLw8hUDUw9LnTfLTpFLXlvQ7pL60uQzr1OUk%2FVboon34vSD%2BAMypmhGyIcxJajORk537gVeUjDdXi5pLnj7mjsDnE0Jgi%2BqvbFilG0C4vBwfZfzT6yZd5aCjTbUJt2VTLriJX2IHHpUU5i2RwkWrPKZoGWbO4OQT6YRO5jYlBnBqfkxhutQ5oqgiEBD3rUuIiDWIoSIfupc9V4yo4VSWtNoWZak20EZ0K7Q%3D&ua=&miniWua=HHnB_JuqDlmNVLuGpc0My162gs8NWXyFaoSc%2Ffuhz57T9z99RDkHNb3iTg0Mut4vnmWNqLe4O693LbAnypX9tSUb2rujnJ%2FHEvKQwHjqiROdCX8xtNN4%2Fawu6U5lPFEqVB2OhG%2FQzrnvjELSdHQ7p6VpG1Sd%2FjW68m3We4H0W1YLzWXI%3D&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.4.8.0&placeId=111111&timestamp=1629010657&sqSv=1.0&sign=3105bea087cff4a2b140b79cf27dfa64&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Cookie": "isg=BM3NNdD9kLRAWDSP2IG93I_O1u1HqgF8r-4-zw9SJGTVBvi41_ozTCLcdBxg3Rk0; cna=gpWWGVA23WQCAatTLPVfwY5n",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Encoding": "gzip, deflate, br",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.4.8 (iPhone; iOS 14.6; Scale/3.00)",
            "Content-Length": "1866",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTQ1MjcxOCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyODkzNDMxOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.lSxANoPMo0CWwlOz2SCLz0Eu6oMfFuOdrBo9BR9BrK-bF2Zyrcqc4cXpChPWtPbVBSYz0bxau-x4ZxOCMhO-7g%26skinColor%3D23B383%26platform%3DiOS%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=807&isTeenMode=0&key=sq_app_gateway&miniWua=HHnB_qLYPGXagNcq2Y6prgdCFXZx3WOUBwdwg%2BXl%2Bnda6Ds%2BocSlJLNJ50d/XU4VRgBpwxyboqHzX52kFtUQy6LxFvNVfobQISPqyYf9Jh25XEgcKT641beUfHeCBi%2B0DS2wjq4PMG1w/qgcDgG6Az/2rAgUGNMw%2B/RLnpNGTqqACvwE%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=DAAF009A5B3344A9BCACFD16017DC9BF&sqSv=1.0&timestamp=1629011002&userId=2916901745&user_id=2916901745&wua=HIVW_rmcpb1k/uoNgnVkVFAntsRHoZtMkzGdCdkFglEWO7Vx/RvXhndHGP3tSBMRueSV7F94HNEOydfsSbO7J7ODMj2NbO/yUSPsNXSCiaP8SqKMrgfdTyWPjs2t%2BtchkC3R5QLUw80z1eACA7sNE7AKQ2eOM5Fxa/J9Zh14l9FMfpY7mPxSrhAZguaeHVpHUtO13rqsD9yuPlipWbC9/7gFNeFiqqiYuUvIBsWHdPD0cj71qKMBPMkO3tmwErIz2y7fwFFVrEXHoFMPhUx5uQRay/ylOCkc5iJXWdD%2BPi3cxmMk%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await vedioreward();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function vediorewarddraw() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BH19CiJtwISVr2R_CPHtzL9eht13GrFs2C5WmD_CulQDdp6oB2vsPZBkJCwwbckk; cna=gpWWGVA23WQCAatTLPVfwY5n",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.4.8 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3DiOS%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=711&isTeenMode=0&key=sq_app_gateway&miniWua=HHnB_bBxn8d7NWxOVNOSvYo7gGzkJxardjOvcGILDwj8BBWVMYmPB70uOeoYigaWwwn0HU%2B2za9N6zrn/OGDuPKkFCJl2KZOQ6ORF4RgevIiPl3%2B74zDQGieveM9M71Yya1nzQX%2B5/MSjgXWi/%2BWeq1Igum%2BzNhpF/oQjfTMV/sRPOA0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=F023D1069E5FC39A612549DA0F33F90D&sqSv=1.0&timestamp=1629011566&userId=2916901745&user_id=2916901745&wua=HIVW_G/y9maGmZVNRTVU%2B5Ide1U21mXtTEMdAqWMYlz3l38qPuvmmqeRLpRdKTPjiIu/sJULHtAZbn0/wX6y1QcBz/fgisruR5X2IreAtjpClpiGpaDJygMpCQWs1H%2BVyPQZzRM8eixNAzZNkjfRt3O/Z56y7H6FAjf6N/7WfLfYnTH6HfbX7uZaAJA5m6gDvgtyGBvlvz9tlsWWqcs4VcgAIJP0WCNQQNx/rKOjwwsPwO7V%2Bd81ZLT/EwKv8P1QgzsbwbZY%2BiCLL1rlTzO5hugrYwiMEPB%2BfCWj93xzeTuOJGNI%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt)
                    {
                         await vediorewarddraw();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function drawreward() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Leto(JSBridgeVersion/3.0) AliApp(shuqi/4.4.8.0) WindVane/8.6.1 Shuqi (iPhone11,2__shuqi__v4.4.8.0) 1125x2436 Winding(WV_29) WK",
            "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.6&utdid=XblVsgqHUiwDAN7BcQnm2A%2Fp&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2916901745&sn=9FFC2945934B0127160C769D23FE8D9606CB0FAE&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.4.8.0&personalized=1&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg&skinColor=23B383&platform=iOS&sqiOSUniqDeviceId=6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5&mod=iPhoneXS&ver=210802&skinVersion=1&skinActiveColor=0F9970&statusBarHeight=44.000000&wh=1125x2436&soft_id=21&utype=vip&skinId=999&idfa=00000000-0000-0000-0000-000000000000",
            "Accept-Language": "zh-cn"
        };
        const body = "wua=HIVW_TB8cyKJuhWjB2xlQurypI5kuvo%2F9AD711q3jpJQCWsJNv4fq7zpFB1wtzj5oyVV06fN7qncBgRyAiZ%2Bq34MNU1q2hO6Ybas%2BaH9laokU2sLg6itc9c%2BB642cbshDYUOQTvv1JosGC2scvgd0Q30DR3N3ZvTRx2M9AbfWcTGz%2Fa6BNhLrDakmYc%2FleyEDs838jt1OCA3PNoJJvfgt9tYlmu94wFjuoKdwAzIGlJU7ksaPbA%2Fyz7BLv%2FLxJS5pikvxr0Q4qrGqJFD85O3XCnupN0D1%2BE54zVXC%2Fgg6Pe5bIQs%3D&ua=&userId=2916901745&umidtoken=sexLoWNLOqLnEjV7RCUGcO68DNG%2Bz6if&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1629011857&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=b3243867382bdca486cef64931b847b8&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.6%26utdid%3DXblVsgqHUiwDAN7BcQnm2A%252Fp%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26umidtoken%3DsexLoWNLOqLnEjV7RCUGcO68DNG%252Bz6if%26msv%3D8.0.0%26brand%3DApple%26skinVersionPrefix%3D1%26isTeenMode%3D0%26appVer%3D4.4.8.0%26personalized%3D1%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUyOTg1MCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMTQ1MCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.m7JoGGvNpHsmlq1HvAechgvZI1jbUPXTT4B5YhSBvCAsFru7IaIeyYRLbEoxcc9LReAM6f6haj8jLw0tbKf1Dg%26skinColor%3D23B383%26platform%3D1%26sqiOSUniqDeviceId%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26mod%3DiPhoneXS%26ver%3D210802%26skinVersion%3D1%26skinActiveColor%3D0F9970%26statusBarHeight%3D44.000000%26wh%3D1125x2436%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if(result.status==200)
                {

                    if (result.data.availableNum > 0)
                    {
                         await drawreward();
                         await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}







function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
