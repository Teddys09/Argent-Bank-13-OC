import React from 'react';

const EditName = () => {
  function editForm() {
    const h1 = document.querySelector('.main-title h1');
    h1.style.color = '#283845';
    const p = document.querySelector('.main-title p');
    p.style.color = '#283845';

    const background = document.querySelector('.background-dark');
    background.style.backgroundColor = '#DFE6ED';
    const button = document.querySelector('.edit-button');
    button.style.display = 'none';
    const form = document.querySelector('.edit-name');
    form.style.display = 'block';
    document.querySelector('.main-title p').style.display = 'none';
  }

  return (
    <button className="edit-button" onClick={() => editForm()}>
      Edit Name
    </button>
  );
};

export default EditName;
