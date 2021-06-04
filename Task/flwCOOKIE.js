

//独立COOKIE文件     ck在``里面填写，多账号换行
let flwurlVal= ``
let flwheaderVal= ``
let flwspbodyVal= ``
let flwqwbodyVal= ``
let flwydbodyVal= ``

let flwcookie = {
  flwurlVal: process.env.FL_flwURL,
  flwheaderVal: process.env.FL_flwHEADER,
  flwspbodyVal: process.env.FL_flwspBODY,
  flwqwbodyVal: process.env.FL_flwqwBODY,
  flwydbodyVal: process.env.FL_flwydBODY,

}

module.exports =  flwcookie
