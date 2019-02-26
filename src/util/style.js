import { css } from 'styled-components';

const mq = (target, ...conditions) => (...args) => css`
  @media ${target} and ${conditions.map(c => `(${c})`).join(' and ')} {
    ${css(...args)};
  }
`;

const mediaQuery = {
  xsmall: mq('screen', 'max-width: 480px'),
  small: mq('screen', 'min-width: 481px'),
  medium: mq('screen', 'min-width: 767px'),
  large: mq('screen', 'min-width: 961px'),
  xlarge: mq('screen', 'min-width: 1281px'),
};

export { mediaQuery };
