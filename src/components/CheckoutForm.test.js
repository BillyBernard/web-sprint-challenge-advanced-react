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
    const fNameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(fNameInput, 'Billy');

    const lNameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lNameInput, 'Paris');

    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, 'the middle of nowhere 456');

    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, 'Nowhere');

    const stateInput = screen.getByLabelText(/State:/i)
    userEvent.type(stateInput, 'Kansas');

    const zipInput = screen.getByLabelText(/Zip:/i)
    userEvent.type(zipInput, '1111111');

    const button = screen.getByRole('button');
    userEvent.click(button);

    const messageFeedback = await screen.findByTestId('successMessage');
    expect(messageFeedback).toBeInTheDocument();

});
