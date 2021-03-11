package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;
import com.google.sps.data.ContactMeMessage;

@WebServlet("/list-contact-me")
public class ListContactMeServlet extends HttpServlet{

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
        Query<Entity> query = Query.newEntityQueryBuilder()
                                .setKind("Message")
                                .setOrderBy(OrderBy.desc("timestamp"))
                                .build();
        QueryResults<Entity> results = datastore.run(query);

        ArrayList<ContactMeMessage> messages = new ArrayList<>();
        
        while (results.hasNext()){
            Entity entity = results.next();

            long id = entity.getKey().getId();
            long timestamp = entity.getLong("timestamp");
            String email = entity.getString("email");
            String message = entity.getString("message");
        
            ContactMeMessage contactMeMessage = new ContactMeMessage(id, timestamp, email, message);

            messages.add(contactMeMessage);
        }

        Gson gson = new Gson();

        response.setContentType("application/json");
        response.getWriter().println(gson.toJson(messages));

    }
}