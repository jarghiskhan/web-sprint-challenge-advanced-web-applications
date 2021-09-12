# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.
-ensures that each request to a server is authentic and if the token matches what the server expects, then it will respond to the request.

2. What steps can you take in your web apps to keep your data secure?
-Don't store sensitive data on a public github repo.
-Validate data coming in (format, type and value range)
-Encrypt data
-Sanitize exceptions -ie. don't allow the user to see backend/code makeup.
-Implement HTTPS


3. Describe how web servers work.
-Client makes request
-Web server receives request
-Web server looks at what the request wants
-If it matches something the server can do, it does it
-Sends the request back to the client as a response


4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
-Put: Update/Replace
-Post: Create 
-Patch: Update/Modify
-Get: Read
-Delete: Delete