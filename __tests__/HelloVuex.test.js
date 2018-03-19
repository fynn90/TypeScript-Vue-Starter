import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import HelloVuexComponent from '@/hello/components/HelloVuex';
import HelloVuexModule from '@/hello/store/HelloVuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const { mutations, getters } = HelloVuexModule;

describe('HelloVuex Component', ()=>{
    let actions, state, store, getter;

    beforeEach(()=>{
        actions = {
            increment: jest.fn(),
            decrement: jest.fn()
        };
        state = {
            name: 'Fynn',
            count: 3
        }
        store = new Vuex.Store({
            modules:{
                HelloVuex:{
                    state,
                    actions,
                    getters: getters,
                    namespaced: true
                }
            }
        })
    });

    it('call action when decrement button is clicked', ()=>{
        const wrapper = shallow(HelloVuexComponent,{store, localVue});
        const button = wrapper.find('button');
        button.trigger('click');
        expect(actions.decrement).toHaveBeenCalled();
    });

    it('call action when increment button is clicked', ()=>{
        const wrapper = shallow(HelloVuexComponent,{store, localVue});
        const button = wrapper.findAll('button').at(1);
        button.trigger('click');
        expect(actions.increment).toHaveBeenCalled();
    });

    it('HelloVuex Component snapshots', () => {
        const wrapper = shallow(HelloVuexComponent,{store, localVue});
        expect(wrapper.html()).toMatchSnapshot();        
    })

})

describe('HelloVuex store', () => {
    let state;
    beforeEach(()=>{
        state = {
            count: 3,
            name: 'Fynn'
        }
    })
    it('mutations increment' ,() => {
        mutations.decrement(state);
        expect(state.count).toBe(2)
    });

    it('mutations increment', () => {
        mutations.increment(state);
        expect(state.count).toBe(4)
    });

    it('getters exclamationMarks', () => {
        expect(getters.exclamationMarks(state)).toBe('!!!');
    })
})
