import React from 'react';
import './SubscribeForm.scss';

export default function SubscribeForm() {
  return (
    <>
      <form className="form" autoComplete="off">
        <div className="form-wrapper">
          <label>
            <input placeholder="Enter your email" name="email" type="email" />
          </label>

          <button className="form-button" type="button">
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}
