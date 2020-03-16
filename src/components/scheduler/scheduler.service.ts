import { IHttpResponse, IPromise, IHttpService } from 'angular';
import { HttpMockServiceInterface, Scheduler } from './initialState';
import { DATA_URL } from './consts';

export class HttpMockService implements HttpMockServiceInterface {
    constructor(private $http: IHttpService) {}

    public getInitialData(): IPromise<Scheduler> {
        return this.$http
            .get(DATA_URL)
            .then((response: IHttpResponse<Scheduler>) => response.data);
    }
}

HttpMockService.$inject = ['$http'];
