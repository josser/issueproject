const db = require('../db')

module.exports = {
    findAll: (req) => {      
        const status = req.query.status;
        
        const avail_statuses = [1, 3]; 
        
        if (!avail_statuses.includes(status)) {
            return false
        }        
                
       return db.query(`select * from users where status = :status`, { status: req.query.status }); // promise
    }
}
