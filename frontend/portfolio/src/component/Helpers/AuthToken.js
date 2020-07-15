export function authToken() {
    // return authorization header with basic auth credentials
    let token = localStorage.getItem('Token');
    return { Authorization: `Token ${token}` };
    
    
}

