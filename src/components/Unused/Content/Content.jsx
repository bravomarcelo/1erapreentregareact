
import ItemListContainer from './ItemListContainer/ItemListContainer';
import TitlePage from '../TitlePage/TitlePage';

const Content = () => {
    return (
      <main className="min-h-96 container mx-auto">
        <TitlePage grettings="Bienvenidos a Restaurant Pepito" />
        <ItemListContainer />
      </main>
    );
  };

export default Content;