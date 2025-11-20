import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Slideshow from "../Slideshow";

describe("Slideshow", () => {
  it("autoplays to next slide", async () => {
    vi.useFakeTimers();
    render(<Slideshow />);

    const firstHeading = await screen.findByRole("heading", {
      name: /All currency conversion rates are indicative/i,
    });
    expect(firstHeading).toBeInTheDocument();

    vi.advanceTimersByTime(7000);

    const secondHeading = await screen.findByRole("heading", {
      name: /Delivery Schedule/i,
    });
    expect(secondHeading).toBeInTheDocument();

    vi.useRealTimers();
  });

  it("nav buttons change slide", async () => {
    render(<Slideshow />);

    const nextBtn = screen.getByRole("button", { name: /Next slide/i });
    fireEvent.click(nextBtn);

    const secondHeading = await screen.findByRole("heading", {
      name: /Delivery Schedule/i,
    });
    expect(secondHeading).toBeInTheDocument();

    const prevBtn = screen.getByRole("button", { name: /Previous slide/i });
    fireEvent.click(prevBtn);

    const firstHeading = await screen.findByRole("heading", {
      name: /All currency conversion rates are indicative/i,
    });
    expect(firstHeading).toBeInTheDocument();
  });

  it("swipes left/right", async () => {
    render(<Slideshow />);
    const container = screen.getByRole("region", { name: /Terms slideshow/i });

    fireEvent.pointerDown(container, { clientX: 200 });
    fireEvent.pointerMove(container, { clientX: 120 });
    fireEvent.pointerUp(container, { clientX: 120 });

    const secondHeading = await screen.findByRole("heading", {
      name: /Delivery Schedule/i,
    });
    expect(secondHeading).toBeInTheDocument();

    fireEvent.pointerDown(container, { clientX: 100 });
    fireEvent.pointerMove(container, { clientX: 180 });
    fireEvent.pointerUp(container, { clientX: 180 });

    const firstHeading = await screen.findByRole("heading", {
      name: /All currency conversion rates are indicative/i,
    });
    expect(firstHeading).toBeInTheDocument();
  });

  it("space toggles autoplay", async () => {
    render(<Slideshow />);
    const pauseBtn = screen.getByRole("button", { name: /Pause autoplay/i });
    expect(pauseBtn).toBeInTheDocument();

    await userEvent.keyboard(" ");
    const resumeBtn = await screen.findByRole("button", {
      name: /Resume autoplay/i,
    });
    expect(resumeBtn).toBeInTheDocument();
  });
});
