

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class WorkP
 */

@WebServlet(name = "MyServletParam", urlPatterns = {"/work.sam"})

public class MyServletParam extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public MyServletParam() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: MyServletParam ").append(request.getContextPath());
		
		
		String screenId = request.getParameter("screenID");
		
		if (screenId != null) {
			String url = "/sam/jQueryTest.html";
			if ("1".equals(screenId)) {
				url = "/sam/responseWeb1.html";
			} else if ("2".equals(screenId)) {
				url = "/sam/Canvas.html";
			}
			request.getRequestDispatcher(url).forward(request, response);
		}
	}

	/**

	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
