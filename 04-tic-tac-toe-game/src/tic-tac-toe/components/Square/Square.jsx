import { node, func, object } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay:func,
  style:object
};

// 상태를 가지지 않는(Stateless) 컴포넌트
function Square({ children, onPlay, style }) {
  // [파생된 상태]
  const isDisabled = !!children;

  return (
    <button className={S.component} style={style} onClick={onPlay} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;