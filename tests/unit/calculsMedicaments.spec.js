//import { jest } from '@vue/cli-plugin-unit-jest'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Calcul from '@/views/dmo/Calcul.vue'
//import { iterator } from 'core-js/fn/symbol'

it('should emit an event',()=>{
    //given
    const wrapper = shallowMount(Calcul)
    //const select_medicaments = wrapper.find('#select')
    const select_medicaments = wrapper.findAll('#select option')
    const spy = jest.fn()

    //when
    select_medicaments.at(1).trigger('change')

    //then
    expect(spy).toHaveBeenCalledTimes(1);
});