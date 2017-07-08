<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	System.out.println("call html5.jsp");
	String useremail = request.getParameter("useremail")==null?"입력된 값 미존재":request.getParameter("useremail");
	String myUrl = request.getParameter("myUrl")==null?"입력된 값 미존재":request.getParameter("myUrl");
%>

<!DOCTYPE html>
<html>
<head>
<title>index Page</title>
</head>
<script>

function test() {
	
	alert("call test");
	
	document.frm.submit();
	
}


</script>
<body>
<form name='frm' method='post' action='html5.jsp'>
	<div>
		email : <%=useremail%>
		url : <%=myUrl%>
	</div>
	
    <h3>Multimedia</h3>
    <audio src="mp3/music1.mp3" controls></audio>

      <h3>button</h3>
      <input type="button" value="Click me" onclick="test()">
      <hr>
      <h3>url</h3>
      <input type="url" name="myUrl">
      <hr>
      <h3>color</h3>
      <input type="color" name="mycolor">
      <hr>

      <h3>date</h3>
      <input type="date" name="birthday">
      <hr>

      <h3>datetime</h3>
      <input type="datetime" name="birthdaytime">
      <hr>

      <h3>datetime-local</h3>
      <input type="datetime-local" name="birthdaytime">
      <hr>

      <h3>email</h3>
      <input type="email" name="useremail">
      <hr>

      <h3>file</h3>
      <input type="file" name="myfile">
      <hr>

      <h3>month</h3>
      <input type="month" name="birthdaymonth">
      <hr>

      <h3>number</h3>
      <input type="number" name="quantity" min="2" max="10" step="2" value="2">
      <hr>

      <h3>password</h3>
      <input type="password" name="pwd">
      <hr>

      
      <h3>range</h3>
      <input type="range" name="points" min="0" max="10" step="1" value="5">
      <hr>

      <h3>reset</h3>
      <input type="reset">
      <hr>

      <h3>search</h3>
      <input type="search" name="googlesearch">
      <hr>

      
      <h3>tel</h3>
      <input type="tel" name="mytel">
      <hr>

    
      <h3>time</h3>
      <input type="time" name="mytime">
      <hr>

      <h3>url</h3>
      <input type="url" name="myurl">
      <hr>

      <h3>week</h3>
      <input type="week" name="week_year">
      <hr>
 </form>
</body>
</html>