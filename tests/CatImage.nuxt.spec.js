import { mount } from '@vue/test-utils'
import CatImage from '@/components/CatImage/index.vue'
import {
  test,
  expect
} from 'vitest'

test('Renders the component and the images.', () => {
  const wrapper = mount(CatImage);
  expect(wrapper.get('.img1'))
  expect(wrapper.get('.img2'))
  expect(wrapper.get('.img3'))
  wrapper.unmount();
});