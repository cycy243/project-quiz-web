import QuestionTypeSelector from '@/components/quiz/QuestionTypeSelector.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('QuestionTypeSelector tests', () => {
  describe('event handler test', () => {
    it('when an option is selected then emit the options', async () => {
      const wrapper = shallowMount(QuestionTypeSelector)

      wrapper.findAll('option').at(2)!.element.selected = true
      wrapper.find('select').trigger('change')

      expect(wrapper.emitted()).toHaveProperty('type-change')
    })
  })
})
