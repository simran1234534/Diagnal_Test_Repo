import user from '../class/user';






exports.get = async (req, res) => {
    try {
        var User = new user(req.body);
        console.log("re11111",req.body)
        User.get((success_data) => {
            res.status(success_data.code).send(success_data);
        }, (error_data) => {
            res.status(error_data.code).send(error_data);
        });
    } catch (err) {
        console.log(" Error : ", err);
        res.status(status_codes.INTERNAL_SERVER_ERROR).send(Response.sendResponse(status_codes.INTERNAL_SERVER_ERROR, custom_message.errorMessage.genericError, [], err));
    }
}