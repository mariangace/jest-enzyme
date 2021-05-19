//React
import React from 'react';
//Shallow will simulate a component rendering
import { shallow } from 'enzyme';
//The component we want to test
import Counter from './Counter';

//Test bundle
describe('Basic test in Counter Component', () => {
  //Test1
  test('should print expected h2 with default number prop', () => {
    //Expected h2
    const expectedH2 = `The number that comes from the props is: ${15}`;

    //Simulation of the component rendering (with no props)
    const wrapper = shallow(<Counter />);
    //h2 that our component renders

    const foundH2 = wrapper.find('h2').text();
    //Comparision of values
    expect(foundH2).toBe(expectedH2);
  });

  //Test2
  test('Should print expected h2 with number prop', () => {
    //Number that we will sent as number prop
    const sentProp = 15;
    //Expected h2
    const h2 = `The number that comes from the props is: ${sentProp}`;
    //simulation of the component rendering (with number prop)
    const wrapper = shallow(<Counter number={sentProp} />);
    const foundH2 = wrapper.find('h2').text();
    //COmparision of values
    expect(foundH2).toBe(h2);
  });

  //Test3
  test('Should subtract 1 by clicking -button', () => {
    //Expected value after clicking (15- 1 == 4)
    const expectedValue = '14';
    //Simulation of the component rendering (with no prop)
    const wrapper = shallow(<Counter />);
    //Button that will be clicked
    const addButton = wrapper.find('button').at(0);
    //Simulate click event
    addButton.simulate('click');
    //Found value after clickig
    const foundValue = wrapper.find('p').text();
    //Comparison of values
    expect(foundValue).toBe(expectedValue);
  });

  //Test4
  test('Should add 1 by clicking + button', () => {
    //Expected value after clicking (15 + 1 = 16)
    const expectedValue = '16';
    //Simulation of the component rendering;
    const wrapper = shallow(<Counter />);
    //Button that will be clicked
    const addButton = wrapper.find('button').at(1);
    //Simulate click event
    addButton.simulate('click');
    //Found value after clicking
    const foundValue = wrapper.find('p').text();
    expect(foundValue).toBe(expectedValue);
  });
});
