import { HEADING } from './Home.constants';
import { getCurrentDateToLocaleString } from './Home.helpers';
import { ReactComponent as Icon } from '@assets/o.svg';

function Home() {
  return (
    <div className="text-sm">
      <Icon style={{ height: '50px', width: '50px' }} />
      <div>{HEADING}</div>
      <p>Today is: {getCurrentDateToLocaleString()}</p>
    </div>
  );
}

export { Home };
