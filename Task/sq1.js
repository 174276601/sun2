

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
    await dailysign();
    await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await vedioreward();
        await $.wait(1000);
    }
    //await vedioreward();
    //await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await vediorewarddraw();
        await $.wait(1000);
    }
    //await vediorewarddraw();
    //await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await drawreward();
        await $.wait(1000);
    }
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
    //await jsvedioreward20();
    //await $.wait(1000);
    //await  jsvedioreward10();
    //await $.wait(1000);
    await  jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    await jsread1()
    await $.wait(1000);
    for(let i=0;i<10;i++)
    {
        await vedioreward426();
        await $.wait(1000);
    }
    await $.wait(1000);
    //await read426();
    await yuedu60miao456()
    await $.wait(1000);
    await tiyanyouxi60miao456()
    await $.wait(1000);
    await liulanyouxidating456()
    await $.wait(1000);
    for(let i=0;i<80;i++)
    {
        await yuedushichang456();
        await $.wait(1000);
    }


}

function yuedushichang456() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/jcollection/collection/iosapi/reading/upload";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "XSRF-TOKEN=710e2c9b-988d-44a8-a312-2ece8ea40581; isg=BPn5lQYgvG2w42D5e9WgiNoRAmHTBu247mCLxRsuNiDhoh80Y1Yqi2bgIiBUAYXw; cna=Ct4MGpqsnzcCAXjQsl/XsDTB",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "x-sq-req-platform": "iOS",
    "User-Agent": "shuqireader/4.5.6 (iPhone; iOS 14.0.1; Scale/3.00)",
    "x-sq-req-encrypt": "sdk",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "2075"
};
         const body = "data=uBs0e8ncfJxiL34cGbc6iLS305aVuItcjz6oOzuBkro89l7XPq9hN4znB0ZxwNBPlseTYnDzB8kRtXwM85wKP8dzguNADO%2B%2BiLSXWF4KD1DPV5DAqlgjQnNTxSjg80FThi%2BX/NpCFjgnngucmwttCgIYknJNuVcLIeKX5VQy0k4QWBl/e%2B5CoZAWCur9o9pQZxI%2BOKgSP4s4oigiYLVSmsIXcVami54ZV6gOzyve6MsOWoUtNB5U3pt0Hptu5heWzYoTgsfuhyUIN5YM3ZjRhXeuAj7WM3B6FH0OJy7KZWyXb0ovUIXkm4Jt/aeaJxnGJmYtPIQhvu%2BhYQ4gIUEfX02lm0hrPAXRCAnHlcJutcFBoSmH7VKtTTZ9vj2UrMd4%2B/GVKqMqAO/R/08WFzFj%2BirPKJzrUWPVNZ%2BElPPLfUVY58hh6Tl%2BN4zcnrSeoW8xCAH2Kz58pGNNwVxcRwHr%2BQWY%2BcclN4UkwdT6OoLJjwqe7WyBPxxID5iqaU9IvM%2Brk/F1p4cy8DxgUcVNRTf3wxETNRBT9pwUPzZdjdUcIbAiWAy1C4Y6YJ9vbGTYIkHxCtP1xk1kThQn4tPFkmA5WIRcr5O12m9SuRQvzBcVoe5rskW%2BZaH9c0F1ylX7shSQhD3fDAEe/0jhCSNek3qFxfiuuObn4ZSigny9XmTCks8qVRECXoBwS5uv0BXd9MryQDLmaLnBKKcDRo71HJ8lln5sbKXN5XTfL%2Bw/2jH53ytFWNhbty%2BR73Afpa9GLuFvNZ6KwYMvWQxS0XmIhItLrx00fAQglrjgP%2BISDpgwN2bfn8K655SFa/N3I99KXcoyWwdGldGXDoltbcAAQsgcmUBTWSwoNT2KDsE7hNg/6b%2BlxPun%2BUz6fotNKZ2wDkeIpb6iFez2/EtToUcxytJbBJTUH2/fCRbG%2BoJ1diTu4oBczH8cX/SDS2Nmua5KXnW6n7c/zoXBj3GdO5VBkZpcgZhO1SkH9eyY5XAT%2BzgyHCnDPgkLrmfu/JHUGIEsG9OJVwVWJp4H/c/b8Qg1GrW6CG58EY%2B5GIRfgfWGllBleo2Qv01kf4RovKK2c0pJUa3XLzbKPatNgcfiezeK2Eew5ItZMoW7wKZaL8wY0Lx6ixGjwLCaPhiUMZx3IwTl02PFfpaVNWJUe6o46iDh%2BBiPjNhToSasWKyXXQ8gv3xAB4mh205VpXUSJOxF/qIHgu30fgYjs1NivFDwPFC4I51k1SmCORZPsiYYcfPr%2BUD3zNhmRr0PLyAEwwBdalthsl8A/oZqzZD846MTx05hg1Qlwfh9%2BnFmtQ3TtsZcvHEdPQHw3gv1R62THzDnEcg0zGFTAD8jXtocRIdnDogmLMzeKCuCmKFLNbttAsLXjYMY/aHxVQ38FtoTD12OEHwX1nrL4imHfswannNGb2cqNrVvzVhwAws5B2uLO8jF/KN6GTRZJCvj8gi8WqVNtedgSgIOUzWa4vR1%2BcDcC06wyvNMSOa7qCD5fRlu3OnpAUD8ZmTxfMqPiG90Fbrwga14X1aebVrKlP96YRGozSAKhWV8MToDLtTUCoSoNz0r2pty/FWbgtkQaYPO4eSfLFLFOlMPF4tn59WrX0Yd5KmvnCNdYAuoUQRaCQlstwZYGVLpsJlMQDiSQ6nMetyr8UvfXFm59m4CgqoC85I317LLbqbGdp5rjb9%2BvTUMmQmFgdKKNhCz8c6lrigeb9PUIi9XtVL2QfFBsqdTtk2bFIgw9fJKCyTuslmxiULC9wp9LNK/Evj/IIpkc0CcewiFjJTid41VTENyhMxP5pBSNtHjVcehTtr%2Bki6hsOzR2vD62OoOhRXeq3JTDDj0O5zfz4JfkiJGhMIsyT2aZdsoVuehARc3%2BUClHbPdXzJa7cHaV4F56mb2KhgwUF08CHXoOsXRd/ksCxfAlVhfuRiK5lA7RhxHKYvqdFp2zxvvmLnL4jj71oEtKBk%2BjqAqosEtlWVbQ14obEK/phQLKQAdUnaeqXlOZZs%3D";
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
  






function liulanyouxidating456() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/convert";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Accept": "application/json, text/plain, */*",
    "x-sq-req-encrypt": "sdk",
    "Accept-Language": "zh-cn",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "x-sq-req-platform": "iOS",
    "Origin": "https://render-web.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.5.6.0) WindVane/8.7.2 Shuqi (iPhone11,6__shuqi__v4.5.6.0) 1242x2688",
    "Connection": "keep-alive",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&ustatus=1&contentRecom=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2111665808&sqExt=sFdgS6z%2FKrAWBStLDL8siaCpydLJj%2F8KqnWSCA3mtvwe3k%2FbLaV3LJe7URkgi5tztM2ce3HoBd4Ms24k7oMWKvZUtZJvKdiBwPj7YBopGFKpTJSgwkljHFAJ3yCHiDQvgluV%2F900A2R6wFuQn3NmCXJt5AVZzF0FLIma6iNR01QNGS4wI78RsptyTbSg%2BqAHZFQJZON0c90z%2BX11MKZX67xmcUOX1rNPDvddk3DOnsRQV9F9MGNZmpwjZO4JmBuS1vBG86Pp%2FDFUF5o236XSw0f7TmjdCVlcFnMzNxDOM1a%2BCzZbGMeR5NJAwufB&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.5.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYzNjY4NzYwMCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYzNjE2OTIwMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.wSCuYWjwKFLBB6itccrA50MA3yXmPoxGoJ2ugJls8LxQVQExEJwxFaj28iO_oHXEGLLDGatMgKdSuvcuqJEBBQ&skinColor=23B383&platform=iOS&ver=211102&mod=iPhoneXMAX&personalized=1&skinVersion=1&statusBarHeight=44.000000&wh=1242x2688&soft_id=21&utype=vip&skinId=999&sdk=14.0.1",
    "Content-Length": "2771"
};
         const body = "data=uBs8a%2BnteIFECX5bAa8siqK53caHvK8Q1m6ZAhmGrLJo8iSJev8BSczaEwxlvqpvkvudQ27eGPAOnWgC%2FvRLLfAisJRkWPqOjKb1FB9YGjCIAvCXxVVlWTtei1qJsQtF8CWW%2F79ESWVXlF2UqVA1TkQb4lpBzgZTQJ2Fu19yrFQDUjQkRsEKwtBuMOvVmbxuNlYWe6ZaMYpZhDspcNFSk%2B4bfhaH3KthMfl4pVuWjKNxK%2Bx3WVh3qvkqfN40kFL0mPYX9YCl1Bw%2BBIBA2IqS%2FWDvXU%2BKJ21HUVAlCw%2FWLXOLBiwpINO5n9ww5ueGIFHBFyoLPLhp%2BdioCHd%2BJBliIjmDlGwbPAefT1zZ15cd5sBZvSqWzGO%2FHGdV3jnj7qIur7eaGr08QN%2FN6QhmNHcBsWKYed7lURi9SYKkmPn6P05f9tIwvDpTZ6zSja6XgWgWChmIKhwJ2CIeh0M%2BdhbQvxqftYAhOZ4OgfLufdzjjUSCzWDxCUxlUL%2FVED894af%2Fzqws35hn%2FE8sIrstXlCu6TpJVFQC4JEPQE0W%2FbwAF5NuInjrcIRQCYk3DimTAlrFfoHn31dSWxhpnKLfrGR8O6tjjbuj2BBk5CQB21FL3bMi7zDgZszAfl5el3nWpGuz8kCGUTIf40TCOEsrhTuEyL2h5af6sOi%2F00CrSGXglulnZCMQWr51GdDb6wXK4pX0eQ7lKJvEP6ZwYJ%2FkM61zxRBHfb6J%2Fl%2FjeLFN7H3GwQ1LWd9ijiO7wzMIvNoZI5UWB9GozJ8UeyQgmhzTvKxrpRo6Bw9N4MjlR71TUsRYXS%2BS6ua%2BwZm4bdRRB40SKN51fiFQlNqfJaQPadt0RaV%2B7j10WFomRTXbc%2F8D%2Fv01kqLW3M%2B%2BwUT7f6B%2FJ4eHD3C%2Bj8jNBcvy1lgtwH0n4MlnFJzOAEjvHjWjjZBLJhjC0pw%2F11VYe9azRlUPkOl3TEms4f8j5rWFoC29AuU%2F4f8zn%2Fd75Gkf6vWJkitupkRxfDOQX2wfk1%2FW5br3JZdYQ7vPK3cQfthzkdfR9wEtJ764EQEsdsbCf%2Btc%2BZjT0ysEH9yqo3J6Of0Du8HSCBwlSIGCDkC5aNA5xsixLEDN5zDKt%2FtSGcaXnIJMRKN9jesr9AHanuuRfWGPDrBgMRCw81HvT%2FSgJUhmUp8bpWu5uSSNuI8PhQS9G9aJaBIukXBvYpO0%2BkdU0ldXRJxnz7UymO%2FgVDUs5xlugGeiRS6bFr5FrD2LOCpBrSMpIvD46gyPuakSJL5IaicO3httOAYooxVdztE3%2B%2FGhs%2BlMzA8rhEkx3f5Pry5Dvyfp98lb%2FjFFQ2OD3gfwXK2LAG62P4phk0QAUhUFJ99sM%2FMQB5ZrHp3qQnqik6Y4QLloA7PbhYl705e%2BXQPkYMFnDA3KHH0Xzgj%2F%2BxWKN9EUr1BRUjBraaxk7w8mIVBwC2udYJ6jr7V%2FPTVrJGSgvQaiD8Bs9v9mUkRLDHXrp%2FN35sveB1a2zrM8Y7qS4yT%2BCwVl3aq7DVXnYEDxbfafk21uXN6ztfUpVxXLLhmTy7R1Mh%2BKgHEJ1z4Hagh4TZa5V%2Fv3Dmtjy71R4hT%2Fj4JuJfiB2cS%2BPXiKUCYZFYIlxe%2B4WkNw44aPhEJNSCWoDgxUcFw8pnUaZk3yoKRtAU%2BHXpGMDrvHxH3eHl6ygh8c4O5m5exR%2FOb7YZ7SXKhmu4UY4G4Ftxvhr%2FKrdgL6ks3bsUMfQ9z%2BAw9Qv2%2FeS9Ja3a0rr0PtI5Qf6%2FQYLDnTlzTPjFWnpXp5TY%2FrCovjNZtEQnO8QDKv8rzYap8hDwQd68Zy9KtLNIztc9K1Ob%2BR21b63%2BGqmZihyYsLiRDiqnxaMy3vF6qSnP4Zi3h5tfp6xAGcYuAObd2MMFllwSHdGsu4N38j26aVRfccv17GOAMNC39uaBSTPb2JCLxQXWWL7iwvoBPUyVcGTR5eauTxESUryQSu8syOi029g7kaNy1egutv75J9%2BHIZa25ee3mgjwsHOhYnBSHDwTgMf6rcwAhbJj8rOHO5IuI3oK80uin0sP%2BrljqAxdKyBjiu7Cmx%2F3loLGtaMEONt3%2BbHFyyZAKD2SKIxuF2nzDMs15YZMK1Mwiwr2jsNv7grZUr536MzsHEBxT0CJh12yFTJc2%2B%2BU%2FIy7%2FaK1RK%2BIUOVroSPTm6X5KvILbLY2bmH8j3iZ3k707kwGtQoKC2EBliTPYtHk8qhOpsNxSFrOzHzBPhNqqgxkv7gzTRcgPHLSWUeC610HrkAf460Kld8TlQ5GXE2Wb%2BliPaNQkdKOeSBFnsAyI2TFhiO%2BBTHYVJN8RMFlqogrIVDmVnZSQGHb2QBUTXYQAF%2BJGMrv%2BKFx6v%2BRNr%2Foiytvw1qTRZj6VJF5rEM6RWHzuHC4V4eX%2FaiM9thfwC010KVP1qFEcXY4Nu7GCt2t5X6nmo%2F1yLl%2F0Jjls1%2FviDpcnO7RsffAkH1AozTpwVRykfweL3UPZJ0cno3M7nsWuGer11aUIu%2Fu2dT6SqJBBZl%2FIhjJToRWIL5AMHp4lNWbbqsPcl8W6n0glOYgZAgQLEP3hEBvVA1YhAC%2FILbIoY%2Fg9VLf2P0WyNzbhc33P2tPcZ";
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
  




function tiyanyouxi60miao456() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "isg=BODgUNHmlabi_ymi-uoZs-sGu-qy6cSzX1eCPlrxz_vaVYR_AvjXQQdn6XtVfnyL; cna=Ct4MGpqsnzcCAXjQsl/XsDTB",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "x-sq-req-platform": "iOS",
    "User-Agent": "shuqireader/4.5.6 (iPhone; iOS 14.0.1; Scale/3.00)",
    "x-sq-req-encrypt": "sdk",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "1839"
};
         const body = "data=uBs0e8ncfJxiL34cGbc6iLS305aVuItcjz6oOzuBkro89l7XPq9hN4z5EVohs5Ye3brAIzGdVp5Q6DtVqJIEb9BltMhNHeS3jJS6UUtNF0jAS4POpAo8SmBbiGCv6Us03iLwm8RSV2hv41TOq0suTmIk0FJWxkcRKIaC8E5giw4jQQ8/LaVS6MNaMOWx/tcNexhfM6dCft9v7n8AR9FZ7cBmDVfPi%2BIST7UCziyy8ct%2BKuo4Qhcmwp4KGp9rlxCQ3I8WxJGo0CQOMNJL7NrRhAX8SGKUNXFgMn0DPBGKNUfLb0tdB8mk3pBb/7iPGwzDIyB7EdE1vJqhYRojJh5fGSSukEoRai/QRFzqhJd995tQri2N7B76LDQIvj2UrNN76LbQOqIQG9SdqC4XYjJj/S3MJpnrRGnGcsSYne7AYk9dp5UAmEpQTJn4oZCXhBM3cSrqV1B1uWAuvnxTYHbnrW3LmqEOLZ8kk6jpe9qf0mvumGmDOxZPB%2B%2BsaUxLvsyll/AFr/lF8TkaULFKRjGGs2IRMxVU%2B5weLTdO0pAHd/VDU2a9C4YxYow/KGfEJwqma6HB91FxB0M0o47fl18yfJJHs5SKxlpGtQpjh3YXwO146QCDc5D2W0BcwBSt0xfxhi6MShA46myhSEJZ%2BXuFxvios%2BT0o8eglGGgUGbKhMM0FUZjXOFzWMT40wHV4M/nVjT2aPmASdU3d5LgVcg21y1ser/R4j6CTroC9SDR8CprdNhelzCi73IHtKgWSr04Gp2k7K4RXwxUwX2ljKdAvQpvanEu5rC9AeIBP64DBFrvody64ZSAQfVEC/h%2BetUofQRkuPiXO6ZtNsBlSdsUtXUNcV0iQCrQCZ889NNK4eWl1een0HPQf6JwHLGsHUaav9i5TPus9zlIkUcszclcG7LXIXzINB2x/oduFzPD6YNbhnt4S9mVdnUXsvFdAGLkoZkCup3ClBadK5VRjvxc55Qq2mMivMrS4XoT5SdrKV7pSw1pukn57IaKD88jG8SHbS9FF7Qz0MjU8S00PLaYC2ZuGaOtfpM5qNauolZVepO1ukVPUvFs3raYZFpCCaehORjNM5FnlJzGOSu5yzKwu4tDMpiw3b1xJPkojpQ9iA%2BFw76mZhnkC%2BU3RU7Qzg3gRfeQNx5gQI4irg/c2Sy7g4IQohTUVpuAeCkxsCFveqmQo30Q1XggBfRs/Ig2qfG%2Bc1BksQ97uEPyBSWrBYNfph/RfCMcsQ0yS7HQy0iL09sBJa5OcjoB6QFyakUr8z4BifZqt5Dh4rBRnV95hE8xw68jmyttj2eypYcbpk8nJzzMwSbhdaGGExrmfZ9VzxIgdThVW6gYRPoZDvEqK82gWSXz7NA6Qr8aAb7R8PIYh9H%2BVn3/FMplHALXGTZAtyDf4xaBdPoyh2YiBXRuZbEvjDlxdgg5BmieO9uEobl/Jj99MjD/9ULhO6cstvQhFxgLeziv6PZ5zMrzC1D6i5JPSu/EpinrfwovnvvpFUfLdFTYa%2BuNiXw5Utv38bd8QVaebVrfluw/P0PzrCJ8gGUwMXQJIMneGcXxIiYSx6A%2BqzSa984TesSM8PmfYAWkUFEeJ6hC6OquBnJs8KLeqnRjTnqlKnMyCGp7wxUfW17trMwaIX2/ReWOaZ356QqHPVvJ6WoCg6Yf89Vw3PWQKLzZTrNyjpQ75mMylTTeworcJS/ln536mUMIKIiSQnYC8iqtQv16/r9YuCOPJagSqY5sVlu7rUu451e0%2BA0JJtexeu3lT%2BwlIRHBMErA8d%2B8CZVNBh590J1G";
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
  





function yuedu60miao456() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "isg=BPHxt6KoNAWOjJgRs70YMJLpCnmL3mVQbiFibtMG2rjY-gFMGy6nIg1YGAicKf2I; XSRF-TOKEN=590dad83-acb3-4952-898d-82b7efcab117; cna=Ct4MGpqsnzcCAXjQsl/XsDTB",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "x-sq-req-platform": "iOS",
    "User-Agent": "shuqireader/4.5.6 (iPhone; iOS 14.0.1; Scale/3.00)",
    "x-sq-req-encrypt": "sdk",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "1839"
};
         const body = "data=uBs0e8ncfJxiL34cGbc6iLS305aVuItcjz6oOzuBkro89l7XPq9hN4z5EVohs5Ye3brAIzGdVp5Q6DtVqJIEb9BltMhNHeS3jJS6UUtNF0jAS4POpAo8SmBbiGCv6Us03iLwm8RSV2hv41TOq0suTmIk0FJWxkcRKIaC8E5giw4jQQ8/LaVS6MNaMOWx/tcNexhfM6dCft9v7n8AR9FZ7cBmDVfPi%2BIST7UCziyy8ct%2BKuo4Qhcmwp4KGp9rlxCQ3I8WxJGo0CQOMNJL7NrRhAX8SGKUNXFgMn0DPBGKNUfLb0tdB8mk3pBb/7iPGwzDIyB7EdE1vJqhYRojJh5fGSSukEoRai/QRFzqhJd995tQri2N7B76LDQIvj2UrNN76LbQOqIQG9SdqC4XYjJj/S3MJpnrRGnGcsSYne7AYk9dp5UAgzt0dovDg7C52HUceiGMFg8D1WQsvik0EwWP/n6KstBQJ6tb8KmdMfGL0xifnR6GSxc8D5uqYz5Dy73flox33YQw/ktpJrE2RUHmsmJNcFdG8e8VJjVWj8ZDZKR1CibpAIVQEcotNmOPcRnmRInf0VhmURhtvrXEnG8%2BdsQdmMv/hglJryYj0VxrirsrpUCTJtCqIE5I1Wf75QLn8CzDD05YoS6hSTAdsjzYn7j5%2Br%2B4tsb31Er/FDiVk8c%2BRRNGDrA0HMzrmEf3wNzjTyO2KOrAaOc0bpHrVclEwTFVYbT573L%2BY5Uy6jLmzwRrcYg6uxySwG4dlItgDZE4HbOFw6kSSVRS/HHFgLZ5vjcGd14Ohai9OeIsDrArL33cn8Wj4Zeja/JwDet5Yc1yQzhzus65DflzQ9QAQfcT60B9Zyk2GynAEdEK9cQ/1/em%2BuSb%2B2LLCYtiF9WwGEC9o4S5Uuv3yhNQmEgFzoxcRI/qNX/ACRmx%2BuZlOjn%2B/sxA3HMYQMq2dn0SqahKYGLKn4keuJmlh3KBFaw2jrdYwJx3wi0qzM6d5V0D8j81EynuFwVHrGDA77vmD9kBCuaVUyxOJrc19tv1zj1sHYuyFmxVHYS9IbEFq%2BKo11JyaoSXuGQ%2BVb1C8KCxXVllCa6VOiHKfK9nv93JJzOJ21yrv6ADMYK7xItAF8Fz6Zcn8UuG0I%2BaKWDCUZx4f3LV0WXocaPSFFhCc75Lm3/87Um0hKwhpiDxe4DPdBRrnX0zdr3%2BwmFy3GMlRo544pkyufvaezV75ghcp2XITF3OEoZ6/yGLGTNAuGd5Mvbj5V/%2B5vZLZb0OXWFc6F0mNhI89gpf28A/4NGp9bVlmHFexxJ13ft5kBF3sivx15EcpmMROzaAgya0NIunMmfDHulXxx1bdkgnL9YZNPdjcoMtWrysJSGD7dEwRL5oc7OnkINr04usRQiOOb8/RQHdJV4yq2y9vQ%2BKY4dMggw2BnMoMuY4iQ4oLldeUyjIYIKZ7%2BNVQX89dyr78gmTHOJg8qcREx0KSH7oxbBatpyoVAftjqULbaKI4luvP3Q5g/31FBG6URKkILLa0TgsUbrx8%2B4kVFXqbFjOlqJ6YV74zSF4xzgudx1YfMnfa4SvYWB727B/8RSN9a94CvmO/8OfKVfVXFMXHvNo68GGBWNlgsjclTYWMTmVHjByHx8ah0oaChWruo1CQDiSBPSSb8CsoAOWEg%2BE5WAOwfVssM5l%2BrDLfqrfcKsg0uk95GMDgybMqcLcfm6i8sWr3igfY9XeVHwY5T65daUppq4jriWPU9pmo4xqIFi%2Brz7I4lWw9nkPXqelYvjiUpg0LAOLYzWU4ow%3D";
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
        const body = `{"message":"2SQoD3UhxkParqRkVTBC7vg50\/SIQvc+xteKY7XXIC1KjUpirW+EbrFQpPS4oC4r4YESVnBMphNFoQum\/vYmlVz5kVjhyHzZ78uv3LfpcdmO\/sdOp1kn9AJF2DK9WaFEWiSHZvd7UrqBk6Ly9sdLt6b\/p79IrGuEhPWWcdXpM\/IcNGOh1xwBW67YG9axlXioZO8kMJRseDr3I7DZXQSdhnrAilNmH4CaoCcuJeBRpF6TDFIFLpGGgNFYBosTPmHH6c+fTab1opEtiVmY5H5Fr6CCZeDT4hy8OiUlY2gpYgrxL0GgPUWtmWxx+UXAhqkOHNki2rXLMrCSndaAR0Q850t2wnuwskSAyG5e6jzv+K7oUulKMmBAhN3SKtILUFKYVbpHPbQcRjWpnTZrtrAcpyMi1VUoFOKpOB94l6gfwoAPf5HleHaR5USnS1MTFKm8vpFXWshIL6Yp+XPe\/1X3QXEtBk9MPrWI+S1KCEUombBcFdORYMd0z9fiNeg0NeEpXwW3vCMhHpiZNvKurLTuP3CwgG4GWODaTaqgIFzUl+BvJK4j4GxhYGul893JDcquN88mCs6HWaU8p1\/Y49nsUJt4JeFTLOEHvNPSH14ZfwAeVL\/9OkXsdjIFg3+psfV0E83Tkljs5Ys+sx3hg05zVShb0HPpye91SbrtCoBmjFQg4RPE5QvBrQY\/NeGdYCTnHPUARpDjkyIfw8jshDknnRlKAdAEtIVSMBDFZuORLodlLvcXIbA0GBxpBi26pmz3IZbD\/yko1XqvXGVGacS+oM5YmDe\/NwXr8qYtFAQthgCwUaUlAMP8Y0Zt3g\/ouyqzKeIn4US8WGrwu4MyoVli040IhoC5eo11p07YQIR1tOLK9\/mMIZRglThTd6FKA7Gkv5uyTnuJMOxYLK1Q2rOzTbm8vNu2xNFPZa6JtnqO8p2voPij874e+mOec8kUj8UlY1XZOrzddwhplSlHU4HOK8SrTw\/cH7Nk\/ORorJa1lMZQOiXT9BlMEBM4uKH1P2i6+hw63J+FPukviYRX+Q72AhuSLbu3yIHZeq9lyGXKHsuEmML68wntGakKjqmchsqMwz3Kq0cHiaIFpdU4XB3NIed9AzodfgBW3R0e\/4BKAL5Ev+anwtrhPC4gO2ZUYN\/6AR+AlMiErppOG2hfxBfQGnV6gZa1mekAec4EhNTAC5N7WxKK\/i5NUWMcfsWDHONnU2JTbcK5cC2YQ7xTk+d8oYvU1LOV0f0uVGBDPbtQUaRhjpgtNKZXSmgQLm8hNn6GmMQo3hDojBywAtPMIZuIA7tx+bWAWNeS4TKauzGZMy8scxuil67KMjW+JbUp9WAo8g576M96rRPxbcZygS1PXaBWimZn0nUCBufFGrOja9tc7Ep4mtRBD7lMLfm2c8srUaVH6+VcCM8BczGZOalVx0l3Zaqv8UEA8FC43nPIrucrtE9DIBp4b0eWbxG1hcOxbIsLxzFrgvzIDjdEW8RGoJIc3wkxA7jfgZcFJ7Ulw1QIALQNJluMjzZ5o4jQKO7xrHUxEWCGNnvoBHj\/4VHAl8d5ArLq3EvhNZb6JHtSy9y1TdMInsDSvQEupBgbmIGfN519W0WTOOoFZVRVAtdTMFcIh\/G\/P8A4j4IrIGdIBqaBQcHrSMLp0TjpBGueU616sW1qvYBBimLTmGoMuf4nWwLnR7Gdnj5Uy0jFhrvoH1d+76MESTwk\/L6HUSFx8rPi2A+wOkHxFmpq\/2Er5zF1JcUnzwNjooehrwbQAZwXxhOvENBmnSU7oQUSYXPBeIpNeDVwmj54Jf2UfQRrf337+Sgfcjzulya+igAlcg7SDXSaIJ6q3Y7NCcN2FAAaHoGnbyvukqXuGhRrdyhrKJ3HoWxDV4ZjR+7sRwx53GvTPg4glCtwnUkmY\/upzvEiyL14V1HPWcOYpa6yrLkQFpb5fLYTuLS3\/bzvpj4+m7HT0BZ6iIm7QpK96ogkL8mbHpagfcnatUmR6poR3v+W0iJzZ3Rzs6z\/KG1ZSgG9gAkbtNBCsw0Y3PArxRIjJKEENhdIiSTPuCxlUCWBngvlBUGEiNpLALnS1U08zy19W3xYgaOLwl2EYAJxyKWUHMnvPNkZ5HtiLskVH4\/CAO\/1dmA1gwZNsYHdUSmcUFxZHyXbhfkcLlXbdvhoIt6XzyOfwBwEupFD6v2a0wj6owl21bpGJbxc77P0MnJJ59r98HyYntMUa2RTxU7TvT9QdO6Ec2m3DlsEku+nLTmknzhev6YiK7BEZvctlxp\/7nztPWpd9gIknhqFMxgLyNyAj2cVPwD39k6r3TPNOTyVNI3MjjYidyv\/kg5sNpLbHd+HcyMeKvgMnQ2avEzkMNuD647VUdSgoSrEGxog7q7toQrtiDpFYG8rAR3zeDpzQmQVXI4V8eEW6SFjDiMuMyjn3LkXfmCBT1PostKDn5WmslwyxpS+xB1LOUbVrs\/EuhyjJRIvbmFqycu0swY74+cXqJjZjQljf\/2tmN40Vk5wTnePLoisQHAUI8rAiKEG66lvV\/2HQykajuJgT1Pfz7ClimYYE6bQKBl2fTWMiQNcQ+aWCWUtiSBpdSQeKc0RB0NknVUlUkOeiWu5ca6hLvh8qyIc4J+uWYSkoQ7nIvZfOIoXXpMGZ+k2xER+hB5R2uZ0tIlc4MjRaaECf+\/nKnON3R+Fr5owa3t\/z9k9l8ck3mZOSdvA+R4bpn1VYjmYRISwb3jxvwO82x+B6d3bUGDIbphSw4A+XzxlbYGY9ieFFp3j72jh8Tw1IS9hCP1Z0MKq+UJnxEiQ7DmvYGxgECwjnKNfBsCJd0XSARJiyOC9hC8KxY73tempykTV+6jKcoP0kB0VgnyIm8s9meViNT\/FYnNeReeAJw7Peas5h1QPt1PlD4g9268T3kiHuW89avq\/kaZWz9nq2CrAuIH30WMj5pI4Kb3krwg3euuXZFdJ\/9vKGhz\/Xs45rfE4cvGiQh5oGLzdCjcQ3eW7pLTyHZnhmvKvpTuq7G9hAJvPMoy3fYF+we0hD9YbnQCeLqtxzuhvXSIRXbrMGsF4bE1qNvPNPpwYfNVgbhKj+pWD65LdP3M3wdWRAE2UwljQdlzJ61d0Wv4PdnKjM+2wyP\/2AKqdrBBMsG9n\/5\/qLr\/4BBRPM2nkG4V3FvTeGxo5tbvCkVdoqQlUiyyke4TbSk3K9Up9Hdm2Ak10PbjdYp2+DHOPh5fpfyG3UaCdjNgK1E7pfwAUJ1zuYwOXNDgs1syYQ8RYiN4IEA\/tUnzhMXDAjzJhMn\/Ptcrm44ndavvMCgRb08UkCnSUbP\/LAMHRu5TllXmLMbTkcemRczwxXvS+53I04OxeUyJWUCwK1eSXpEPj\/xB+XiBDiFtse+4khlPb2WCYPzBGGMUST8W9ihwPY15b\/+JxDTy8gI8DoL7zCVJPtO5i5SdGq8iLI4x1QHqB5Cpnhkn8e5iHVpJyWaoV89cMkyOQe8SFqESN9Ciq\/aX8n47f+8597j\/Y\/ReStdzc+HfzakrJzjfxXSEsiHpDiUnS0S5zecakQY4zfEeYUu8WCk6zWX+gg3+6jP3CTyUlHnB62mxApsG0oqmHYLkHB0QL+J7Ne0YnRbVOG53N4kGRkHXw\/bUbVqmbqf3Bbpbys3eycg2o\/SxCkMVC9ziqHCww\/FkRl0V76oI\/uUG4qp6acFC4psQCSDlMp1Ol1OXMqsjn4\/K+qa6MHSZ\/unPS\/99E0GC+CfAykEHrpjszeKlZ7NkKUwXXrRxQJFh0Io\/qSF3uKRIzdOigpkVHa9Ax1OzfAuCOvpb2gZ2ziYxaQDgBAgOgOXUjiLE1HngCXqAZNkgM7zpWT57sS18aagE7U8dMjhhcb8uYY3ELrGiBONB7LO5HujeM+8KsO3vmCAagZtqa60rmZdR6U6iPnly0Q58JR8Q8NMcQo5qCXXeMNzJruwaZ80VQ6UuNt78kzqP2VAwoNhweKtLON9EeNNCfGUEj8o4Z9LIBMaKiMrSVIB4yswHxPMJWBdWhwQLVjmb2VzcBhKKq+rAgtqyYD2nZR7uPccE+In0xmC6ub7Z1X35XNjwpdXmr0g6JtausUia17SkQH\/yCPOEmab8h6P1dM7ij2\/WFD9H0arSoQhOTVMpaYF4YG59kX500PA87o91ILKNlM4EBiEGhC7kcXLMwVazeSuqrVVXzDLie2d\/n14j3S0KFJfUP\/oGU7U85Kf5GtCreSbaNwDp7ALq6\/ahufXJrg\/7c9gqa3WVKqm6mSHotn5qZEL\/+C6SwEs2LidVhlKwaZpnfU4ERyD+lMbXIGi1fOGd4uAv8KtdkQg\/FOSfBV5O5r58pgC7ggcwW5sKzaomLR+y3\/ujiZ\/+XHZnvS+nAkXrAQfH3K2MsRH4WaUS\/yFs+Fzfly9gnUlRmbX5Iqx0wmIHd0YtYMPwSZ13l+o8I9sH1KLTMFdVxZ8Dp7xz7QvP+6EGoKN1IRt6WVyuZv61IREopWNTLy3oY5NYv8VM+Cg+3UcYk+4JAG9jhCOEhw4\/pByR+vgVIPA6pm2no1a9FuN7DVMhWzF6bfjC8GcRIJ0szPtl1cgg6dq9xrNnHp6NdqQpXZ74MiU+j2o1vPX1CB0YK9m7JccK4lkSijIdiZHfk5ESFCC1brLxaw6xAQRGyNG5tax5gpM8nUT6mYszRal6InqnGUH2JX5gHcLNPxQEwiwNTZd\/h5pLW0KXv4+t9KMkc5gaPg7GzdWqzhbqCEgsvlX0XHzKN6QthPa+Ck6AxzS6ZxjQYSihGcfQM7LeT7jmaSE9f42JHaqdpgnIpxv6AbQsf6rk5uvG1j7eHQZO2u7X41AFtd6cOsbJ0iEnY\/UCBcbdqFpQCnCsWtADqET7cPRxUocuJahTWKHLlyrNxLqqa1q6dGLkZtfJbuUxxe94Dv42O3GeFMuWvvOE1PcUQ=","cypher":2}`;
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
    "Connection": "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "x-sq-req-encrypt": "sdk",
    "Origin": "https://render-web.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.5.6.0) WindVane/8.7.2 Shuqi (iPhone11,6__shuqi__v4.5.6.0) 1242x2688",
    "x-sq-req-platform": "iOS",
    "Host": "ocean.shuqireader.com",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&ustatus=1&contentRecom=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2111665808&sqExt=sFdgS6z%2FKrAWBStLDL8siaCpydLJj%2F8KqnWSCA3mtvwe3k%2FbLaV3LJe7URkgi5tztM2ce3HoBd4Ms24k7oMWKvZUtZJvKdiBwPj7YBopGFKpTJSgwkljHFAJ3yCHiDQvgluV%2F900A2R6wFuQn3NmCXJt5AVZzF0FLIma6iNR01QNGS4wI78RsptyTbSg%2BqAHZFQJZON0c90z%2BX11MKZX67xmcUOX1rNPDvddk3DOnsRQV9F9MGNZmpwjZO4JmBuS1vBG86Pp%2FDFUF5o236XSw0f7TmjdCVlcFnMzNxDOM1a%2BCzZbGMeR5NJAwufB&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.5.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYzNjc3MjM3OCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYzNjI1Mzk3OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.YW93kpGufx8eu7Hi-dZaX68r8RpVYLShgKokem9poopZQL4vOuXy4VMx00JWTzDUyFChS_E4qbR3RwRP3LpGCA&skinColor=23B383&platform=iOS&ver=211102&mod=iPhoneXMAX&personalized=1&skinVersion=1&statusBarHeight=44.000000&wh=1242x2688&soft_id=21&utype=vip&skinId=999&sdk=14.0.1",
    "Accept-Language": "zh-cn",
    "Accept": "application/json, text/plain, */*",
    "Content-Length": "1787"
};
         const body = "data=uBsoe%2FjLUJYNejhLCrwpjqCuydTI6%2BIQnCCwPym%2BgaV%2FoV7cPrlhet78NFoh2Mge07bHPDaCUIpJ8nsB691DVNE0y4QfXqz2yfHhDQwbRAeICdWD6wpyETYM0SH0%2BUQigVuQm8RSVnxN0BiX%2BwNwChRxgkQdmwseI4af5iF1zA0qS155I%2BMQu5sMGLej9fFSIRkZZaRKKYk8r25oI%2FsEp6ZsaxaT5LIeJf9XgnuEvYoeN4pKBlp0n8YvDJB900bRj9RD1LWzwzseMbgWldrSxUfwV1yVPHNGBX4SNg%2FHOzLcLAsEDJ2FxZF15oCPGk%2FfN2N1Z9A3u5i2JUxlcQRPHkb62F9bNx%2FCQ07RxMYk6soA6y6N%2Bki9N3VV7m%2FA9JJ07%2FKSbuF%2BVN7d7zVAPXVv%2F3zfbsWyAj6ZY5TAyKueOBsV99UhqCJVZN2i1u3p2xZtA16ESQU36m9Q3So%2FEWXIvimXuMgiE5gG07ysY93Ut0rf2kbfF394U7vyI0VLrpfu9awm8IxsrB9kIqBuAgKV5SYdNw9W7J0DOCML1IofE6VzAj7oZtl4P8hgakCTehilCY3Q6UhyQxJ2pZfTizQWfpFCudyp0UxTtR0oiVdfr7csxxC%2BWZzSX3pC8EnT%2Fm3tmn2UcBoK2FftNG8krgP%2Fta7W%2FI%2FznOaT00enRmPHpvQ7USJ2BIsoJ8DV%2Fj7D4%2FvFUw%2F5dbX%2BSfADVpXUQKtV%2Fg5NY7GKw170Oo0R6nzh8xAzatpFpCii3k8EmYVWNo0PFqiU7tU2ezws6nO4upZgmSYXT1oGg4OSMcZVLsk6MUjHhumamLCYW8Z7LfYdWPYHJj9DkNiCWoQPVMViV88SkiB0allXPgLRb%2BYX%2Bfky3djAzOmUgnvKYr9HJIfRFmOD2aW0UMv5%2FTRtgWUu6PV%2FHrTzGkP2PgTYhfxoJAH15LBh%2F1tAesSZexpvtMJielrH%2FJAp4ee%2BhTWmDfVDs5RS%2BuNT%2FVA6xunp21AC2hw9eVfUNCpSilLiv4v3L4VMON3HKS1RCI85y5vd71MWOvKxO0JOYs%2BGdI8dmfitsndBeJGyt0w1a6hO%2BrWzZgRxdJ29GVbVB54%2BxuTXHQu%2B132%2FkapjJLPG34Z7RcY97456jRWt6Z7VLCbEC5Z2f0XgvRKDZfLHcQ9iW4kOuibn9kbM65sGnlqtEMXLPVJ%2BlXxuCJWW%2BU1I%2BGEnNOIyy78wu%2FXiWQsg%2Bw5vzj65B2OUCodN4x2KIjUVyGQ4cOT8%2BUL%2F6OhscvFacSdSnlowNQc%2B8EoDnMMxspL25LRZwwg12gYwwexkgCtG4XCxtYEetnARTyTMwET3aKGLPze%2FYZUo2VYHXEFQLsBtLPMHQ8R6BJylRFWO2P9aFeQ%2FANOn9P5tx4OPKQ2OHdxyGCmeDn1OsHjJuDvWVJNN8QwzBnQqOPUz%2BUx7AQBLdRiMTNm0j%2BMnQWo7dmCnqEGhDv9G15c8FQAhXy2y4uVV65ivU2Gd%2FOI%2BSpO7qSH2DAga36LZVgHLURWjOcbe2TpZItr68K96N1PqewOewrt1ESf421d%2B8GVlM3oILcHYF4TfaWoPn4Y2rEiY99pneITMo6PIY0ONYHMiPqh04ruNBEtkyIWon1xNNCOrIxYvAh17w2UnSWXc%2FKRIQDmQYa3yKKC%2F%2Fw%3D%3D";
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
  


  function jsread1() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.0.1&ustatus=1&umidtoken=SGtL0N9LOlqVsjV8IbYjFbK8hsTV%2FPzX&net_env=wifi&placeid=111111&user_id=2111665808&sn=83319A9114DB9C88B754508D9A51F689639B124B&msv=10.0.0&brand=Apple&imei=98F9E87966D25F87CB378699F83BAA52F8406791&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF85OEY5RTg3OTY2RDI1Rjg3Q0IzNzg2OTlGODNCQUE1MkY4NDA2NzkxIiwic24iOiJmYXN0XzgzMzE5QTkxMTREQjlDODhCNzU0NTA4RDlBNTFGNjg5NjM5QjEyNEIiLCJleHAiOjE2MzA5NjkxNDAsInVzZXJJZCI6IjIxMTE2NjU4MDgiLCJpYXQiOjE2MzA0NTA3NDAsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.61M4GnnJPr1CCeJp1BuK2ID7OpNRswKCPANeoXtcxhq1MFKGCsHy5gFeEXCdd9ThubnSwFk5PjE0yUimg3SuEA&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YFHxHI7aGywDACetI8Soa4Ej&idfa=FA83D0D2-0895-482A-8B1B-48011F454733";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": "isg=BIKCeW16VwwipkoLZ9_3zhsk2YzkU4ZtNfwz6Myb6fWSHyiZtOKSfNhNyZ1jVP4F; cna=hobRGWOMVCcCAbe9r9ebSf7F",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.0.1; Scale/3.00)",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "723",
    "Accept-Encoding": "gzip, deflate, br"
};
         const body = "actId=355&miniWua=HHnB_0tDR6qf6JElzYLvSD37TvGO5gwLtfoczTi8uuChMtBlA7FTs5ZpTyVFZxDm5gr7XZJYersRxSR31hcm62k2yT1o9GpjC%2BqJd1s%2BMc3HVQGTTgiQlYkm457vA8dW5d99Gh5pqr1Nr93PEsudfiz/R9g%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1632717443&userId=2111665808&wua=ktgi_5t8K/uyBWcUFoq7OHBk%2BNUiaKtKZbP2Hi/OefERDd/5kSemsscnkN1JJDoNb53tysSiJLdrl9H3wBtiPQNwzESqucIyIgLO0iQn0moyeGoxP98z2SIJq79gcHbdfsBf7tFx0JDTKNXSP4PLIWE5OmcvkV87kzL5lQRkC0WM9E1MMVIYhMHjWLFwqbbcRLdTjwb7lHHrohX%2B1Or2wt8kKEjeIQT09XKMN4ypap5cFr9kRZHuBaam7sBFtCGfDAX/ZRRpPmDotZ%2BBJaGC8euADjU9BNERRj9OkLeZNu5qaCPFa7kembEoK1bDibostHXA2XLxkJR8HEJXJBSW5ClC0RxahyPGQdMrNsnrsIqshCrnkiSlX/IPguJHgguhqNoqLZpxk4Oh5bDSZ3XtUd8KOgQ%3D%3D";
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
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.2.6.0) 1242x2688 Winding(WV_4) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page/?serviceWorkerOn=1&hideNavBar=1&from=ShuqiTab&upf=20363&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2111665808&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=%2BtFLipFLOpZwnDV8SXkg0Tso%2Fjund9OU&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.2.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYzNDI3MjM0NCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYzMzc1Mzk0NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.4T16Y27yq9qTkV6UEYPgW6--PBn_IY5Apt_3Aqt2kfPYlW4n-wtmIgkeeqUebGe3m4XmpzetyHY1WK4MbP1Sng&skinColor=23B383&platform=iOS&ver=201102&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733",
    "Content-Length": "3886",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633753949&position=501&userId=2111665808&signInType=1&wua=HIVW_PvC78EaWMK05ZmqCKepS93b7ZrwDEX29T%2FGHrXqaZNIV6fz8ViGEn6k9cM1GuTdMmfTMXLpqpWW6tB9ooIhr%2FYjeZN5CHQbg6CNRlaY1D3oavTEX9N1uns%2BMW8dIsorxn69X%2B29JdgzbNf1vaynZB6N%2BbWI5Yc4a7%2FzRlREwqbk7N6FH91rgqQP2vAL0UDSYLbsPpEVTVYd6OP8Y2xFqniz72l4YqmiV0VU%2Bav0lUxU%2BD7%2BXJqZB%2BtuU0y0MA81LgTWukcNlrmQwURFuC%2FxpGBRWN20YMQeQyjiHUFI7zJNDqEhQZGRvj84vqUo4WtoZ4TfOZQ9fPc90739T1QwAkS7s3j5hU2nZ5%2B%2FxO0iVg7R71tkhPzpkthK%2BKaHcajxKgyXmHqklbxOoISF6r6JPglZ4hf1oiVCLfsPFB4Xs60w%3D&ua=140%23hrudnmdYzzWKzQo2%2BbNuKtN8s7aGHlpPtSdlnM1vxpdBKRislHWq7LfGk2cAt6W04Qvmlp1zz%2FVPlSZwAQrxsLN%2B93h%2Fzzrb22U3lp1xzRbIV2EqlaOz2PD%2BVounUuI0MI2y7yDY5anrHRqjELrEkgNfA%2FQiOhM%2BWmdinbWBRuHQI4z3HRq%2B4Mzaw00abUhC945NoYOVNMWlWIFxnWAJymTJfj%2BMS86uzt3XfqsRTuOtKlFBn2G84QUgoMmidIGIAT5VsaL6KtOZoXEtjFD%2BRQwV57d4v2%2B66qVYKBLn2QtkmXNmguuezwPJWlHTRB2NRZCdUdj3Iafb0VzhcZg3jj7riE5KpMJQqt6UA7kX%2BVrOP2QL4AjMmf%2B88o2H2R1JcsKTxtjo3W8eHS1jL92F8iHQdTi7Dvo3VKErd3cvl2D2qZzH2zqd3qy4jDKmBvHHp%2Bfd2wVAMtQ5l3CcLjeD1PqfVc2UjSmEO7kTpOu6%2FWObLHH5apiyKF2mihS7XfONMp8FleS9d0TNl4oMWr5VbfsuBEVT24ZE9%2BdTux4RnRm9cQDsx2Smry%2F0JkDSFRsMK%2BZG9k6XhLeCvi2Fp%2FA8i6zgNlfw6%2BzcuXfaAzcId4VRxkxBWq2%2BuM%2FkF3kbWC%2FhSGIYIeY31ovtLovfAa4Ite3VMPBs%2BqNt7w1hbCvUzK8moe5EfnRA%2FvyN%2F0btIt8fi1WEBErxUKmNoIwPs9eQghZKu%2FQ1V5t%2BKUxp3GTz38ZLHnWF219Gb5LpkWcWAc9IQ28YQG2nNIr5dHijPrtf0Xjys4QelqACeNl9YoY75yNyjcvtOkGc0kjSdIvF7kbXNpoHPj5MsxfFEmRQlRqOeR8DCQdJophfcgpvWObAX0l00tkmelz6S5VS9o%2BfNZ7Dm3IcqKEm53a7bRxLFayOxDfz5%2BdKWEGRV40Pnwa6%2BYt9%2BhGqLLJv5ToCCE53fv3VIFvQbgVmHNfhbJCLMZ%2FXrmhm%2FG2gUIAfLPVUALcr8PLkmKkBnEq7PiKr%2F4HdMNgimEPHdJzx%2F6p18TLPZgsD4THbveq%2ByHQ9FrR6d28%2B8glL35%2BoX2fljVOsypZY1qkhOkAhRV%2BHIZ3Ql6HTU5%2FdO8IEqvIQNJu6lM%2FTHom47IWFNwh1H1mb7d8Hbx2x1W9s3bAVnGBYEPIohWLQ0XifaCycjhoRJToChr1ORsngSjLc%2BtQ9V8XSVLl7Jrc1bh4Kb4ZS1dBHz%2BZVXS0e%2F83QTU28N7CnHZObxe1ovDjH2GTw%2Fbc0L2CrgF2Y9mbJx%2F%2BcZXppFDlWlIhXlbHjKstiFQQ4VWmSxw0DJo%2FWQlK4y94bbRnSADwGQ7emSQ85zJqp5iGkllIpqT3w9XFgVAhlLA5swf7K0ax6fLcYouzX0ukfxkRdRuTbGvjurWQUOgTvcNT%2F4YDOwYjZLtqPPH2uUGO0Tuq0u3ZIx19dYyLzi022S8kxoYZTh6H2w4b1iVI4c4owZaWne79tj533hCcMzQaa%2FjlsLZie7NaNkN8OpB2dRNJ%2FJxQO2TOwUhHLospKCAdvpla9bxDLPWLoU%2FZBLNMtt4SUDsjfRK6Jfscd4OzEIHgKQy7zURag7qd28O7s5D8jFVKH0tk64H7JzuyUHVdHQW1GQwNxwU0ymYgZ95CAakACQ%2BSm7S2rf6GTR05NrNqOFm4KzHfil9PlKZc%2Fnc5mXkFfI187YpKrrvAO9kUkRo6oifh0l62EiQR0DodXMajO7XKzI%2FtujyvO53VfmG6b1Du%3D&miniWua=HHnB_xm1TWTJQKaZs91CEL4mccCEIaLtbdAd1pmRmKKrFMmk4En3gNOEHMI6I3SIYw0L9sFCFglhPraLHJtuMqs1gG3WjeDR2q7fehPq9NQL438BPCjVaOCG%2FR7Cu%2BbRv1Bq2kgLUWa08NbHxLNjSJhSBSg%3D%3D&umidtoken=%2BtFLipFLOpZwnDV8SXkg0Tso%2Fjund9OU&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=98020b62a69c4fac84424bdda6ae1d60&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26hideNavBar%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2111665808%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3D%252BtFLipFLOpZwnDV8SXkg0Tso%252Fjund9OU%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYzNDI3MjM0NCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYzMzc1Mzk0NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.4T16Y27yq9qTkV6UEYPgW6--PBn_IY5Apt_3Aqt2kfPYlW4n-wtmIgkeeqUebGe3m4XmpzetyHY1WK4MbP1Sng%26skinColor%3D23B383%26platform%3D1%26ver%3D201102%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733";
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
  


       
  






function vedioreward() {
    return new Promise((resolve, reject) => {
        const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
        const headers = {
           'Accept' : `*/*`,
           'Accept-Encoding' : `gzip, deflate, br`,
           'Connection' : `keep-alive`,
           'Content-Type' : `application/json`,
           'Host' : `api-access.pangolin-sdk-toutiao.com`,
           'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
           'Accept-Language' : `zh-Hans-CN;q=1`
        };
        const body = `{"message":"2nF4aeEuUKLWtqRmde1T+9lTcFnlf0i1Pm0Wd67y6ec9Sb7bx5X77w4JwIILDlsSNL6Oe7bym7G6Q5Sls4wjMBVggY6VkANG1DjNkhd6rKmuvuj3p8ZQabydBP\/3GXp47eIiCq8WA5ZX0h8Z6oI+0\/KZxJUkRObsAu\/PdMp9CfIlnSZeosvvoMlBo0h2eOSwMwISg6+574OlDkYRpVbshFIpIvfgnjGhH9bSylAOqKdTiznh1Eve+pn9stGTjfGA0\/EI0N3tn+PIOQLCJCFVbhWLDP751UGm+X7TM4NKpiHeIoFefqunXOJH1wtpS7+3Ylr5If24Lqz8DKvqCW47a9dP91ZxkUmIRFyw+3tm+RhOPN5Ryo3hQCkzDNzAqaNVSki3QdZt5cc\/05e\/muXU0l4tDNlPfFi0Wn30K74yA1MDVK+vhy+ql+bQacfeSXdUM4NNvCVIC4P2bUUtBZSTtAh5COBDqNL7wP6LHYT9UcmYEmfIT+Tr11ml892NraTcS9x6IlvP8EtjxIfrZWvXN\/Tjjs3puZjrUrHpHT+l5xecPI0NHaSM9a4I7P\/r5Ig\/JzyhChfBRZNe2J9ozj5osku3OLsmOPqp7G4nwCnKjRfv+VbmIQF1G4uVayLUQ9zyVWe3jV1U8EyWLJk5f57Vwdae8kn38nF0gLWFex6Tl0dqRkL7eOPdD8synEcFxnLwwe+LUNKRnGI8gyQnekzzBSL2b4NRKAccntwskycDz35zHGCyGHmUAjB66U\/YyOcb6EOYgb+YXMQhFaYy4B\/Btk3qoOmRBWjJdjj3ufQ6oE8au9ycmN8eZtYJqWrgSKQVP2XDBpP9OB5ODOcgcVZN9Hiuxkc0je7K78kS2zvM7XqgErNIVIsPZNNYu\/oxXj792+NwREeA34lNHDhfkUutWQgtxyhJaOHbtd31yGj0ofZoVK+0+zPJZXj9wiRYbsS\/Xbqlw6+tpqFYTdQSbMbMW8Yb06nK9gy7CjvZhTZTQ4bKNhBVmJNDw2bYV8OYaeIqjDLahtlu98mPXOrD70yfjijn5e00XObS2n3LB2tnySclwY93UCl59J4Yj4oAah7jgWQbXP3olYbHWUyPVl8T4WuzGidrK8r\/ExKITEMruZIWYAtOaJ8Us5KvKywbsQfY+9NDVUeZhonoETMxZRNJtCMJrLQKKWW7y54rRKBd9rVyfHVUoU8wPWHqTDCNaq+4gRddJzMkHLLbxtrAFACZZTxnP1eg38DzidBpuL1ERC+KYFtBCGZA1mJlE5L65Zdo5+NCEv\/DE0w1ElYGQLC+sdDsj0GC4Zk0CRdrjWPiCQQYcFbIp6p1djI38J+KiHwMyBhRTIOrW\/CAflC21tbJ3tvwDAk+OHCnqVsI\/8xuJ6y16R+PDwBJzgTGVP6i8Up35flioyuxuQO+VikXeZluUonJSIMhU7ZoNsIzHe\/6dTOU20RUv7Nycw2AMwCFX8qrbe37Pm77rCFs7kBV1srLa2Lr9Ab8z63Nsu7pOoFrMVsteaaecJio32ek4WOXrzBbDfmJwmpOWnUIDaZBm6yEVtPsuX+cWNSfH7H7sbrswNQifbJuIA0jRoDqOw9vhzdRLFyfYeDhMT271yTp8W8dzpl2\/xnXNBcX3eZPQWL+13zK0qqOGOBENhZHGrAfbW5HDSnw0Xjq+KLMVIhD60cEY9FULq7kS6IZRs3J0w5\/NJUTBAyMTpBqKW\/3OtTIbZNBiPVSl8vSlL464lr0XZGFlv8nZ4PJjPrLIH1NX92zD0ToKmHdupSGCzBxhDfF5yBuFsIcQMJ66AJYU6UNdQa\/0JWJkaeap8EeyLTpNsnWYH94icRxXBS5YIXPnESCtzNkBRLetrme4IYglG\/IkgwV32yKuEoQjVwwAV4pCqGE1tseNvi5XTxOlvZJ9aeXHcWXYl\/fd4gr3g4tGdLO4jDzexakUEBtBvtOTu3+nhoJO58xQs54wU26auZLpA0jDAStDVQ0wZEwJUYHVWvw321FxlJkcN9qBsmvntYa0PxliG5gHlvE8RSKn8+acwpymdqg+ZvVTpono7qDGo66g7gv9KqjIFkT4GayHi\/80n5p4A7ZQ6Fbx80ksTaYC1OqTvgPtaj7acoazmlxvlRqUWGB1mrIgVm3tlmlxI+vuiNkkZQhmkwv3h8foHKcdZd3idgGlsueZRkmgCML4Zf3IXt\/afiBAqXYrYvnd6CVH\/IY78JQXEI3hlyOkhFMrH9F+Vv6bAWd+uDUXZU+n91EKncxNSs8FIREs8aPKKBaXtPMwvacfwSMxvYLDTQmqjBfhrtbwbaFgw8NpY7NFkuG4Clhu9XFpS\/WQYj9dt+NP+i11m9fSs8UDvAFwvJWRrM8eWLq+IkIjK23ARnUB3t4V11w9dzu4m5u09sfcsbVsKCQZEdMxY713\/Nd9HxlPnwJGYMJQTEYKN13Ca1b2qu2gIXwMiroeWVUAsdDOowPAvwxWmwVvkcsax7BDPQlWOU13CmAD7HE7fA\/o2S6d6im2+qDyEeDkFSENMPg9tUXXU9RHl3yqKI+4Y\/ojHOTdYbmT0iv7pscqVycwAfY9UGjlao3bV\/LCrtXpVOImkfYRskl3JO5yInOupzxV\/TaSH1c+Kj1JT5RJg6orB5kBy8cn00PtHmDaREJio0S8wqxBzr7jYZlPGt0nZom2QhFZQMznAlQB2obbMqkQmBH8tQ+hY1v8RKct7P07Zyc02ZMGJJrUoXjQCuiHHmZOaUyPJbUE\/caeLrR++O84uJQu73FIXjCi4xjDvFEOBugg75JTz4K5w\/NmM7JUgZTeVXKyZYtAYHuiLMDutDLSJyDziRea46OE1ZfY7YTl3lZ9N7H\/lyCp+M15gkD+dJbbg5mS19f6EyhuQdfGCrTOCMFOwkEpvrBYUPfX7ak8wiF9HmmDs2Q2oj2urCe5HQ+jhkdwWqSJTLsU8r4H+1Ojs4LQvn8UrhjdDgK6XU3rk9npb2oxS2GT6ZO\/2P64PiKnD9jdzdaZHgRjGRCU2ExZHMlvFswjQ7UXZiF5QlVQppI0LuDKHUK6hy6BwquPQVPcVyy9se5NH+IGQ4tXm297n2B1rQbf3YEU7Qhwy7jqseZlr4dbRVlX3OUne\/Nce2155NW4+upvxCACSgTCIzyo5L+lp80y1y7bQf\/BqIEtqqJDvmc1bkj\/+ybd95SxmtZR5ycvec\/ApH8EXm4OyIwmzmlwn\/M6RHkVZPwCni9ifaeAnIbXZcR3\/HPtp6RWYvW0ps9aZ7UAT35mgZax99nG71uHWs\/TWm2lWhAFzw019Klkzewp2wj7cdmBueiJDKYwHD1IBwuptAEsjfPIco7zWq4XzM7JV89\/GAXLWlGXfoIBTz0qbl1X6Lqrri6BjikGeL\/kAA3REQxbw62MpifDZSd0vw14nfksuj8Jcd0oU8TZsBtg2JVyZAkx6\/Ctx12QAzopbNmswNDN67w6rq\/rbKmSsJOTzKIxiTBy7d5hrfxPMqNqfZFV1AV+M8LsJev\/5MI4E3ssspkCd52Afm7njjx2OrrtNYm+8pSqqegL2PjBYYrHFzRQ4PMj7eE2t7DVtSPvo9D6+nhGcUSdvrXKR7mLnz+mAQ+JS0ZcRPZx75WbSY9oGw\/CabXZVEZHwG06VX9OkkCyfTxAfui835ITDOLXBvNdWLbnyUfAZOrC57OTLsMV3XrH6dpVBGIIJucm9Jz1k++HZ6c4I5\/\/Sepans63SiVsvUYg+YHvMHNG7rJHmooMS4g0EeXHUmlF+JowsKaPYAF\/3d0\/Mrckn8Awx\/TkPtPoy0WVjPrXXHqIy5vQECr4XIVBJoQB3Jo9NNr4fLzSKSRB6R7FHOIgqVSs9WhXevWi05uPjsgt0jtqBh3Z4EpDed0BbXr9NO28ZbalvUWZ1W52zAwPxjj46YEsT6XS7gEzForAGacbe5DiKAHkgYSO6UGy72gLl5dU3LBZOUET8oAUOuWWSdj\/B4Iqm0WUQi0lTuz5gAsC1FYFf\/RXORAxd\/ae1DOnzj13JqEwMT6D5UxkSfpNnQSDx4kxPElwNt3d1BFOR\/8RQ+uBYNWrr625ixxFhbpN1GkRCorToR4gNm7WDVXrQLxmLlUM5QIbwNRruoc52mt4HD3GVIFyD\/qD9Tn4Uin69IucF35fBgeC77TOsUNZxT4hjlQ9KH8ao6Ajjd1x9Jk8yOUfZBYtqR7xuvnFlck\/rIzWNnUSZtWC\/cN9kO5uMp0xkZio6\/KtCCpZjtejvMnoQs6LZvOc3E0EOQvvchPVUgcZT78QInjRO4SLkciB1ZaXsubvdFtS9ukbVU7OjQuTydfNfW7ZfvKyURt3x\/J3i73+Xi1ozvyWAZBQJlc4FZ4k6GvQxc3aT1sPphQhSAcgzzwxD7da1bNQTJw8MJTbcB7GS1+ZU\/6ZzwTvlcvDVmlLfERPxNoKcGO+70Ot1GOOTifLzF7Yqr0n1XwBIVR\/NNJGnaNj5r1oD01TIiuA1oNzvpgXQSjns1MTB0LDzbWbMuI1zAsqUMANFEv7JanoDpzcA9vCOm4sppc=","cypher":2}`;
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



function vediorewarddraw() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "Content-Type": "application/json",
    "Connection": "keep-alive",
    "Accept": "*/*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Accept-Language": "zh-Hans-CN;q=1",
    "Content-Length": "4820",
    "Accept-Encoding": "gzip, deflate, br"
};
         const body = "{\"message\":\"2Cbmg6BwMab3l99uQIyIS8dYumDBrhwFc4EUW81LwV7Gb2oY3K7JAPIJ3wwKgCfiZfDOI5KR2uHPTHMCe951V4gLKSLT3LMQ1+9+4Tc7sfcoLFZBL180u6nam9DJB939eVf\\/CvHmIacg59aPjQo0gaC\\/K5SYTEFEQ\\/yVJ906e5LxlRbYQnvLXJku6FbnSJGyUVcGwYRDLbjD96hbEfGDbigDz\\/voWGfZ5SmgNkhR3INkuEQVr\\/YI\\/bovYfeMsPCtgWp7he69sdfTwFdAW54ejIJJ2SRJSnCUp9awXcFaSqlNHCR5E2nr8oJ3QmY5Dg\\/xAX3luvyA1X0xE2Sl9O7zdU2m17XP0WyLAt20poYN\\/1pqlQRhEscXmnV3qhrn4WBCvFsjnNIFr\\/d4GWz8kRDMTraPAvyNmsiFB5E05NXWuU8JLgqvGuLz\\/Tfb0DAKpdQP5kjYyxMStmislB08VJmi2FlAAibPoPM210mhG0dOHPV8xYi0liSQvyqAuuRup4jmunal4A17ScvRPIFDN2IK7opsL7FwOlHZ\\/WJ+ZLX6Sko2hwFsAXsEAX4qJ77FwVrcn+dYmUhh23AeYsBFNysYDw5WGh1fod8fI1tpjM2sSJkzK\\/6aFFnwVgNqDDvzZZpCNUNrb7zQ0qi1w2wj8kO4X1+BbA5Ubu9KfsvvBcffdBQQR+DGMGIazM0iXBlgYLeG6QKV1bMzoYNr0cp992ouIFEtq2VkFGbwKHkWCDh5TRjpGK0rzgHmTN5ZUlO+4TX+FRTxu5KG1hx2+R6amzCpSZ7kTDlsailPVjdixourBFx\\/GuqiRXwnT33E8dlHKFUt4erkOyhR5m8Kpto9s5HN8o\\/cBJgXk4BvWZlwV5zjyyN3+5pxUkDJG6kGYMk09UUSil8+Kc3Mx0jSErz4kyTvAngX3PZx7bVldmukaklPsk6298TTSv8q5DxFfWfhZqpyUfePotuCRkg1TtARdh8OTATRVSyvTo0aNyikpV6Y19nQmqdJ8Qa0uDuKAn5bGcrgEwr0Ee64AdN8LDqc8S6+cftMIF01Vo6+l8Tyh1m75oF4Dqv6q1nH89Fc3WPcPLnlRHsKfM0YC\\/txmBrkVTxBdnfkU9+ZHLwS5INNlPZCXkme20aEStIpZrBjLl+JVsaDR1KRtUVsVFHrtcwcOyAuIyH0qDjmkKdXUe71fHZEJswCCZ3aXBk\\/NyqCAw+8pg1ga4JUdCEOu7pYIjVNr8dLIr+w2Hu0zXFcA+RYPyu\\/UNlJY1\\/biVk9CswBowEtL6Mj0cg9mAxGWnRHcazC5MdC5noZpAuQR4CumcSWdoXmg3MineaPDjUD9kgrk0l\\/Ml5L5rHILj3UV8vr9h\\/cGUA\\/3s6USANxDsOXlyGKuASkcBIet9hG7ZmMgneZ6yU0DhXGcVJ1V2HB\\/OEP01S4bjTcVTteWm\\/X1hNSbxWzRbsIXoLs2k8xPZbmRspx9DIeK7U+Mm3G442qE4CZecjG+TgnWZGWb6gYYS0tBfmVpiGfBxQ1SUJ\\/i1kuZxNlG4HHGJDjlmhRVhc0ioasfHyk6cca8jkFT3\\/9ol+3OcROu+ffLDVVKYAO6BqD8hQ+X+FowPyTYdmdT3nWSpfLMfoQNxhwxi6ECOCOzaQDn52viNLjHauI1t7bn4Ok9jgJlkcKLpDWpfh2BkJuDzDJHkizcbgq1AGghTctRiCqIWf2zTqHY2B1GAyb2W1l4TElMPSeaK4xu9jjnwmg0\\/dHAi8NAvjfEDIkb+vbI8F\\/NjITzEjekYdE21T3v4QpdIF50VYDwRVw4lC9jlyk6kXAbcl+aW+v3eSa1ZQp7S8uEBDNAZm6K04h+PizHIchPO44tC0popBHUlaN\\/6J6wDk9Vy+qN9gTizeA2PEXwKo5kL2h470dskNkhmJCp9GhNVq9UFQb+VXNY35fXgxmhqCyGyAorMEfws\\/Yel\\/\\/+VG6FkWSwfSOe03aqWV9O1UnzmOygFYggbmtx034MOdC48zd+X\\/76oMHr6Rn5rn451G1paqkFf6F1zIGmq9kKRXRN+ecABKGMzN98eP+zSHJjFGsOGxNB+Qu5Ejq6oMWuIfS8pjjUBBvA+U7LajBlzZ9bUJr6rCEYyJHIZxr26BzwOEeWkeXeoDL4sTl5aKFlxGAnZrETRnYFcjc5y6Q\\/JqNhN9NN0SxQQEMLV3VKZJlxdv\\/SDCleD5S7FFgTr4iixQzDbfqhxf6k7RGZc0S\\/wIawt4RWc1ln9DmRCv+87\\/yNtDAyJbQrgpKKj8einffjO3idys9yRja\\/sF9LHfBffHjrkPQt9gnkqR7ewdJta0shVWxIumXmbwtWEiYAB8+YqGWp8QNKO\\/nZU5\\/f76FlRoVhGFYI9RxjxRNRgD9mb1ywhZDXRdkbtswaDDjo3tFCBCQkHkBpb2Zzlaco3PARCsrrXpkvXPA7wuIARcxAcTTZIk7NkmqNHi8aoyZAqsDPbclzl2ED0MFCEdPoLHOVaEf3\\/ScpIAzhGYPc72WRvmHqfs+K7GcnZgiOc\\/62jmCPimJDqKtDN6yjnJMW8Iw8c3mfRzVtFIV3NSIGWYBi427cS\\/Su246SKvRgBdBvfTv8iFX9fMScaBz+QoB5BnG\\/5yCydt9Z0y2ZZB7dl7dk9vZLLGnkO+nPHst7Y9XNrgb5hvPghUDDrZmrZPpGilq4sXjO6xuwNudCpm0HhdyxoC8XsQ2Xfk3fps2jTDvfJkHz0LPSXowXEdW8uLO30X52OgEnSKsMQoYlnd5F3rTI749EENG9JyK7BqNun4Jn1eAj+bqUrKjsQEyaq5gju7i2hpZx+jSqlrg6BA5IEWld0wf8jynU2ZdqwhAVkN6l+uTqnUluxtaroadOz9QWU81\\/xKzQNvl9YLmcxZdaq5VkPaF4HX7n0hbI+4jFMBT9B7ePHhgzMkipGZdlPJJ5xdK1R5UHQ6ODOamiixb5T2JfBMzJshwayIbZIlmiBVSNXGgUUMkOGuLYA1Ye16hBORQUgxkkLG9hr1Q39b5T91HFH5Wq9nGvPX7o6By+iGshUj3ZF\\/3UuBggjfhKq4xj7uv\\/tTBhMe7OIw6gp2Nh5bdHcDtC8Am9De\\/J\\/Od8Tf04O0mmINdh23vIQq8bhhF5gdeBkAOUQUzyvJcBX8kNlAQebdc\\/\\/Db7jWmABpjI4FICe8BcOm\\/R\\/ipKZY14CA+rI+fjnjttL5kWVlH5E15Xr5bh0e\\/velBXS1LPiW7bc\\/2A6w08VwAsg2erhZ7uZaGtiKxv7KXspXUF73m57z+m6r5dwuwEeFX\\/cwzP3vKGdrNMkVxWjVji\\/Johsei0yhEcT\\/h9Ntiat3Iumzku1tDHUtyl7+2hjXhdh3Lli8Z99N1bsWP5S5zU3mIxeZNJHDJYWMVGiX\\/+waYZlwzR7f67RSO6udBdQwmGzQU0ELyoMKUhphLYHOtJGebMgfjDhA7ayZiJgP\\/wR5xear1wi0GNoOfMip6zHwEFZCbLlac+fVRuSZ1wlsb5ONquYwQl8wK4g9am8Y\\/VJXxlnWGfqDpdPo0tvCA7323Uji7103pECGUBpCK45DqEVdS3g8iUnG0f2yTaQp3+Hub52Z0dfvrlcud4A\\/WQtC9Qak5MkTFYFEyp5dbosyqxP4DKZmcLxCpy9vGLu+MfO3bHDqf\\/roakf9yS6i8HOIK0EIK1NcQ+1j\\/O\\/mK+x\\/jfJITSmTJyKCUyfaitf6Iw0pkkOAERL3g95hUPMkgyZXRweM\\/\\/vdDmKpugcEvA2T0BIb9g33Ksldsx60JeFhBRr8TrNGDn6jcdiotGiMxaVNqDI9BMZ7xzZx88\\/BQwX0kb1EAkRUPHbOh67yGHu0Rf29lFtAlcGcl62IN5EnvLpNq\\/MB7afg64BtYXVSh62UVj+Dqfbbm8TNFRDyCGHYu3BRvxSQEmJw\\/VXLVVj251lNAK7QJ+fGFaSnJ\\/nYhTzGUfLnqOTg+N21U4zyPsUc12HJhwm6d2kg86gDu3G6hiHK0n8F0Hgk51jtuqf7eEOlOxSyDWvI5OSH9w+ANjbN81heS\\/KOkW2m1onGby6gSvJYuqEp2oOh4bGIlKfWxEJbyFhrzHSExOzu+c8UZ9778DRkSardeQNEjA1IBL0iqS6qiZO+jgIa6A7im0hjq92i1KW325xLgE36REB\\/9OrfH0wg6Z\\/9IyPEql2sqHH9cI+k4KiHbkXKOKrBflzSEMRUn1kPDzkV8jnK2F0\\/OwGt61JbxLwcWiFUnPibVIu2D2x2FY8jGYR0Hl8MQ6mEf82e7YcJcLsDXxXQYSTe394oHOIWAxJznaCGrmhGR+IPOf9s0Em3GT6hZlcoAVlu+ct7HoXwGlA+m7dcvrgJEVyqw9n5rUrSZ5oakeyZK9B4cNGGDahneO2Z8MihHpBsvbjsnXZIVrAcdzUBhvltSWKknPz30+CyMp63XuYmWa\\/\\/w6HCvyvZSuxcDO3UQcg7kTFoK38\\/aXMsCBxGVDTjwg3iM422dwxkkVCt70F1O5kUv3RLFqWReK2jYFehwcHmVEgJbqxhpLT\\/b7kZnVGLEQl\\/59skjUW5ql\\/HkDvGK1hwO+9baqABpBvZzEyu4iu\\/v8tcyFK9WkNbkHGC0bKrehilQNG5zMGEEPoE1X2XiMslD2ndug1HqrGViGWUoSp8tw+jfUoissu0piLHP5hZSnWWOtp40QMnB4ObTbmego3IYoQ9CPFED5kSYxQBhWtrFs8PzDZSJ5fQ==\",\"cypher\":2}";
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
  

       
  

        
  



function drawreward() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.2.10.0) 1242x2688 Winding(WV_5) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.0.1&utdid=YFHvkSdla5UDAO0ygGI6DM3%2F&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=2111665808&sn=C1F3B9E12724162869F18F9CCB7E4CE361047973&umidtoken=wxVL901LOno1TTV8k84jCpNKnEpUzFTd&msv=8.0.0&brand=Apple&imei=07CBD4AFEF888A4F58D65BD337D482ECE9566F5D&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYzNTEyMTY1NCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYzNDYwMzI1NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.9Dw567-3feAEQTKjmhtRDLk7PRkH7rgTf1nxnJnEp6omow83m3EucmX4iiYe2MoCrRP90tV2BEm0pvhuOB6czw&skinColor=23B383&platform=iOS&ver=201218&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=FA83D0D2-0895-482A-8B1B-48011F454733",
    "Content-Length": "2143",
    "Accept-Language": "zh-cn"
};
         const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_6l63bBUhWrgCzuf3luiPuqX9pzgl6CCWCM8cyJID2ifIH7kvUknjpW%2FwKes0SLcJNizrvAgqvtID%2FNxB6H1WOt28v5I6yjIaNLLEHLCyGSH3E6J33vFNOQYGEnz0E5%2BNHeZE4Buro89G3bGY9Pn3Kg0zZsM8W6awubrBR5InTuCPAqkv0nClIauSWL84yt3ytAi7NkdK1ZYT0f9jOIceFGbYrOS9%2FJ8LE5zk3iiFF%2FtlipqhhcDfD5QJnruLGYHDolcjZ8Gc6XbOhSe6AFBtYN68YZ3cSQibDMfY04T%2BxrhoNaAyEv3kJy%2FkgQ8D5GWoUwmsxlSVTDv1WWbLNr8wtFjoQJoIjHPEspb2AH2cpeYbsdOtdpPsZJCu2MdIut1GYg78HRSC%2BtAGIxoOMZyCIw%3D%3D&miniWua=HHnB_RRumWq2%2FlJpi0DOKFeg1f7bOiOgBkuwNPcaAa6Hp4ALiqoeIC8W0z98sNOM4doL%2FqIeEehlzf6VJz0P78HTqag6ML0PUGwJE0GqLucCDYkDjNhcZ%2Fcn3%2FO8fJigH1M23gxohnun5jiv%2BFPSxSYQ2ZA%3D%3D&userId=2111665808&umidtoken=wxVL901LOno1TTV8k84jCpNKnEpUzFTd&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1634603437&sqSv=1.0&sign=309b9bfe202522e2ac07bd9ba90dd010&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.0.1%26utdid%3DYFHvkSdla5UDAO0ygGI6DM3%252F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D2111665808%26sn%3DC1F3B9E12724162869F18F9CCB7E4CE361047973%26umidtoken%3DwxVL901LOno1TTV8k84jCpNKnEpUzFTd%26msv%3D8.0.0%26brand%3DApple%26imei%3D07CBD4AFEF888A4F58D65BD337D482ECE9566F5D%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMTExNjY1ODA4IiwidXRkaWQiOiIiLCJpbWVpIjoiMDdDQkQ0QUZFRjg4OEE0RjU4RDY1QkQzMzdENDgyRUNFOTU2NkY1RCIsInNuIjoiQzFGM0I5RTEyNzI0MTYyODY5RjE4RjlDQ0I3RTRDRTM2MTA0Nzk3MyIsImV4cCI6MTYzNTEyMTY1NCwidXNlcklkIjoiMjExMTY2NTgwOCIsImlhdCI6MTYzNDYwMzI1NCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.9Dw567-3feAEQTKjmhtRDLk7PRkH7rgTf1nxnJnEp6omow83m3EucmX4iiYe2MoCrRP90tV2BEm0pvhuOB6czw%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DFA83D0D2-0895-482A-8B1B-48011F454733";
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
