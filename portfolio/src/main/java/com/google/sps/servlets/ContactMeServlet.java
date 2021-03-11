package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.sps.data.ContactMeMessage;
import com.google.sps.storage.DatastoreContactMe;
import com.google.sps.storage.DatastoreHelper;

import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

@WebServlet("/contact-me")
public class ContactMeServlet extends HttpServlet{
    private final DatastoreHelper<ContactMeMessage> helper = new DatastoreContactMe("Message");

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        String email = Jsoup.clean(request.getParameter("email"), Whitelist.none());
        String message = Jsoup.clean(request.getParameter("message"), Whitelist.none());
        long timestamp = System.currentTimeMillis();

        ContactMeMessage newMessage = new ContactMeMessage(timestamp, email, message);
        helper.put(newMessage);
        
        System.out.printf("Email: %s\nMessage: %s\n", email, message);
        response.sendRedirect("/confirm.html");
    }
}