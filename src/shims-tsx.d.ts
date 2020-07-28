import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {
      className?: string;
    }
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {
      className?: string;
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
