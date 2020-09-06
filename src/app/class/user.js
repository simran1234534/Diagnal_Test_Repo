
import ogs from 'open-graph-scraper';
    class user {
    constructor(data) {
        //Attributes
        this.url = data.url != undefined ? data.url : null;

    }
    

    get(success, error) {
        try {
            let instance = this;
            let url = instance.url;
            const options = {
            url: url,
            customMetaTags: [{
            multiple: true, // is there more then one of these tags on a page (normally this is false)
            property: 'hostname', // meta tag name/property attribute
            fieldName: 'hostnameMetaTag', // name of the result variable
            }],
                };
                ogs(options)
                .then((data) => {
                    const { error, result, response } = data;
                    console.log('hostnameMetaTag:', result); // hostnameMetaTag: github.com
                    const resultvalue ={
                        Title :result.ogTitle,
                        Description : result.description,
                        Images : result.ogImage.slice(0,2)

                    }
                    success(Response.sendResponse(status_codes.OK, custom_message.infoMessage.getdata, resultvalue, []))

                }).
                catch(err =>{
                    error(Response.sendResponse(status_codes.INTERNAL_SERVER_ERROR, custom_message.errorMessage.genericError, [], err));

                    console.log(err)
                }) 
        } catch (err) {
            error(Response.sendResponse(status_codes.INTERNAL_SERVER_ERROR, custom_message.errorMessage.genericError, [], err));
        }
    };


    
}
module.exports = user;