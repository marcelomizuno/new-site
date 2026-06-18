(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    function setFaqState(item, open) {
      var answer = item.querySelector('.faq-answer');
      var question = item.querySelector('.faq-question');

      item.classList.toggle('active', open);

      if (question) {
        question.setAttribute('aria-expanded', String(open));
      }

      if (!answer) {
        return;
      }

      if (open) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.setAttribute('aria-hidden', 'false');
        return;
      }

      answer.style.maxHeight = '0px';
      answer.setAttribute('aria-hidden', 'true');
    }

    faqItems.forEach(function (item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');

      if (!question || !answer) {
        return;
      }

      if (!item.classList.contains('active')) {
        answer.style.maxHeight = '0px';
        answer.setAttribute('aria-hidden', 'true');
        question.setAttribute('aria-expanded', 'false');
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.setAttribute('aria-hidden', 'false');
        question.setAttribute('aria-expanded', 'true');
      }

      question.addEventListener('click', function () {
        var shouldOpen = !item.classList.contains('active');

        faqItems.forEach(function (otherItem) {
          if (otherItem !== item) {
            setFaqState(otherItem, false);
          }
        });

        setFaqState(item, shouldOpen);
      });
    });
  });
}());
