package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;
import com.google.sps.data.ContactMeMessage;
import com.google.sps.storage.DatastoreHelper;

@WebServlet("/list-contact-me")
public class ListContactMeServlet extends HttpServlet{
    private final DatastoreHelper<ContactMeMessage> helper = new DatastoreHelper<>("Message");

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        ArrayList<ContactMeMessage> messages = ContactMeMessage.createList(helper.queryAll(OrderBy.desc("timestamp")));

        Gson gson = new Gson();

        response.setContentType("application/json");
        response.getWriter().println(gson.toJson(messages));

    }
}