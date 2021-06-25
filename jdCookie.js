/*
此文件为Node.js专用。其他用户请忽略
 */

// 此处填写京东账号cookie。
let CookieJDs = [];

// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`);
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`);
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}

if (process.env.JD_COOKIE_DISABLED_ALL === 'true') {
  CookieJDs = [];
  console.log('已经设置了禁用全部账号的cookie，请知悉！');
}

CookieJDs = [...new Set(CookieJDs.filter(Boolean))];

console.log(
  `\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`
);

console.log(
  `==================脚本执行- 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
      new Date().getTimezoneOffset() * 60 * 1000 +
      8 * 60 * 60 * 1000
  ).toLocaleString()}=====================\n`
);

for (let i = 0; i < CookieJDs.length; i++) {
  const index = i + 1 === 1 ? '' : i + 1;
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
