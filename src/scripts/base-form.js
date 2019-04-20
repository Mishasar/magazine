import $ from "jquery-validation/dist/jquery.validate";

class BaseForm {
    constructor(element) {
        this.$element = $(element);
        this.init();
    }
}

export {BaseForm};