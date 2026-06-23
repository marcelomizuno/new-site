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

    function isSelectField(field) {
      return field.tagName === 'SELECT';
    }

    function isValidEmail(value) {
      var atIndex = value.indexOf('@');
      var dotIndex = value.lastIndexOf('.');

      return atIndex > 0 && dotIndex > atIndex + 1;
    }

    function getFieldLabel(field) {
      var labelText = '';

      if (field.id && field.labels && field.labels.length > 0) {
        labelText = field.labels[0].textContent || '';
      }

      labelText = labelText.replace(/[*\s]+/g, ' ').trim();

      if (!labelText && field.name) {
        labelText = field.name.replace(/[_-]+/g, ' ').trim();
      }

      return labelText || 'this field';
    }

    function getRequiredVerb(label) {
      return /^(what|how|which)\b/.test(label) ? 'tell us' : 'choose';
    }

    function validateField(field) {
      var value = field.value.trim();
      var label = getFieldLabel(field).toLowerCase();

      if (isRequired(field) && value === '') {
        var msg;
        if (isSelectField(field)) {
          var verb = getRequiredVerb(label);
          if (verb === 'tell us') {
            msg = 'Please ' + verb + ' ' + label.replace(/\?+$/, '') + '.';
          } else {
            msg = 'Please ' + verb + ' your ' + label + '.';
          }
        } else {
          msg = 'Please enter your ' + label + '.';
        }
        showFieldError(field, msg);
        return false;
      }

      if (isEmailField(field) && value !== '' && !isValidEmail(value)) {
        showFieldError(field, 'Enter a valid email — like name@company.com.');
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
