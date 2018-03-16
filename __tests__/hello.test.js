import {shallow} from '@vue/test-utils'
import Hello from '@/hello/components/Hello.vue'
import HelloDecorator from '@/hello/components/HelloDecorator.vue'
describe('Hello.vue',()=>{
    it('render Hello vue components',() => {
        let initialEnthusiasm = 0, name="Fynn";
        const wrapper = shallow(Hello, {
            propsData: {
                name,
                initialEnthusiasm
            }
        });
        const Div = wrapper.find('div.greeting');
        expect(Div.text()).toBe('Hello Fynn')  
    });

    it('render HelloDecorator vue components', ()=>{
        let initialEnthusiasm = 1, name="Fynn";
        const wrapper = shallow(Hello, {
            propsData: {
                name,
                initialEnthusiasm
            }
        });
        const Div = wrapper.find('div.greeting');
        expect(Div.text()).toBe('Hello Fynn!') 
    })

})