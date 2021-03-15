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
import java.util.ArrayList;

public abstract class DatastoreHelper <T>{
    private final Datastore datastore;
    private final KeyFactory keyFactory;
    private final String kind;

    public DatastoreHelper(String kind){
        this.kind = kind;
        datastore = DatastoreOptions.getDefaultInstance().getService();
        keyFactory = datastore.newKeyFactory().setKind(kind);
    }

    public void put(T element){
        datastore.put(toEntity(element));
    }

    public void delete(long id){
        datastore.delete(keyFactory.newKey(id));
    }

    protected abstract T convertEntity(Entity entity);

    public ArrayList<T> listFromQuery(QueryResults<Entity> results){
        ArrayList<T> list = new ArrayList<>();
        
        while(results.hasNext()){
            list.add(convertEntity(results.next()));
        }

        return list;
    }

    private FullEntity<?> toEntity(T element){
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
        return entityBuilder.build();
    }

    public ArrayList<T> queryAll() {
        Query<Entity> query = Query.newEntityQueryBuilder().setKind(kind).build();
        return listFromQuery(datastore.run(query));
    }

    public ArrayList<T> queryAll(OrderBy order, OrderBy ... others) {
        Query<Entity> query = Query.newEntityQueryBuilder().setKind(kind)
                                .setOrderBy(order, others)
                                .build();
        return listFromQuery(datastore.run(query));
    }
    
}
