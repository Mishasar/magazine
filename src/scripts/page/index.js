import {BasePage} from "../base-page";
import {Btn} from "../components/btn";
import {Welcome} from "../components/welcome";
import {Accordeon} from "../components/accordeon";
import {Slider} from "../components/slider";
import {Histories} from "../components/histories";
import {Comments} from "../components/comments";


class Index extends BasePage {
    init() {
        const btns = new Btn(this.$element.find('.js-btn'));
        const accordeon = new Accordeon(this.$element.find('.js-accordeon'));
        const welcomeBlock = new Welcome(this.$element.find('.js-welcome'));
        const slider = new Slider(this.$element.find('.js-partners-slider'));
        const histories = new Histories(this.$element.find('.js-histories'));
        const comments = new Comments(this.$element.find('.js-comments'));
    }
}

const page = new Index();