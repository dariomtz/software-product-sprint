package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.KeyFactory;

@WebServlet("/contact-me")
public class ContactMeServlet extends HttpServlet{

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String email = request.getParameter("email");
        String message = request.getParameter("message");
        long timestamp = System.currentTimeMillis();

        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
        KeyFactory keyFactory = datastore.newKeyFactory().setKind("Message");
        FullEntity messageEntity = 
            Entity.newBuilder(keyFactory.newKey())
                .set("email", email)
                .set("message", message)
                .set("timestamp", timestamp)
                .build();

        datastore.put(messageEntity);
        System.out.printf("Email: %s\nMessage: %s\n", email, message);
        response.sendRedirect("/confirm.html");
    }
}