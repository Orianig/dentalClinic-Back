const isSuperAdmin = (req, res, next) => {
    try {
        if (req.roleId !== 4) {
            return res.json({
                success: true,
                message: "You need SuperAdmin permissions"
            });
        } 
        
        next();
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "You need SuperAdmin permissions",
                error: error
            }
        )   
    }
}


module.exports = isSuperAdmin;