import {describe, expect, it} from 'vitest';
import {render,screen} from '@testing-library/react';
import LoginPage from './login';

describe("Login page",() => {
    it("should render with required fields",() => {
        render(<LoginPage/>)
        // getBy ->throws an error
        // findBy --> async
        // queryBy -> returns null
        expect(screen.getByText(/Sign in/)).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button',{name:'Log in'})).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByText('Forgot password')).toBeInTheDocument();
    })
})