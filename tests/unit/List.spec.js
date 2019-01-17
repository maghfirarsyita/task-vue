import { shallowMount, mount } from '@vue/test-utils'
import Content from '@/components/List.vue';

describe('<Content /> specification.', () => {
    it('Successfully render List', () => {
        const wrapper = shallowMount(Content, {})
        expect(wrapper.find('.list').isVisible()).toBe(true);
    });
    it('Task list is empty at first', () => {
        const wrapper = shallowMount(Content, {})
        expect(wrapper.find('.collection').isEmpty()).toBe(true);
    });
});