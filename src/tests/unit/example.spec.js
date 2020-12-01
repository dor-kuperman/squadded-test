import { mount } from '@vue/test-utils'
import postCard from '../../components/post-card.vue'
import jsonToTest from '../../posts-to-test.json'

describe('postCard.vue', () => {
  it('check class and text when commentsCount is under 100', () => {
    const wrapper = mount(postCard, {
      propsData: {
        // posts[0] contains very few comments
        post: jsonToTest.posts[0]
      }
    })
    const classText = wrapper.vm.getClass();
    const displayedText = wrapper.vm.getText();

    expect(classText).toBe("comments-counter");
    expect(displayedText).toBe("3");
  })
})

describe('postCard.vue', () => {
  it('check class and text when commentsCount is over 100', () => {
    const wrapper = mount(postCard, {
      propsData: {
        // posts[0] contains over 100 comments
        post: jsonToTest.posts[1]
      }
    })
    const classText = wrapper.vm.getClass();
    const displayedText = wrapper.vm.getText();

    expect(classText).toBe("comments-counter-over-100");
    expect(displayedText).toBe("212");
  })
})
