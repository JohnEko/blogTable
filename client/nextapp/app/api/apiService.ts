import { rejects } from "assert"
import { resolve } from "path"
import PostAdvert from "../postadvert/advert"


const apiService = {
    get: async function(url: string): Promise<any>{
        console.log('get', url)

        return new Promise((resolve, rejects) => {
            fetch(`https://dummyjson.com/${url}`, {
                method: 'GET',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response', json);

                    resolve(json);
                })
                .catch((error => {
                    rejects(error)
                }))
        })
    }
}
export default apiService