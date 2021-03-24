// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    console.log("middleware " + req.user)
    if (req.user) {
        // If req.user
        return next();
    };
    if (!req.user) {
        // If req.user
        window.location.replace("/");
    };

    // If the user isn't logged in, redirect them to the login page
    
};
