const baseUrl = 'http://localhost:3030'

const requester = async (method, url, data) => {

    let options = {}

    if(method !== 'GET' && data){
        options.headers ={'Content-Type':'application/json'};
        options.body = JSON.stringify(data);
    };

    
    const authData = JSON.parse(localStorage.getItem('userData'));

    if(authData.accessToken){
        const token = authData.accessToken;

    options.headers = {
        ...options.headers,
        'X-Authorization' : token
    };
    
    }

    try{
        const response = await fetch(baseUrl+url,options)

          if(response.status === 204){
            return response;
          } else {
            return response.json()
          }

    }catch(err){
        alert(err.message);
        console.log(err.message);
    }
}

export const get = (url) => requester('GET', url);
export const post = (url,data) => requester('POST', url,data);
export const put = (url,data) => requester('PUT', url,data);
export const del = (url) => requester('DELETE', url);
