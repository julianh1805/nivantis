import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Calcul from '@/views/Calcul.vue'

describe('Calcul.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Calcul, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
