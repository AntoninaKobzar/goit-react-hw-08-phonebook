import main from '../images/main.jpg';
import css from '../components/Navigation/Navigation.module.css';

const Home = () => {
  return (
    <div className={css.img}>
      <img src={main} width={520} alt="phopebook" />
    </div>
  );
};

export default Home;
