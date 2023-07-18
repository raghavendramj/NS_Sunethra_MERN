// Create a user form
// 4 fields -> username, email, contact, city
// add validations like number, string length etc....

// 1. GET -> /api/adduser -> response -> adduser.html
// 2. FORM -> adduser.html -> [POST] -> forward to post->/api/adduser
// 3. POST -> /api/adduser -> validate here 
//         -> failure response -> can be any of the errors from these number, string length
//         -> success response -> newly created user object
