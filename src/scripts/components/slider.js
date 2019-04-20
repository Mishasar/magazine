import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";
import "slick-carousel";


class Slider extends BaseComponent {

    init() {
        this.$element.slick({
            infinite: false,
            slidesToShow: 7,
            slidesToScroll: 3,
            prevArrow: "<a href=\"javascript:void(0);\" class='partners__prev arrow arrow_prev'></a>",
            nextArrow: "<a href=\"javascript:void(0);\" class='partners__next arrow arrow_next'></a>"
        });
    }

}

export {Slider};