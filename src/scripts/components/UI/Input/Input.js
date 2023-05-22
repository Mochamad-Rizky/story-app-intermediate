import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../../LitWithoutShadowDom/LitWithoutShadowDom';

class Input extends LitWithoutShadowDom {
  static get properties() {
    return {
      id: {
        type: String,
        reflect: true,
      },
      label: {
        type: String,
        reflect: true,
      },
      type: {
        type: String,
        reflect: true,
      },
      value: {
        type: String,
        reflect: true,
      },
      placeholder: {
        type: String,
        reflect: true,
      },
      textarea: {
        type: Boolean,
      },
      border: {
        type: Boolean,
      },
      minLength: {
        type: String,
      },
      accept: {
        type: String,
      },
      event: {
        type: String,
      },
      validFeedback: {
        type: String,
      },
      invalidFeedback: {
        type: String,
      },
    };
  }

  firstUpdated(_changedProperties) {
    if (this.event) {
      const element = this.querySelector(this.textarea ? 'textarea' : 'input');

      element.addEventListener(this.event, (event) => {
        if (this.type === 'file') {
          this.#dispatchInputFileEvent(event);
        } else if (['input', 'change'].includes(this.event)) {
          this.#dispatchInputValueEvent(event);
        }
      });
    }

    super.firstUpdated(_changedProperties);
  }

  render() {
    return html`
      <div class="mb-3 input">
        <label for=${this.id} class="form-label input__label text-secondary">${this.label}</label>
        ${this.textarea
          ? html`<textarea
              class="form-control input__form bg-transparent border-secondary rounded"
              id=${this.id}
              rows="3"
              placeholder="${this.placeholder}"
              required
            ></textarea>`
          : html` <input
              type=${this.type}
              class="input__form form-control bg-transparent ${this.border &&
              'border-0'} border-secondary ${!this.border && 'rounded'}  d-inline-block py-2"
              id=${this.id}
              value=${this.value}
              placeholder=${this.placeholder}
              accept=${this.accept || nothing}
              minlength=${this.minLength || nothing}
              required
            />`}
        <div class="invalid-feedback text-danger">${this.invalidFeedback}</div>
        <div class="valid-feedback text-success">${this.validFeedback}</div>
      </div>
    `;
  }

  #dispatchInputFileEvent(event) {
    this.dispatchEvent(
      new CustomEvent('getFile', {
        detail: {
          file: event.target.files,
        },
      }),
    );
  }

  #dispatchInputValueEvent(event) {
    this.dispatchEvent(
      new CustomEvent('getValue', {
        detail: {
          value: event.target.value,
        },
      }),
    );
  }
}

customElements.define('input-form', Input);
