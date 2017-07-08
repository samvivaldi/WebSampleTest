import java.io.IOException;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/echo")
public class WebSocketDemo {

    @OnMessage
    public void message(Session session, String msg, boolean last) {
        try {
            if (session.isOpen()) {
            	System.out.println("msg : " + msg);
            	for (int i  = 0 ; i < 1000; i++) {
            		session.getBasicRemote().sendText(i + ". " + msg, last);
            		try { Thread.sleep(2000); } catch (InterruptedException e) { }
            	}
            	
            }
        } catch (IOException e) {
            try {
                session.close();
            } catch (IOException e1) {
                // Ignore
            }
        }
    }
    
    @OnOpen
    public void openServer(Session session) {
     // TODO Auto-generated method stub
    	System.out.println("connecting " + session);

    }

    
    
    @OnClose
    public void closeClient(Session session){
    	System.out.println("closeClient" + session);
    }
    
    @OnError
    public void onError(Session session, Throwable e){
    	System.out.println("close close close close");
    }
}