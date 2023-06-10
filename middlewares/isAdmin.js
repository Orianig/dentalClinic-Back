const isAdmin = (req, res, next) => {
    try {
        if (req.roleId !== 1) {
            return res.json({
                success: true,
                message: "You need admin permissions"
            });
        } 
        
        next();
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "You need admin permissions",
                error: error
            }
        )   
    }
}


module.exports = isAdmin;