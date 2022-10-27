import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import store from "./store";

test('Render halaman Users dengan benar', () => {
    render(<Provider store={store}><BrowserRouter> <Users/> </BrowserRouter> </Provider>)

    const btn = screen.getByRole('button')
    expect(btn) .toBeInTheDocument()
    expect(btn).toHaveTextContent('Back to Home')
})