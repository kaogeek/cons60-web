import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Navbar and Home components", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  // Check if Navbar is rendered
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();

  // Check if Home component is rendered
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});

test("renders Navbar and About components when navigating to /about", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );

  // Check if Navbar is rendered
  const navbarElement = screen.getByTestId("navbar");
  expect(navbarElement).toBeInTheDocument();

  // Check if About component is rendered
  const aboutElement = screen.getByTestId("about");
  expect(aboutElement).toBeInTheDocument();
});
