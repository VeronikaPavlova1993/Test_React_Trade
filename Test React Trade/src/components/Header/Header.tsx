import moment from 'moment';
import './Header.css';

export function Header() {
 const date = moment();
 date.local();
 return (
  <div className="header">
   <h1 className="header__title">
    Ход торгов{' '}
    <strong>
     Тестовые торги на аппарат ЛОТОС 2033564
     <span>
      ({date.format('L')} {date.format('LT')})
     </span>
    </strong>
   </h1>
  </div>
 );
}
