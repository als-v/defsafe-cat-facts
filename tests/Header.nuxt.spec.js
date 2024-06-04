import { mount } from '@vue/test-utils'
import Header from '@/components/Header/index.vue'
import {
  test,
  expect
} from 'vitest'

test('It initially renders the component.', () => {
  const wrapper = mount(Header);
  expect(wrapper.text()).toContain('THE DEFSAFE CAT FACTS PAGE');
  wrapper.unmount();
});