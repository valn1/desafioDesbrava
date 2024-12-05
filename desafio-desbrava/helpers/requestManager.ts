class RequestManager {
    private _token: string = '';
    private HEADERS: Record<string,string> = {
        'Content-Type': 'application/json',
    };
    public url: string = 'https://api.github.com';

    set token(token: string) {
        this._token = token;
        this.HEADERS['Authorization'] = token?`Bearer ${token}`:'';
    }
    
    get token() {
        return this._token;
    }

    async get(route: string, headers: any = {}) {
        return await fetch(this.url + route, { method: 'GET', headers: {...this.HEADERS,...headers} });
    }

    async post(route: string, body: any, headers: any = {}) {        
        return await fetch(this.url + route, { method: 'POST', body: JSON.stringify(body), headers: {...this.HEADERS,...headers} });
    }

    async put(route: string, body: any, headers: any = {}) {
        return await fetch(this.url + route, { method: 'PUT', body: JSON.stringify(body), headers: {...this.HEADERS,...headers} });
    }

    async delete(route: string, headers: any = {}) {
        return await fetch(this.url + route, { method: 'DELETE', headers: {...this.HEADERS,...headers} });
    }

}

export const requestManager = new RequestManager();