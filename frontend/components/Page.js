import PropTypes from 'prop-types';
import Header from '../components/Header';

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>PAGE COMPONENT</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
