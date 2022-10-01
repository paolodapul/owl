import { HEADING } from './Home.constants';
import { getCurrentDateToLocaleString } from './Home.helpers';

function Home() {
  return (
    <div className="text-sm">
      <div>{HEADING}</div>
      <p>Today is: {getCurrentDateToLocaleString()}</p>
    </div>
  );
}

export { Home };
