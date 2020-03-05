import { IHttpResponse } from 'angular';
import { httpMochServiceInterface } from './initialState';

export class httpMockService implements httpMochServiceInterface {
    private $http: angular.IHttpService;
    private $q: ng.IQService;

    constructor($http: angular.IHttpService, $q: ng.IQService) {
        this.$http = $http;
        this.$q = $q;
    }

    public getUserInfo(): Promise<unknown> {
        const deferred = this.$q.defer();

        var request = {
            method: 'get',
            url: 'dataBase/user.json',
            dataType: 'json',
            contentType: "application/json"
        };
        this.$http(request).then((response)=>{
            console.log(response)
        });

        // this.$http({ method: 'GET', url: 'dataBase/user.json' })
        //     .then(function success(response: IHttpResponse<string>): void {
        //         deferred.resolve(response.data);
        //         console.log(response.data);
        //     })
        //     .catch(function reject(response: IHttpResponse<string>): void {
        //         deferred.reject(response.status);
        //     });

        return deferred.promise;
    }

    public getActionsInfo(): Promise<unknown> {
        const deferred = this.$q.defer();

        var request = {
            method: 'get',
            url: 'dataBase/actions.json',
            dataType: 'json',
            contentType: "application/json"
        };
        this.$http(request).then((response)=>{
            ///console.log(response)
        });

        // this.$http.get('sheduler/src/dataBase/actions.json').then(
        //     function success(response: IHttpResponse<string>): void {
        //         deferred.resolve(response.data);
        //         console.log(response.data);
        //     },
        //     function reject(response: IHttpResponse<string>): void {
        //         deferred.reject(response.status);
        //     },
        // );

        return deferred.promise;
    }

    public getEventsInfo(): Promise<unknown> {
        const deferred = this.$q.defer();

        this.$http.get('/dataBase/events.json').then(
            function success(response: IHttpResponse<string>): void {
                deferred.resolve(response.data);
                //console.log(response.data);
            },
            function reject(response: IHttpResponse<string>): void {
                deferred.reject(response.status);
            },
        );

        return deferred.promise;
    }
}

httpMockService.$inject = ['$http', '$q'];
