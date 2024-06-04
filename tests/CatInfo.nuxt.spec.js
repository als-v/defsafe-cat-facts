import { mount } from '@vue/test-utils'
import CatInfo from '@/components/CatInfo/index.vue'
import { useCatStore } from '~/store'
import {
  test,
  expect
} from 'vitest'

test('It initially renders only the default message.', () => {
  const wrapper = mount(CatInfo);
  expect(wrapper.text()).toContain('CAT FACT: Loading... GET A RANDOM CAT FACT');
  wrapper.unmount();
});

test('It renders the first fact.', async () => {
  const wrapper = mount(CatInfo);
  await wrapper.vm.$nextTick();
  await useCatStore().getFact()
  expect(wrapper.text()).toContain(useCatStore().fact);
  wrapper.unmount();
});

test('It renders the second fact when the button is pressed.', async () => {
  const wrapper = mount(CatInfo);
  const button = wrapper.find('button');
  await button.trigger('click');
  await wrapper.vm.$nextTick();
  expect(wrapper.text()).toContain(useCatStore().fact);
  wrapper.unmount();
});
