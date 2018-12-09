# Nodejs-Swagger

```
npm install swagger
swagger project create todo-api
express
cd todo-api
swagger project start
```

In new command prompt, we can try as per shown

```
curl http://127.0.0.1:10010/hello?name=Scott
```

Now we use swagger editor. This opens on browser swagger editor.

```
swagger project edit
```

Create a MOCK datastore

```
swagger project start -m
```

Try in browser:

```
http://localhost:10010/
http://localhost:10010/todo/1
```

Then make JS files as per swagger router name under mocks folder and re-visit the first URL

For linting:

```
npm install -g eslint
```

For search client [elasticsearch]:

```
npm i elasticsearch --save
```

Also have elasticsearch installed and running as per steps {Elastic Search}[https://www.elastic.co/downloads/elasticsearch]

/api/helpers/es.js is for boiler plate code for working with elasticsearch

For Cors error:

```
npm i cors --save
```

