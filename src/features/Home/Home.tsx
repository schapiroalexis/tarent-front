import TileGrid from 'components/Tile/TileGrid';
import DrawerContainer from 'components/DrawerContainer/DrawerContainer';
import { routesDict } from 'app/index';
import { v4 } from 'uuid';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleRedirect = (item: any) => {
    history.push(`${item.to}`);
  };

  return (
    <DrawerContainer>
      <br></br>
      <TileGrid
        items={Object.values(routesDict)
          .filter(routElement => routElement.isDashboardItem)
          .map(menuItem => ({
            id: menuItem.id ? menuItem.id : v4(),
            title: t(`homeLabels.${menuItem.title}`),
            content: t(`homeLabels.${menuItem.title}Desc`),
            //t(('homeLabels.' + menuItem.title + 'Desc') as string),
            requestAction: () => handleRedirect(menuItem)
          }))}
      ></TileGrid>
    </DrawerContainer>
  );
};

export default Home;
