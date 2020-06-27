import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
    url: null,

    didInsertElement() {
        this._super(...arguments);
        const input = document.querySelector('#basic-url');
        input.addEventListener('change', (e) => {
            set(this, 'url', e.target.value);
        });
    },
});
