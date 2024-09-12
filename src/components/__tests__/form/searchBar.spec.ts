import { describe, expect, it, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SearchBar from '@/components/form/SearchBar.vue'

describe('SearchBar test', () => {
  describe('event handler test', () => {
    test('when search button clicke then emit submit', () => {
      const wrapper = shallowMount(SearchBar, {
        props: {
          placeholder: 'Test placeholder'
        }
      })

      wrapper.find('.search-bar-search-icon').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('submit')
    })
  })

  test('when placeholder is gived then display it', () => {
    const wrapper = shallowMount(SearchBar, {
      props: {
        placeholder: 'Test placeholder'
      }
    })

    const input = wrapper.find('.search-bar-input').element as HTMLInputElement

    expect(input.placeholder).toBe('Test placeholder')
  })
})
