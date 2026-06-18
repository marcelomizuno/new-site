(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var forms = document.querySelectorAll('form[data-validate]');

    function getErrorElement(field) {
      var wrapper = field.closest('.field') || field.parentElement;
      var existing = wrapper ? wrapper.querySelector('.error') : null;

      if (existing) {
        return existing;
      }

      var error = document.createElement('span');
      error.className = 'error';

      if (wrapper) {
        wrapper.appendChild(error);
      } else {
        field.parentNode.insertBefore(error, field.nextSibling);
      }

      return error;
    }

    function clearFieldError(field) {
      var error = getErrorElement(field);
      error.textContent = '';
      field.setAttribute('aria-invalid', 'false');
    }

    function showFieldError(field, message) {
      var error = getErrorElement(field);
      error.textContent = message;
      field.setAttribute('aria-invalid', 'true');
    }

    function isRequired(field) {
      return field.hasAttribute('required') || field.hasAttribute('data-required');
    }

    function isEmailField(field) {
      return field.type === 'email' ||
        field.name === 'email' ||
        field.dataset.validateEmail === 'true';
    }

    function isValidEmail(value) {
      var atIndex = value.indexOf('@');
      var dotIndex = value.lastIndexOf('.');

      return atIndex > 0 && dotIndex > atIndex + 1;
    }

    function validateField(field) {
      var value = field.value.trim();

      if (isRequired(field) && value === '') {
        showFieldError(field, 'This field is required.');
        return false;
      }

      if (isEmailField(field) && value !== '' && !isValidEmail(value)) {
        showFieldError(field, 'Enter a valid email address.');
        return false;
      }

      clearFieldError(field);
      return true;
    }

    forms.forEach(function (form) {
      var fields = form.querySelectorAll('input, select, textarea');
      var successMessage = form.querySelector('.success-message');

      fields.forEach(function (field) {
        field.setAttribute('aria-invalid', 'false');
        field.addEventListener('input', function () {
          if (field.getAttribute('aria-invalid') === 'true') {
            validateField(field);
          }
        });

        field.addEventListener('blur', function () {
          if (field.value.trim() !== '') {
            validateField(field);
          }
        });
      });

      form.addEventListener('submit', function (event) {
        var isValid = true;

        event.preventDefault();

        fields.forEach(function (field) {
          if (!validateField(field)) {
            isValid = false;
          }
        });

        if (!isValid) {
          return;
        }

        if (successMessage) {
          successMessage.hidden = false;
          if (successMessage.parentNode === form && form.parentNode) {
            form.parentNode.insertBefore(successMessage, form.nextSibling);
          }
        }

        form.hidden = true;
      });
    });
  });
}());
