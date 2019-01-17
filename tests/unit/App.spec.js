import { shallowMount, mount } from '@vue/test-utils'
import Content from '@/components/App.vue';

describe('<Content /> specification.', () => {
    it('Successfully render app', () => {
        const wrapper = shallowMount(Content, {})
        expect(wrapper.find('.app').isVisible()).toBe(true);
    });
});

