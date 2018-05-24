<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>AJAX的GET方式的异步请求</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/ajax_get.js"></script>
</head>
<body>
    <h1>AJAX的GET方式的异步请求</h1>
    <div id="d1" style="width: 300px;height: 300px;border: 1px solid blue;">

    </div>
    <input id="bt1" type="button" value="AJAX的GET请求" onclick="ajax_get()" />
    <input id="bt1" type="button" value="带参数的AJAX的GET请求" onclick="ajax_get1()" />
     <input id="bt1" type="button" value="AJAX的POST请求" onclick="ajax_post()" />
      <input id="bt1" type="button" value="带参数的AJAX的POST请求" onclick="ajax_post1()" />
</body>
</html>