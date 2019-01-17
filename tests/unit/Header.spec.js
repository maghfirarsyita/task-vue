import { shallowMount, mount } from '@vue/test-utils'
import Content from '@/components/Header.vue';

describe('<Content /> specification.', () => {
    it('Successfully render Header', () => {
        const wrapper = shallowMount(Content, {})
        expect(wrapper.find('.header').isVisible()).toBe(true);
    });
    it('Add button is visible', () => {
        const wrapper = shallowMount(Content, {})
        expect(wrapper.find('#add-task').isVisible()).toBe(true);
    });
});