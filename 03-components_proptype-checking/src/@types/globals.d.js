import { exact, number, oneOf, string } from 'prop-types';

export const UserType = exact({
  id: string.isRequired,
  name: string.isRequired,
  type: oneOf(['naver-blog', 'facebook', 'instagram', 'naver-post', 'youtube']),
  size: number.isRequired,
});