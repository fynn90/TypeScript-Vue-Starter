import { shallow } from '@vue/test-utils'
import Hello from '@/hello/components/Hello.vue'

describe('Hello.vue', () => {
    it("render hello component", () => {
        let initialEnthusiasm = 0, name="Fynn";
        const wrapper = shallow(Hello, {
            propsData: {
                name,
                initialEnthusiasm
            }
        });

        const Div = wrapper.find('div.greeting');

        expect(Div.text()).toBe('Hello Fynn')
    })
})