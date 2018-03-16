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
        expect(Div.text()).toBe(`Hello ${name}`)
        
        const ButtonArray = wrapper.findAll('button');
        const decrementBtnWrapper = ButtonArray.at(0);
        const incrementBtnWrapper = ButtonArray.at(1);
        incrementBtnWrapper.trigger('click')
        expect(wrapper.vm.enthusiasm).toBe(1)
        const Enthusiasm = wrapper.vm.enthusiasm;
        let exclamationMarks = Array(Enthusiasm+1).join('!')
        expect(Div.text()).toBe(`Hello ${name}${exclamationMarks}`)
    });

    it('Hello vue snapshot', ()=>{
        const wrapper = shallow(Hello, {
            propsData:{
                name: 'Fynn',
                initialEnthusiasm: 3
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    it.skip('render HelloDecorator vue components', ()=>{
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