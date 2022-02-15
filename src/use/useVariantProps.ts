import {
  CSSClass,
  Data,
  Errors,
  Variants,
  VanillaComponentProps,
} from '@/core/types';
import { uniqueId } from 'lodash';
import { PropType } from 'vue';

const useVariantProps = <ComponentOptions extends Data>() : VanillaComponentProps => ({
  classes: {
    type: [String, Array, Object] as PropType<CSSClass>,
    default: undefined,
  },
  fixedClasses: {
    type: [String, Array, Object] as PropType<CSSClass>,
    default: undefined,
  },
  variants: {
    type: Object as PropType<Variants<ComponentOptions>>,
    default: undefined,
  },
  errors: {
    type: [String, Array, Object] as PropType<Errors>,
    default: undefined,
  },
  feedback: {
    type: [String] as PropType<string | undefined>,
    default: undefined,
  },
  name: {
    type: [String] as PropType<string>,
    required: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    default(): string {
      return uniqueId('variant-');
    },
  },
  variant: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
});

export default useVariantProps;
