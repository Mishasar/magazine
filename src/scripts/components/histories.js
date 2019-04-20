import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";
import "slick-carousel";


class Histories extends BaseComponent {

    init() {
        this.$element.find('.js-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: "<a href=\"javascript:void(0);\" class='partners__prev arrow arrow_prev'></a>",
            nextArrow: "<a href=\"javascript:void(0);\" class='partners__next arrow arrow_next'></a>"
        });
    }

}

export {Histories};