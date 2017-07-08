

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;

/**
 * Servlet implementation class MyServletJson
 */
@WebServlet(name = "MyServletJson", urlPatterns = {"/work_json.sam"})

public class MyServletJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MyServletJson() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	// TODO Auto-generated method stub
    	System.out.println("call MyservletJson");

    	response.setCharacterEncoding("utf-8");
    	response.setContentType("application/json");

    	JSONParser parser = new JSONParser();
    	Object obj = JSONValue.parse(request.getReader());


    	JSONObject jsonObject =(JSONObject) obj;
 
    	String name = (String) jsonObject.get("name");
    	long age = (long) jsonObject.get("age");
    	JSONArray hobbys = (JSONArray) jsonObject.get("hobbys");
    	
    	System.out.println(hobbys.get(0));
    	
    	if (jsonObject.get("s") != null) {
    		long sleepTime = (long) jsonObject.get("s");
    		System.out.println("sleepTime:" + sleepTime);
    		try { Thread.sleep(sleepTime * 1000); } catch (InterruptedException e) { }
    	}
    	
    	System.out.println("name:" + name);
    	System.out.println("age:" + age);
    	System.out.println("hobbys:" + hobbys.toJSONString());

    	jsonObject.put("name", name + "P");
    	jsonObject.put("age", age + 1);

    	JSONArray jsonArr = new JSONArray();
    	jsonArr.add(hobbys.get(0) + "_res");
    	jsonArr.add(hobbys.get(1) + "_res");

    	jsonObject.put("hobbys", jsonArr);

    	response.getWriter().print(jsonObject.toJSONString());
    	response.getWriter().flush();
    	
    	System.out.println("Create JSON Object : "+jsonObject);
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
