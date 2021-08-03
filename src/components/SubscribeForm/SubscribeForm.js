import React from 'react';

export default function SubscribeForm() {
  return (
    <>
      <form autoComplete="off">
        <label>
          <span className="label">email</span>
          <input placeholder="Enter your email" name="email" type="email" />
        </label>

        <button type="submit">Subscribe</button>
      </form>
    </>
  );
}
