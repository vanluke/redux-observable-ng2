# Redux observable with testing approach

**Example project**
**Examine how to test and implement redux-observable**

# How to setup

1. Set up your RSA keys and put it under the server/auth/keys
2. Edit server/auth/read-keys.js: ng2-pl.rsa and ng2-pl.rsa replace with your own
    
⋅⋅⋅line 18
  ```javascript
     const privateKey = fs.readFileSync('./server/auth/keys/ng2-pl.rsa');
  ```
⋅⋅⋅line 28
  ```javascript
    const publicKey = fs.readFileSync('./server/auth/keys/ng2-pl.rsa.pub');
  ```
3. Run commands in shell
  ```
    npm i
    npm run start:server
    npm run start:client
  ```
4. Open browser [http://localhost:3000](http://localhost:3000)