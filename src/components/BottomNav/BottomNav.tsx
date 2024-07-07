import { NavLink } from "react-router-dom";
import css from './BottomNav.module.scss';
import { navItems } from './nav.config';

export const BottomNav = () => {

  return (
    <nav className={css['nav']}>
      {navItems.map((item) => {
        return (
          <NavLink to={item.route} key={item.title}
            className={({ isActive }) =>
              isActive ? `${css['link']} ${css['active']}` : `${css['link']}`
            }>
            <div className={css['link__icon']}>{item.iconComponent()}</div>
            <span className={css['link__title']}>{item.title}</span>
          </NavLink >
        );
      })}
    </nav >
  );
};
