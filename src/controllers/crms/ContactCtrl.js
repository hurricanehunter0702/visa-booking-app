const User = require("../../models/User");
const ContactMails = require("../../models/ContactMail");

const fetch = async (req, res) => {
  try {
    let { userId, search } = req.query;
    let user = await User.findById(userId);
    let contactMails = [];
    if (user.role == "super_admin" || user.role == "admin") {
        contactMails = await ContactMails.find({
            $or: [{
                subject: new RegExp(search, "i")
            }, {
                message: new RegExp(search, "i")
            }]
        }).sort({ createdAt: -1 });
    } else {
        contactMails = await ContactMails.find({
          $and: [{
              type: user.role
          }, {
              $or: [{
                  subject: new RegExp(search, "i")
              }, {
                  message: new RegExp(search, "i")
              }]
          }]
      }).sort({ createdAt: -1 });
    }
    res.json(contactMails);
  } catch (err) {
    res.json({
      success: false,
      msg: err.message
  });
  }
}

const fetchById = async (req, res) => {
  try {
    let { id } = req.params;
    let contactMail = await ContactMails.findById(id);
    res.json(contactMail);
  } catch (err) {
    res.json({
      status: false,
      msg: err.message
    });
  }
}

const remove = async (req, res) => {
  try {
    let { id } = req.params;
    let contactMail = await ContactMails.findById(id);
    await contactMail.delete();
    res.json({
        status: true,
        msg: "Successfully deleted."
    });
  } catch (err) {
      res.json({
          status: false,
          msg: err.message
      });
  }
}

module.exports = {
    fetch,
    fetchById,
    remove
}