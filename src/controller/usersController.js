
const usersController = {
    loggin: (req, res) => {
      res.render('./users/loggin')
    },
    register: (req, res) => {
      res.render('./users/register')
    }
}
module.exports = usersController