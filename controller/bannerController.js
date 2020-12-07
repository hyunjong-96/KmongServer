const util = require('../modules/util')
const responseMessage = require('../modules/responseMessage')
const statusCode = require('../modules/statusCode')
const {bannerService} = require('../service')

module.exports={
    getBanners:async(req,res)=>{
        try{
            const banners = await bannerService.getBanners()
            console.log('banners:',banners)
            return res.status(statusCode.OK).send(util.success(statusCode.OK,responseMessage.BANNER_SUCCESS,banners))
        }catch(err){
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,responseMessage.BANNER_FAIL))
        }
    }
}