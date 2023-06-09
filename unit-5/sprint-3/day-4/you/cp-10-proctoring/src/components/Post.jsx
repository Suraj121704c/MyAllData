import React, { memo } from 'react';

const Post = memo(({ title, body, verifyPost, id, handleToogle }) => {
  const colors = [
    'teal',
    'red',
    'blue',
    'yellow',
    'pink',
    'purple',
    'green',
    'pink',
    'orange',
    'light blue',
  ];

  function randomColor() {
    return colors[Math.floor((Math.random() * 10))];
  }

  return (
    <div data-testid="post" style={{ backgroundColor: `${randomColor()}` }}>
      <div>
        {/* add title in below h6 and body in P tag */}
        <h6>{title}</h6>
        <p>{body}</p>
      </div>
      {/* The default textContent of button should be  "Verify" and other textContent should be changed to "Verified" and vice-versa */}
      <button data-testid="verify_btn" onClick={() => handleToogle(id)}>
        {verifyPost ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
});

export { Post };
