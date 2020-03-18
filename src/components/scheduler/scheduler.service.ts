import { IHttpResponse, IPromise, IHttpService } from 'angular';
import {  Scheduler } from '../../initialState';
import { DATA_URL } from '../../consts';

export class HttpMockService {
    constructor(private $http: IHttpService) {}

    public getInitialData(): IPromise<Scheduler> {
        return this.$http
            .get(DATA_URL)
            .then((response: IHttpResponse<Scheduler>) => response.data);
    }
}

HttpMockService.$inject = ['$http'];
