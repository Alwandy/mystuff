var express    = require('express'); 
const router = express.Router();
var defaultAPIname = require("../core/apiname");

/* GET api listing. */
router.get("/othertest", (req, res) => {
	res.send("other test works");
});

module.exports = router;
