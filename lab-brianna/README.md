### Watchh Maker API
This API generates a watch for you.

### Directions for use
1. In terminal, run
```
node server.js
```

2. After Node is running, use the following commands for POST, GET, DELETE and PUT routes.

3. http POST localhost:3000/api/watch name="<name>" type="<type>"   
```
http POST localhost:3000/api/watch name="new name" type="new_type"
```

4. http GET localhost:3000/api/watch?id=(id)
```
http GET localhost:3000/api/watch?id=121231313123123
```

5. http DELETE localhost:3000/api/watch?id=(id)
```
http DELETE localhost:3000/api/watch?id=121231313123123  
```

6. http PUT localhost:3000/api/watch?id=(id) name="<name>" type="<type>"

```
http PUT localhost:3000/api/watch?id=121231313123123 name="new name" type="new_type"
