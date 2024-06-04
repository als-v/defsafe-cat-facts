import { mount } from '@vue/test-utils'
import CatInfo from '@/components/CatInfo/index.vue'
import { useCatStore } from '~/store'
import {
  test,
  expect
} from 'vitest'

test('Renderiza inicialmente apenas a mensagem padrão', () => {
  const wrapper = mount(CatInfo);
  expect(wrapper.text()).toContain('CAT FACT:  GET A RANDOM CAT FACT');
  wrapper.unmount();
});

test('Renderiza o primeiro fato', async () => {
  const wrapper = mount(CatInfo);
  await wrapper.vm.$nextTick();
  await useCatStore().getFact()
  expect(wrapper.text()).toContain(useCatStore().fact);
  wrapper.unmount();
});

test('Renderiza o segundo fato quando o botão é pressionado', async () => {
  const wrapper = mount(CatInfo);
  const button = wrapper.find('button');
  await button.trigger('click');
  await wrapper.vm.$nextTick();
  expect(wrapper.text()).toContain(useCatStore().fact);
  wrapper.unmount();
});