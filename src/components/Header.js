import React from 'react';
import Logo from '../moralis-logo.svg';
import Eth from '../eth.svg';
import Polygon from '../polygon.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  const { address, isConnected, connect } = props;
  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        {/* <div className="headerItem">
          <img src={Polygon} alt="Polygon" className="eth" />
          Polygon
        </div> */}
        <div className="connectButton" onClick={connect}>
          {isConnected
            ? address.slice(0, 4) + '...' + address.slice(38)
            : 'Connect'}
        </div>
      </div>
    </header>
  );
}

export default Header;
