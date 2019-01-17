import { shallowMount, mount } from '@vue/test-utils'
import Content from '@/components/Modal.vue';

describe('<Content /> specification.', () => {
    it('Popup is available', () => {
        const wrapper = mount(Content, {})
        expect(wrapper.find('.modal-vue').isVisible()).toBe(true);
    });
});