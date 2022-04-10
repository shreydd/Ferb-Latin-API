# Ferb-Latin-API

This is a ferb latin translator API made to run on deta micros.

The working of this API: 

- Add "/translate" to the URL 
- Add the message to be translated in the body. Ex: 

```JSON
{
  "message": "hello dad!"
}
```

- The response will be given as 

```JSON 
{
  "translation": "ello-herb ad-derb!"
}
```

# To make this compatible to run on local server 

- Declare a port number.
- Remove / comment this line

```JS 
module.exports = app
```

- Add this line 

```JS
app.listen(port, () => {
  console.log(`Translation app is listening on port ${port}`)
})
```
- Run this command to start the server

```Bash 
Node .
```
