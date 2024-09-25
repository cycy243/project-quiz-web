import IconClose from '@/components/icons/IconClose.vue'
import NewQuizModal from '@/components/quiz/NewQuizModal.vue'
import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('NewQuizModalTests', () => {
  describe('event handler test', () => {
    it('when close button clicked then emit close', () => {
      const wrapper = shallowMount(NewQuizModal)

      wrapper.findComponent(IconClose).trigger('click')

      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })
})
