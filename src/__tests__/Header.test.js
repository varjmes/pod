import React from "react"
import { shallow } from "enzyme"
import Header from "../components/Header"

describe("<Header />", () => {
  const header = shallow(<Header />)

  it("should render the title", () => {
    expect(header.find("h1").text()).toEqual("Pod")
  })
})
