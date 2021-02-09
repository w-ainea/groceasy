import React from "react";
import ShopItem from "./index";
import { shallow } from "enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// the component to be tested
function renderShopItem(args) {
  const defaultProps = {
    product: {},
    addItemToCart: () => {},
  };

  // render the component, and do a shallow test
  const props = { ...defaultProps, ...args };
  return shallow(<ShopItem {...props} />);
}

// if the test is successful, this will be displayed in the terminal
it("renders correctly", () => {
  const wrapper = renderShopItem();
  expect(wrapper).toMatchSnapshot();
});
