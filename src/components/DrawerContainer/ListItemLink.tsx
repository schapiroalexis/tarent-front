import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import { MenuItemType } from './MenuItems';

const ListItemLink = ({
  primary,
  to,
  iconName = 'dashboard',
  title = ''
}: MenuItemType) => {
  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link innerRef={() => ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <ListItem button component={CustomLink}>
      <ListItemIcon>
        <Icon title={title}>{iconName}</Icon>
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};
export default ListItemLink;
