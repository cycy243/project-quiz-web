import IconClose from '@/components/icons/IconClose.vue'
import NewQuizModal, { type QuizFormValues } from '@/components/quiz/NewQuizModal.vue'
import { flushPromises, mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'

describe('NewQuizModalTests', () => {
  describe('event handler test', () => {
    it('when close button clicked then emit close', () => {
      const wrapper = shallowMount(NewQuizModal)

      wrapper.findComponent(IconClose).trigger('click')

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('when close button clicked and form has data then emit close and clear it', async () => {
      const wrapper = shallowMount(NewQuizModal)

      wrapper.find('input[name="title"]').setValue('Test quizzzzz')
      wrapper.find('textarea[name="description"]').setValue('La cavalerie est arrivée')

      wrapper.findComponent(IconClose).trigger('click')
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')

      expect((wrapper.find('input[name="title"]').element as HTMLInputElement).value).toEqual('')
    })

    it('when form has valid data and is submitted then emit submit with form values', async () => {
      const wrapper = mount(NewQuizModal)

      wrapper.find('input[name="title"]').setValue('Test quizzzzz')
      wrapper.find('textarea[name="description"]').setValue('La cavalerie est arrivée')
      await flushPromises()

      expect((wrapper.find('input[name="title"]').element as HTMLInputElement).value).toEqual(
        'Test quizzzzz'
      )
      expect(
        (wrapper.find('textarea[name="description"]').element as HTMLInputElement).value
      ).toEqual('La cavalerie est arrivée')

      wrapper.find('.quiz-modal > form').trigger('submit')
      await flushPromises() // when working with vee-validate using with flushpromises instead of nexttick help

      console.log(Object.keys(wrapper.emitted()))

      const onSuccess = (wrapper.emitted() as any).saved[0][1]
      onSuccess()
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('saved')

      expect((wrapper.find('input[name="title"]').element as HTMLInputElement).value).toEqual('')
    })
  })
})
