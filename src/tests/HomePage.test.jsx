import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Homepage from "../pages/Homepage"


describe("Home Page", () => {
    it("should render homepage", () => {
        render(<BrowserRouter>
        <Homepage />
        </BrowserRouter> 
        )
        ;


        const heading1 = screen.getByTestId("home.heading");
        expect(heading1).toBeInTheDocument();
    })
})