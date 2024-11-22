// src/types/htmx.d.ts
declare namespace svelteHTML {
    interface HTMLAttributes<T> {
      'hx-get'?: string;
      'hx-post'?: string;
      'hx-put'?: string;
      'hx-delete'?: string;
      'hx-patch'?: string;
      'hx-target'?: string;
      'hx-trigger'?: string;
      'hx-swap'?: string;
      'hx-headers'?: string;
      'hx-vals'?: string;
      'hx-push-url'?: string;
      'hx-select'?: string;
      'hx-boost'?: string;
      'hx-history-elt'?: string;
      'hx-include'?: string;
    }
  }
  