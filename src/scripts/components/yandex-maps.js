import 'yandex-map-widget/dist/yandex-map-widget.css';
import mapWidjet from 'yandex-map-widget/dist/yandex-map-widget';
import $ from "jquery/dist/jquery";
import {BaseComponent} from "../base-component";

class YandexMaps extends BaseComponent {

    init() {
        $.getJSON('/for-maps.json', (data) => {
            mapWidjet.loadApi()
                .then(() => {
                    mapWidjet.createMap('map', data);
                })
                .catch(error => console.error(error));
        });
    }
}

export {YandexMaps};