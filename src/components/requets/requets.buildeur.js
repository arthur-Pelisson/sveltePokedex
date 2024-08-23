import {setCacheRequest, getCacheRequest, clearAll, cachedRequest } from './request.cache.js';

export default class requestBuildeur {

    constructor(url, method, data) {
        this.url = url;
        this.method = method;
        this.data = data;
    }

    check() {
        if (this.url === undefined) {
            throw new Error('url is undefined');
        }
        if (this.method === undefined) {
            throw new Error('method is undefined');
        }
    }

    checkCache() {
        this.params.type = this.method;
        this.params.url = this.url;
        this.cache = cachedRequest(this.params);
        if (this.cache && this.params.cacheKey !== undefined && this.params.cacheKey !== "") {
            return this.cache;
        }
    }

    async fetch() {
        this.check();
        this.checkCache();
        if (!this.cache) {
            try {
                const data = await fetch(this.url, {
                    method: this.method,
                    body: this.data
                });
                const response = await data.json();
                if (response && this.params.cacheKey !== undefined && this.params.cacheKey !== "") {
                    setCacheRequest(this.params, response);
                }
                return response;
            } catch (e) {
                throw new Error(e);
            }
        } else {
            return this.cache;
        }
    }

}
