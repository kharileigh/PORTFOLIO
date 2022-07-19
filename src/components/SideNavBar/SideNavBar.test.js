/**
 * @jest-environment jsdom
*/

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import SideNavBar from '.';


describe("SideNavBar", () => {

    beforeEach(() => {
        render(
                <MemoryRouter>
                    <SideNavBar />
                </MemoryRouter>
            );
    });

    test('Displays a navbar', () => {

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
    })

    // test('Displays a NavLink that redirects to GitHub profile when clicked', async () => { 
        
    //     const link = screen.getByRole("link");

    //     await userEvent.click(link);

    //     expect(link).toEqual("https://github.com/kharileigh");
    //     // expect(window.location.href).toBe("https://github.com/kharileigh");
    // });


    // test('Displays a NavLink to redirects to LinkedIn profile when clicked', async () => {

    //     const link = screen.getByRole('link');

    //     await userEvent.click(link);

    //     expect(click).toHaveBeenCalled();
    //     expect(window.location.href).toBe("https://www.linkedin.com/in/khari-leigh-miller/?trk=people-guest_people_search-card&challengeId=AQGJJxeZNUkoagAAAX_xrrawlVWvErFYFg8oWw7gIs8x5ASKdjtN6EFESuLQR-M_i9dHRLymsetYm9yFaMyF-fn8TbppeK6Ztg&submissionId=1d31b615-8885-e216-7e03-bddc371d8655&original_referer=&originalSubdomain=uk")
    // });

    // test('Displays an appropriate heading', () => {

    //     const header = screen.getByRole('heading');
    
    //     expect(header.textContent).toBe('J U N I O R D E V E L O P E R')

    // });


});