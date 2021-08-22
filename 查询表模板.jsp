<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: y7k
  Date: 2021/5/30
  Time: 20:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/work.css" type="text/css">
    <title>发布的文章</title>
</head>
<body>
<table class="pure-table pure-table-bordered" >
    <thead>
    <tr>
        <th>序号</th>
        <th>标题</th>
        <th>内容</th>
    </tr>
    </thead>
    <tbody>
    <c:forEach items="${list}" var="article" varStatus="status">
        <tr>
            <td>${status.index+1}</td>
            <td>${article.title}</td>
            <td>${article.content}</td>
        </tr>
    </c:forEach>
    </tbody>
</table>
</body>
</html>
