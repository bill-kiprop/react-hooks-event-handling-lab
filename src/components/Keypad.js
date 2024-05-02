import React from 'react';

function Keypad() {
  const handlePasswordChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <form>
        <input
          type="password"
          onChange={handlePasswordChange}
        />
      </form>
    </div>
  );
}

export default Keypad;
