/*
 * @Author: LOG
 * @FilePath: \vue3-netease\src\logic\OptionCookie.ts
 * @Descripttion: 
 * @version: 
 * @Date: 2022-05-04 14:10:31
 * @LastEditors: LOG
 * @LastEditTime: 2022-05-04 14:11:47
 */
function setCookie(cName = '', cValue = '', exdays = 1) {
    var exdate = new Date() // 获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
    // 字符串拼接cookie
    window.document.cookie = cName + '=' + escape(JSON.stringify(cValue)) + ';path=/;expires=';
  }
function getCookie(name:string) {
    if (document.cookie.length > 0) {
      var allcookies = document.cookie
      name += '='
      var pos = allcookies.indexOf(name)
      if (pos != -1) {
        var start = pos + name.length
        var end = allcookies.indexOf(';', start)
        //这里根据','分隔出该名称的值，如果设置Cookie时用的是','分隔请替换成相应符号。
        if (end == -1) {
          end = allcookies.length
        }
        var value = allcookies.substring(start, end)
        return JSON.parse(unescape(value))
      } else {
        return
      }
    }
  }

  // 清除cookie
function clearCookie(name:string) {
    setCookie(name, '', -1) // 修改2值都为空，天数为负1天就好了
  }
  
  // 清除所有cookie
  function clearCookies() {
    var temp = document.cookie.split(';')
    var name
    for (var i = 0; ; i++) {
      if (!temp[i]) break
      name = temp[i].split('=')[0]
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      document.cookie = name + "= ''" + '; expires=';
    }
  }
  export {getCookie, clearCookie, clearCookies }