const prisma = require('../config/prisma');

exports.getUserLanding = async (req, res, next) => {
    try {
      const users = await prisma.users.findMany({
        include: {
          level: true,
          personnelType: true,
          department: true,
        },
      })
      if(!users){
        console.log("not user")
      }
      res.status(200).json({ users });
    } catch (error) {
      next(error)
    }
  };