export default class Helpers {


    static readJSON = async (url, options = {}) => {
        let response = await fetch(url, options);
        return await response.json();
        // if(options.ok){
        //     return await response.json();
        // }
        // throw new Error(`${response.status} - ${response.statusText}:\n${url}`);
    }
}