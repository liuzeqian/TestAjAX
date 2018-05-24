function createXMLHttp(){
	var xmlHttp;
	try{
		xmlHttp=new XmlHttpRequest();
		
	}
	catch(e){
	try{ // Internet Explorer
             xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); // 低级版本的IE
        } catch (e){
            try{
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); // 较高级版本的IE
            } catch (e) {

            }
        }
    }
    return xmlHttp;
	
}

function ajax_get() {
    // 1.创建异步对象
    var xhr = createXMLHttp();
    // 2.设置状态改变的监听，会触发一个函数，该函数通常被称之为回调函数
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // 请求发送成功
            if (xhr.status == 200) { // 响应也成功
                // 获得响应的数据
                var data = xhr.responseText;
                // 将向页面输出的数据写入到div中
                document.getElementById("d1").innerHTML = data;
            }
        }
    }
    // 3.设置请求的路径
    // 如果将js代码写到jsp页面中，那么就可以直接使用${pageContext.request.contextPath }这样的EL表达式了，
    // 但是这儿是单独写一个js文件，就不能使用${pageContext.request.contextPath }这样的EL表达式了。
    // 所以请求路径要写为/AjaxProject/ServletDemo1诸如这样的形式
    xhr.open("GET", "/TestAjax/ServletDemo1", true);
    // 4.发送请求，没有请求参数就写null
    xhr.send(null);
}

function ajax_get1(){
	var xhr=createXMLHttp();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data=xhr.responseText;
				document.getElementById("d1").innerHTML=data;
			}
		}
	}
	xhr.open("GET", "/TestAjax/ServletDemo2?name=aaa&&pwd=123", true);
	// 4.发送请求，没有请求参数就写null
    // 注意：以GET方式请求的参数不能写在send方法里面，而应写在请求的路径后面
	 xhr.send(null);
}

function ajax_post() {
    // 1.创建异步对象
    var xhr = createXMLHttp();
    // 2.设置状态改变的监听，会触发一个函数，该函数通常被称之为回调函数
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // 请求发送成功
            if (xhr.status == 200) { // 响应也成功
                // 获得响应的数据
                var data = xhr.responseText;
                // 将向页面输出的数据写入到div中
                document.getElementById("d1").innerHTML = data;
            }
        }
    }
    // 3.设置请求的路径
    // 如果将js代码写到jsp页面中，那么就可以直接使用${pageContext.request.contextPath }这样的EL表达式了，
    // 但是这儿是单独写一个js文件，就不能使用${pageContext.request.contextPath }这样的EL表达式了。
    // 所以请求路径要写为/AjaxProject/ServletDemo1诸如这样的形式
    xhr.open("post", "/TestAjax/ServletDemo1", true);
     // 以POST方式提交的时候，要设置一个请求头
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 4.发送请求，没有请求参数就写null
    xhr.send(null);
}

function ajax_post1() {
    // 1.创建异步对象
    var xhr = createXMLHttp();
    // 2.设置状态改变的监听，会触发一个函数，该函数通常被称之为回调函数
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // 请求发送成功
            if (xhr.status == 200) { // 响应也成功
                // 获得响应的数据
                var data = xhr.responseText;
                // 将向页面输出的数据写入到div中
                document.getElementById("d1").innerHTML = data;
            }
        }
    }
    // 3.设置请求的路径
    // 如果将js代码写到jsp页面中，那么就可以直接使用${pageContext.request.contextPath }这样的EL表达式了，
    // 但是这儿是单独写一个js文件，就不能使用${pageContext.request.contextPath }这样的EL表达式了。
    // 所以请求路径要写为/AjaxProject/ServletDemo1诸如这样的形式
    xhr.open("post", "/TestAjax/ServletDemo2", true);
     // 以POST方式提交的时候，要设置一个请求头
    
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 4.发送请求，没有请求参数就写null
    xhr.send("name=aaa&pwd=123");
}