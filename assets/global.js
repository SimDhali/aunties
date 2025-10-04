// Global JavaScript for Aunties Eats Shopify Theme

class MenuDrawer extends HTMLElement {
  constructor() {
    super();

    this.mainDetailsToggle = this.querySelector('details');

    this.addEventListener('keyup', this.onKeyUp.bind(this));
    this.addEventListener('focusout', this.onFocusOut.bind(this));
    this.bindEvents();
  }

  bindEvents() {
    this.querySelectorAll('summary').forEach(summary => summary.addEventListener('click', this.onSummaryClick.bind(this)));
    this.querySelectorAll('button').forEach(button => button.addEventListener('click', this.onCloseButtonClick.bind(this)));
  }

  onKeyUp(event) {
    if(event.code.toUpperCase() !== 'ESCAPE') return;

    const openDetailsElement = event.target.closest('details[open]');
    if(!openDetailsElement) return;

    openDetailsElement === this.mainDetailsToggle ? this.closeMenuDrawer(event, this.mainDetailsToggle.querySelector('summary')) : openDetailsElement.removeAttribute('open');
  }

  onSummaryClick(event) {
    const detailsElement = event.currentTarget.parentNode;
    const isOpen = detailsElement.hasAttribute('open');
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function addTrapFocus() {
      trapFocus(this.mainDetailsToggle, this.mainDetailsToggle.querySelector('summary'));
    }

    if (detailsElement === this.mainDetailsToggle) {
      if(isOpen) event.preventDefault();
      isOpen ? this.closeMenuDrawer(event, event.currentTarget) : this.openMenuDrawer(event.currentTarget);
    } else {
      setTimeout(() => {
        detailsElement.classList.add('menu-opening');
        detailsElement.addEventListener('transitionend', () => {
          detailsElement.classList.remove('menu-opening');
        }, { once: true });
      }, 100);
    }
  }

  openMenuDrawer(summaryElement) {
    setTimeout(() => {
      this.mainDetailsToggle.classList.add('menu-opening');
    });
    summaryElement.setAttribute('aria-expanded', true);
    trapFocus(this.mainDetailsToggle, summaryElement);
    document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`);
  }

  closeMenuDrawer(event, elementToFocus = false) {
    if (event === undefined) return;

    this.mainDetailsToggle.classList.remove('menu-opening');
    this.mainDetailsToggle.querySelectorAll('details').forEach(details => {
      details.removeAttribute('open');
    });
    this.mainDetailsToggle.removeAttribute('open');
    document.body.classList.remove(`overflow-hidden-${this.dataset.breakpoint}`);
    removeTrapFocus(elementToFocus);
    this.closeAnimation(this.mainDetailsToggle);
  }

  onFocusOut(event) {
    setTimeout(() => {
      if (this.mainDetailsToggle.hasAttribute('open') && !this.mainDetailsToggle.contains(document.activeElement)) this.closeMenuDrawer();
    });
  }

  onCloseButtonClick(event) {
    const detailsElement = event.currentTarget.closest('details');
    this.closeMenuDrawer(event, detailsElement.querySelector('summary'));
  }

  closeAnimation(detailsElement) {
    let animationStart;

    const handleAnimation = (time) => {
      if (animationStart === undefined) {
        animationStart = time;
      }

      const elapsedTime = time - animationStart;

      if (elapsedTime < 400) {
        window.requestAnimationFrame(handleAnimation);
      } else {
        detailsElement.classList.remove('menu-opening');
      }
    }

    window.requestAnimationFrame(handleAnimation);
  }
}

customElements.define('menu-drawer', MenuDrawer);

// Utility functions
function trapFocus(container, elementToFocus = container) {
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];

  removeTrapFocus();

  container.setAttribute('tabindex', '-1');
  elementToFocus.focus();

  function handleFocusTrap(event) {
    if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key

    // If tab key is pressed
    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    //  If shift + tab keys are pressed
    if (event.target === first && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  }

  document.addEventListener('keydown', handleFocusTrap);

  container.addEventListener('focusout', function() {
    setTimeout(function() {
      if (!container.contains(document.activeElement)) {
        elementToFocus.focus();
      }
    });
  });
}

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}

function removeTrapFocus(elementToFocus = null) {
  document.removeEventListener('keydown', trapFocus);

  if (elementToFocus) elementToFocus.focus();
}

// Initialize theme
document.addEventListener('DOMContentLoaded', function() {
  // Add any initialization code here
  console.log('Aunties Eats theme loaded');
});
