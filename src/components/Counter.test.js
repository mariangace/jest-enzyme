//React
import React from 'react';
//Shallow will simulate a component rendering
import { shallow, Shallow } from 'enzyme';
//The component we want to test
import Counter from './Counter';

//Test bundle
describe('Basic test in Counter Component', () => {
  //Test1
  test('should print expected h2 with default number prop', () => {
    //Expected h2
    const expectedH2 = `The number that comes from the props is: ${20}`;

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
    const sentProp = 25;
    //Expected h2
    const h2 = `The number that comes from the props is: ${sentProp}`;
    //simulation of the component rendering (with number prop)
    const wrapper = shallow(<Counter number={sentProp} />);
    const foundH2 = wrapper.find('h2').text();
    //COmparision of values
    expect(foundH2).toBe(h2);
  });
});
