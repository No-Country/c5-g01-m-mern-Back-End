const Router = require('express')
const {getInquiryByUserId,createInquiry} = require('../controller/inquiry')

const router = Router();


router.get('/getInquiry-UserId',getInquiryByUserId)


router.post('/create-Inquiry',createInquiry)


module.exports = router;