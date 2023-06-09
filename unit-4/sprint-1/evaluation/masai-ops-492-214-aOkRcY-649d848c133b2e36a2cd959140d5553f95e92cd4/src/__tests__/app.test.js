import { render, act, fireEvent } from "@testing-library/react";
import React from "react";

import Title from "../Components/Title";
import UserCard from "../Components/UserCard";
import Courses from "../Components/Courses";

// Do not change anything in the file
// We will be overrdiing this file while running our tests
// ensure you are submitting your entire project

beforeAll(() => {
  global.score = 1;
  console.log("Score rest to 1");
});

describe("Title Component", () => {
  test("Title component should render the heading", () => {
    expect(Title).toBeDefined();
    const { getByRole } = render(<Title />);
    // tile
    const heading = getByRole("heading");
    expect(heading.tagName).toBe("H1");
    expect(heading.textContent.trim().toLowerCase()).toMatch(/Users Display/i);
    expect(heading.style.color).toBe("teal");
    global.score += 1;
  });
});

describe("User Card Component", () => {
  test("UserCard component should accept props", () => {
    let user = {
      avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
      name: "Alf",
      address: "43766 Mallory Place",
      followers: 97350,
      posts: 930,
    };
    expect(UserCard).toBeDefined();
    const { getByRole, getByTestId, getAllByRole } = render(
      <UserCard {...user} />
    );
    const image = getByRole("img");
    const headings = getAllByRole("heading");
    // image
    expect(image.getAttribute("alt")).toBe(user.name);
    expect(image.getAttribute("src")).toBe(user.avatar);
    expect(image.style.borderRadius).toBe("50%");
    // name
    expect(getByTestId("user_name").textContent).toBe(user.name);
    // address
    expect(getByTestId("user_address").textContent).toBe(user.address);
    // posts
    expect(headings[1].tagName).toBe("H3");
    expect(headings[1].textContent).toBe("Posts");
    expect(getByTestId("user_posts").textContent).toBe(user.posts.toString());
    // followers
    expect(headings[2].tagName).toBe("H3");
    expect(headings[2].textContent).toBe("Followers");
    expect(getByTestId("user_followers").textContent).toBe(
      user.followers.toString()
    );
    global.score += 2;
  });
  test("follow button should work correctly", async () => {
    let user = {
      avatar: "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
      name: "Alf",
      address: "43766 Mallory Place",
      followers: 97350,
      posts: 930,
    };
    expect(UserCard).toBeDefined();
    const { getByRole, getByTestId } = render(<UserCard {...user} />);
    let followBtn = getByRole("button");
    // deafult follow
    expect(followBtn.textContent.trim().toLowerCase()).toBe("follow");
    await act(() => {
      fireEvent.click(followBtn);
    });
    // on toggle
    expect(followBtn.textContent.trim().toLowerCase()).toBe("following");
    await act(() => {
      fireEvent.click(followBtn);
    });
    expect(followBtn.textContent.trim().toLowerCase()).toBe("follow");

    global.score += 3;
  });
});

describe("Courses Component", () => {
  test("Courses component should render the list", () => {
    expect(Courses).toBeDefined();
    const { getAllByRole, getByTestId } = render(<Courses />);
    let headings = getAllByRole("heading");
    let listitems = getAllByRole("listitem");
    // type of courses
    expect(headings[0].tagName).toBe("H2");
    expect(headings[0].textContent.trim().toLowerCase()).toMatch(
      /Full Time Courses/i
    );

    expect(headings[1].tagName).toBe("H2");
    expect(headings[1].textContent.trim().toLowerCase()).toMatch(
      /Part Time Courses/i
    );
    // course full statck full time
    expect(
      listitems[0].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/fullstackwebdevelopment/i);
    expect(
      listitems[1].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/eligibility:18-28yrs/i);
    expect(
      listitems[2].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/duration:30weeks/i);
    // full stack part time
    expect(
      listitems[3].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/fullstackwebdevelopment/i);
    expect(
      listitems[4].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/eligibility:18-28yrs/i);
    expect(
      listitems[5].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/duration:30weeks/i);
    // data analytics part time
    expect(
      listitems[6].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/dataanalytics/i);
    expect(
      listitems[7].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/eligibility:18-28yrs/i);
    expect(
      listitems[8].textContent.trim().toLowerCase().split(" ").join("")
    ).toMatch(/duration:30weeks/i);

    global.score += 3;
  });
});
afterAll(() => {
  console.log("Final Score is", global.score);
});
