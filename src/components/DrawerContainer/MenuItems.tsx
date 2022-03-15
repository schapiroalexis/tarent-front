import ListItemLink from './ListItemLink';
import { v4 } from 'uuid';
import { routesDict } from 'app/index';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
//import { selectSession } from 'features/session';
import { useAppSelector } from 'app/hooks';
import { useTranslation } from 'react-i18next';
import 'locales/i18n';
//@todo: replace arrays with proper import
//@alexis: menuItems will be properly imported from .... @todo
export type MenuItemType = {
  primary: string;
  to: string;
  iconName?: string;
  title?: string;
};
//Since There is looping below for routes That is the reason I have used t('Main_menu.'+name of the menu should be available in Json)
const MenuItems = () => {
  const { t } = useTranslation();
  const session = { status: 'idle' };
  return (
    <>
      {session.status === 'idle' ? (
        <>
          <Divider />
          <List>
            {Object.values(routesDict)
              .filter(routElement => routElement.menuItemType === 'mainMenu')
              .map(menuItem => (
                <ListItemLink
                  key={v4()}
                  primary={t(`mainMenu.${menuItem.primary}`)}
                  to={menuItem.to}
                  iconName={menuItem.iconName}
                  title={menuItem.title}
                />
              ))}
          </List>
          <Divider />
          <List>
            {Object.values(routesDict)
              .filter(routElement => routElement.menuItemType === 'secMenu')
              .map(menuItem => (
                <ListItemLink
                  key={v4()}
                  primary={menuItem.primary!}
                  to={menuItem.to}
                  iconName={menuItem.iconName}
                  title={menuItem.title}
                />
              ))}
          </List>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MenuItems;
