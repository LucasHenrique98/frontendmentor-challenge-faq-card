window.addEventListener('load', () => {
  const span1 = document.querySelector('.response1');
  const checkbox1 = document.querySelector('#checkbox1');

  const span2 = document.querySelector('.response2');
  const checkbox2 = document.querySelector('#checkbox2');

  const span3 = document.querySelector('.response3');
  const checkbox3 = document.querySelector('#checkbox3');

  const span4 = document.querySelector('.response4');
  const checkbox4 = document.querySelector('#checkbox4');

  const span5 = document.querySelector('.response5');
  const checkbox5 = document.querySelector('#checkbox5');

  checkbox1.addEventListener('change', () => {
    if (checkbox1.checked) {
      span2.textContent = '';
      span3.textContent = '';
      span4.textContent = '';
      span5.textContent = '';

      span1.textContent =
        'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.';
    } else {
      span1.textContent = '';
    }
  });

  checkbox2.addEventListener('change', () => {
    if (checkbox2.checked) {
      span1.textContent = '';
      span3.textContent = '';
      span4.textContent = '';
      span5.textContent = '';

      span2.textContent =
        'No more than 2GB. All files in your account must fit your allotted storage space.';
    } else {
      span2.textContent = '';
    }
  });

  checkbox3.addEventListener('change', () => {
    if (checkbox3.checked) {
      span1.textContent = '';
      span2.textContent = '';
      span4.textContent = '';
      span5.textContent = '';

      span3.textContent =
        'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.';
    } else {
      span3.textContent = '';
    }
  });

  checkbox4.addEventListener('change', () => {
    if (checkbox4.checked) {
      span1.textContent = '';
      span2.textContent = '';
      span3.textContent = '';
      span5.textContent = '';

      span4.textContent =
        'Yes! Send us a message and we’ll process your request no questions asked.';
    } else {
      span4.textContent = '';
    }
  });

  checkbox5.addEventListener('change', () => {
    if (checkbox5.checked) {
      span1.textContent = '';
      span2.textContent = '';
      span3.textContent = '';
      span4.textContent = '';

      span5.textContent =
        'Chat and email support is available 24/7. Phone lines are open during normal business hours.';
    } else {
      span5.textContent = '';
    }
  });
});
