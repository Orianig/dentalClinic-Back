const isStaff = (req, res, next) => {
    try {
        // si no eres doctor no puede acceder 
        const roleId = req.roleId
        console.log(roleId)
        if (req.roleId !== 2) {
            return res.json({
                success: true,
                message: "You dont have permissions"
            });
        }

        next();
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "You dont have permissions",
                error: error
            }
        )
    }
}

module.exports = isStaff;