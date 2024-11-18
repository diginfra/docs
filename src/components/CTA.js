import React from 'react';

function CTA() {
  return (
    <div className="cta">
      <div className="container">
        <img src="/docs/img/icon-primary.svg" alt="Diginfra icon" width={100} height={100} />
        <p className="action">Try Diginfra for free</p>
        <a href="https://infra-dashboard.khulnasoft.com/" className="button primary">
          Signup and get started now
        </a>
      </div>
    </div>
  );
}

export default CTA;
