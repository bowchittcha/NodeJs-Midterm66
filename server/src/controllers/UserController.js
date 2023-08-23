module.exports = {
  //get all user
  index (req, res) {
    res.send('ดูข้อมูลผู้ใช้ทั้งหมด')
  },

  //create user
  add(req, res) {
      res.send(JSON.stringify(req.body))
  },

  //edit user
  put(req, res) {
    res.send(req.params.userId + " " + JSON.stringify(req.body))
  },

  // delete user
  delete(req, res) {
    res.send('ลบข้อมูลผู้ใช้ ' + req.params.userId + " " + JSON.stringify(req.body))
  },

  // show user by id
  show (req, res) {
    res.send('ดูข้อมูลผู้ใช้' + req.params.userId)
  }
}