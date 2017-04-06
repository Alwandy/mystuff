var express    = require('express'); 
const router = express.Router();
var defaultAPIname = require("../core/apiname");

/* GET api listing. */
router.get("/test", (req, res) => {
	res.send("test works");
});
module.exports = router;
