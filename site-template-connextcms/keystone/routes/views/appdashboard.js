var keystone = require('keystone');

exports = module.exports = function(req, res) {

        var view = new keystone.View(req, res);
        var locals = res.locals;

        /*
        locals.user = req.user;
        locals.user.password = "";
  
        locals.superusers = keystone.get('superusers');
        */
  
        // Set locals
        locals.section = 'appdashboard';

        // Render the view
        view.render('appdashboard', {layout: false});

};
