import {
  render,
  waitFor,
  fireEvent,
  screen,
  performance,
} from '@testing-library/react';
import App from '../App';
// import {Postcomponent} from "../components/Post.jsx"
import { Postcomponent } from '../components/Post.jsx';
let getByTestId;
let component;
import React from 'react';

beforeAll(() => {
  global.score = 1;
  console.log('Score rest to 1');
});

beforeEach(() => {
  component = render(<App />);
  getByTestId = component.getByTestId;
});

describe('Performance Optimisation', () => {
  test('Checking whether timer is getting incremented for every 1 second', async () => {
    const timer = getByTestId('timer');
    const initialTimerValue = timer.textContent
      .match(/\d+/g)
      .map(Number)
      .join('');

    await waitFor(
      () => {
        expect(
          +timer.textContent.match(/\d+/g).map(Number).join('')
        ).toBeGreaterThan(+initialTimerValue);
      },
      { timeout: 4000, interval: 1000 }
    );
    global.score += 2;
  });

  test('Checking whether user able to add posts or not and updating the DOM in real time', async () => {
    const { getByText, getByTestId, getAllByTestId } = component;

    const titleInput = getByTestId('title-input');
    fireEvent.change(titleInput, { target: { value: 'post title 1' } });

    const bodyInput = getByTestId('post-input');
    fireEvent.change(bodyInput, { target: { value: 'post body 1' } });

    const addButton = getByTestId('add-post-button');
    fireEvent.click(addButton);

    const posts = getAllByTestId('post');
    expect(posts.length).toBe(1);

    fireEvent.change(titleInput, { target: { value: 'post title 2' } });
    fireEvent.change(bodyInput, { target: { value: 'post body 2' } });
    fireEvent.click(addButton);
    expect(getAllByTestId('post')).toHaveLength(2);
    fireEvent.change(titleInput, { target: { value: 'post title 3' } });
    fireEvent.change(bodyInput, { target: { value: 'post body 3' } });
    fireEvent.click(addButton);
    expect(getAllByTestId('post')).toHaveLength(3);

    const verifyButton = getAllByTestId('verify_btn');
    verifyButton.map((button) => {
      expect(button.textContent).toBe('Verify');
      fireEvent.click(button);
      expect(button.textContent).toBe('Verified');
    });

    global.score += 2;
  });

  it('should re-render the component when props are changed', () => {
    const handleToggleStatus = jest.fn();
    const { getByTestId, rerender } = render(
      <Postcomponent
        id={1}
        title="test title"
        body="test body"
        verifyPost={false}
        handleToggleStatus={handleToggleStatus}
      />
    );
    rerender(
      <Postcomponent
        id={1}
        title="new title"
        body="new body"
        verifyPost={true}
        handleToggleStatus={handleToggleStatus}
      />
    );
    expect(handleToggleStatus).toHaveBeenCalledTimes(0);
    global.score += 2;
  });

  test('Checking whether each post component is having background color or not', async () => {
    //adding posts
    const { getByText, getByTestId, getAllByTestId } = component;

    const titleInput = getByTestId('title-input');
    fireEvent.change(titleInput, { target: { value: 'post title 1' } });

    const bodyInput = getByTestId('post-input');
    fireEvent.change(bodyInput, { target: { value: 'post body 1' } });

    const addButton = getByTestId('add-post-button');
    fireEvent.click(addButton);

    const posts = getAllByTestId('post');
    expect(posts.length).toBe(1);

    fireEvent.change(titleInput, { target: { value: 'post title 2' } });
    fireEvent.change(bodyInput, { target: { value: 'post body 2' } });
    fireEvent.click(addButton);
    expect(getAllByTestId('post')).toHaveLength(2);
    fireEvent.change(titleInput, { target: { value: 'post title 3' } });
    fireEvent.change(bodyInput, { target: { value: 'post body 3' } });
    fireEvent.click(addButton);
    expect(getAllByTestId('post')).toHaveLength(3);
    //checking back ground color
    posts.forEach((post) => {
      const backgroundColor = post.style.backgroundColor;
      expect(backgroundColor).not.toBe('');
    });
    global.score += 2;
  });

  test('check performance optimisation was done for the webapplication or not-1', async () => {
    const { getByText, getByTestId, getAllByTestId } = component;
    // adding post 1
    const titleInput = getByTestId('title-input');
    fireEvent.change(titleInput, { target: { value: 'post title 1' } });

    const bodyInput = getByTestId('post-input');
    fireEvent.change(bodyInput, { target: { value: 'post body 1' } });

    const addButton = getByTestId('add-post-button');
    fireEvent.click(addButton);

    //adding post 2
    fireEvent.change(titleInput, { target: { value: 'post title 2' } });
    fireEvent.change(bodyInput, { target: { value: 'post body 2' } });
    fireEvent.click(addButton);
    expect(getAllByTestId('post')).toHaveLength(2);

    //clicking on verify button of the post causing the re-render to happen so random background color is getting changed.
    const posts = getAllByTestId('post');
    posts.forEach((post, index) => {
      let backgroundColor = post.style.backgroundColor;
      let prevbackgroundColor = backgroundColor;
      console.log(prevbackgroundColor);
      expect(backgroundColor).not.toBe('');
      let verifyBtn = getAllByTestId('verify_btn');
      fireEvent.click(verifyBtn[index]);
      console.log(post.style.backgroundColor);
      expect(post.style.backgroundColor).not.toBe(prevbackgroundColor);
    });

    global.score += 2;
  });

  test('check performance optimisation was done for the webapplication or not-2', async () => {
    const { getByText, getByTestId, getAllByTestId } = component;
    // clicking on verify button of the second post should not change the backgroundColor of the first post and vice versa

    // adding post 1
    const titleInput = getByTestId('title-input');
    fireEvent.change(titleInput, { target: { value: 'post title 1' } });

    const bodyInput = getByTestId('post-input');
    fireEvent.change(bodyInput, { target: { value: 'post body 1' } });

    const addButton = getByTestId('add-post-button');
    fireEvent.click(addButton);

    //adding post 2
    fireEvent.change(titleInput, { target: { value: 'post title 2' } });
    fireEvent.change(bodyInput, { target: { value: 'post body 2' } });
    fireEvent.click(addButton);
    expect(getAllByTestId('post')).toHaveLength(2);

    // getting posts background color
    let backgroundColorArray = [];
    const posts = getAllByTestId('post');
    posts.forEach((post, index) => {
      let backgroundColor = post.style.backgroundColor;
      backgroundColorArray.push(backgroundColor);
    });
    //now clicking on verify button of 1st post causes the post component to re-render should change the background of first post component only

    let verifyBtn = getAllByTestId('verify_btn');
    fireEvent.click(verifyBtn[0]);
    await waitFor(
      () => {
        expect(posts[0].style.backgroundColor).not.toBe(
          backgroundColorArray[0]
        );
        expect(posts[1].style.backgroundColor).toBe(backgroundColorArray[1]);
      },
      { timeout: 2000, interval: 500 }
    );

    let post1Color = posts[0].style.backgroundColor;
    fireEvent.click(verifyBtn[1]);
    await waitFor(
      () => {
        expect(posts[1].style.backgroundColor).not.toBe(
          backgroundColorArray[1]
        );
        expect(posts[0].style.backgroundColor).toBe(post1Color);
      },
      { timeout: 2000, interval: 500 }
    );

    global.score += 2;
  });
  test('Should not re render the component when same props are passed ', () => {
    const { rerender, getByTestId } = render(
      <Postcomponent
        id="1"
        title="Test Post Title"
        body="Test Post Body"
        verifyPost={false}
        handleToggleStatus={() => {}}
      />
    );
    const post = getByTestId('post');
    // const spy = jest.spyOn(post, "innerHTML");
    const originalColor = post.style.backgroundColor;

    // const spy = jest.spyOn(post, 'render');

    rerender(
      <Postcomponent
        id="1"
        title="Test Post Title"
        body="Test Post Body"
        verifyPost={false}
        handleToggleStatus={() => {}}
      />
    );
    const updatedColor = post.style.backgroundColor;

    expect(updatedColor).toBe(originalColor);
    global.score += 2;
  });
});
afterAll(() => {
  console.log('Final Score is', global.score);
});
