# 测试原生AJAX

原生AJAX了解下，虽然很难用到，原生的ajax主要有四步：
1. 创建异步对象 XMLHTmlRequest对象
　2.设置状态改变的监听，会触发一个函数，该函数通常被称之为回调函数
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // 请求发送成功
            if (xhr.status == 200) { // 响应也成功
                // 获得响应的数据
                var data = xhr.responseText;
                // 将向页面输出的数据写入到div中
                document.getElementById("d1").innerHTML = data;
            }
1.         }
　　3.设置请求的路径
   xhr.open("GET", "/TestAjax/ServletDemo1", true);
    // 4.发送请求，没有请求参数就写null
    <br>
    xhr.send(null);
