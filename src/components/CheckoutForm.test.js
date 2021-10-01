import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const fNameInput = screen.queryByLabelText(/first name:/i)
    userEvent.type(fNameInput, 'Billy');

    const lNameInput = screen.queryByLabelText(/last name:/i)
    userEvent.type(lNameInput, 'Paris');

});
