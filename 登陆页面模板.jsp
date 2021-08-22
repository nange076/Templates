<%--
  Created by IntelliJ IDEA.
  User: y7k
  Date: 2021/5/25
  Time: 19:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

    <title>管理员登录页面</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/work.css" type="text/css">
</head>
<body>
<h1>管理员登录页面</h1>
<form action="${pageContext.request.contextPath}/admin/dologin">
    <div>
        <input type="text" name="username" placeholder="用户名" >
    </div>
    <div>
        <input type="password" name="password" placeholder="密码" >
    </div>
    <div>
        <input type="submit" >
    </div>
</form>
${msg}
</body>
</html>
