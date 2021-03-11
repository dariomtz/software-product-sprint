package com.google.sps.storage;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.IncompleteKey;
import com.google.cloud.datastore.KeyFactory;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;

import java.lang.reflect.*;

public class DatastoreHelper <T>{
    Datastore datastore;
    KeyFactory keyFactory;
    String kind;

    public DatastoreHelper(String kind){
        this.kind = kind;
        datastore = DatastoreOptions.getDefaultInstance().getService();
        keyFactory = datastore.newKeyFactory().setKind(kind);
    }

    public void put(T element){
        Class<?> classType= element.getClass();
        Field[] fields = classType.getDeclaredFields();

        FullEntity.Builder<IncompleteKey> entityBuilder = Entity.newBuilder(keyFactory.newKey());

        for (Field field: fields){
            if(field.getName() == "id")
                continue;
            field.setAccessible(true);
            Class<?> fieldType = field.getType();
            try{
                if(fieldType.isPrimitive()){
                    entityBuilder.set(field.getName(), (long) field.get(element));                
                }
                else if(fieldType == String.class){
                    entityBuilder.set(field.getName(), (String) field.get(element));
                }
            }
            catch(IllegalAccessException e){
                System.out.printf("IllegalAccessException while trying to get value of field %s in class %s",
                    field.getName(),
                    classType.getName());
            }   
        }
        FullEntity<?> entity = entityBuilder.build();
        datastore.put(entity);
    }

    public QueryResults<Entity> queryAll() {
        Query<Entity> query = Query.newEntityQueryBuilder().setKind(kind).build();
        return datastore.run(query);
    }

    public QueryResults<Entity> queryAll(String order) {
        Query<Entity> query = Query.newEntityQueryBuilder().setKind(kind)
                                .setOrderBy(OrderBy.desc(order))
                                .build();
        return datastore.run(query);
    }


}