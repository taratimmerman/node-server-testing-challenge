const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
    Users.find()
      .then((resp) => {
        res.status(200).json({ Data: resp });
      })
      .catch((err) => {
        res.status(500).json({ Message: err.message });
      });
});

router.post("/users", (req, res) => {
    const newUser = req.body;
    Users.insert(newUser)
      .then((resp) => {
        res.status(201).json({ data: resp });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
});

router.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    Users.remove(id)
      .then((res) => {
        res.status(201).json({ data: res });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
});

module.exports = router;