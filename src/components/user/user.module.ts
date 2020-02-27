import * as angular from 'angular';
import { UserComponent } from './user.component';
import './user.less';

export const UserModule = angular
    .module('user', [])
    .component('user', UserComponent).name;
