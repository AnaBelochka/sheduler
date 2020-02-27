import * as angular from "angular";
import {EventComponent} from "./event.component";

export const EventModule = angular
    .module('event', [])
    .component('event', EventComponent).name;