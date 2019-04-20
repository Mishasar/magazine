import {BaseComponent} from "../base-component";

import $ from "jquery/dist/jquery";


class Accordeon extends BaseComponent {

    init() {
        this.links = this.$element.find(".js-accordeon-link");
        this.items = this.$element.find(".js-accordeon-item");
        this.texts = this.$element.find(".js-accordeon-text");
        this.dot = this.$element.find(".js-accordeon-dot");
        this.imageBlock = this.$element.find(".js-accordeon-image-block");
        this.accordeon = this.$element.find(".js-accordeon-inner");


        this.setActive(this.links.first());

        this.links.on('click', (e) => {
            const $el = $(e.target);
            if (!$el.hasClass('job__accordeon-item_active')) {
                this.setActive($el);
            }
        });
    }

    setActive($el) {
        const $currentItem = $el.closest(this.items);

        if (!$currentItem.hasClass('job__accordeon-item_active')) {
            this.dot.css('transform', 'scale(0.5)');
            const $oldImage = this.$element.find(".js-accordeon-image");
            $oldImage.addClass('job__notebook_edit');
            const $newImage = $oldImage.clone().hide().attr('src', $currentItem.data('img'));

            this.texts.slideUp('normal', () => {
                this.items.removeClass('job__accordeon-item_active');
            });

            $el.siblings(this.texts).slideDown('normal', () => {
                $el.closest(this.items).addClass('job__accordeon-item_active');
                this.dot.css('top', $currentItem.offset().top - this.accordeon.offset().top);
                this.dot.css('transform', 'scale(1)');
                this.imageBlock.append($newImage);

                $oldImage.fadeOut('slow', () => {
                    $oldImage.remove();
                });

                $newImage.fadeIn('fast', () => {
                    $newImage.removeClass('job__notebook_edit');
                });
            });
        }

    }
}

export {Accordeon};