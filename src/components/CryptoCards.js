import millify from 'millify';
import { NavLink } from 'react-router-dom';
import { Badge, Card, Col } from 'antd';

import '../App.css';

function CryptoCards(data) {

  const currency = data.data;

  return (
    <>

      <Col
        xs={24}
        sm={12}
        lg={6}
        className="crypto-card"
        key={currency.uuid}
      >
        <NavLink key={currency.uuid} to={`/crypto/${currency.uuid}`}>
          <Card
            title={`${currency.rank}. ${currency.name}`}
            // tabBarExtraContent={<Badge count={currency.symbol} color={currency.change <0 ? "#f5222d":"#52c41a" }/>}
            extra={<img className="crypto-image" style={{ width: "35px" }} src={currency.iconUrl} />}
            hoverable
          >
            <p>Price: {millify(currency.price)}</p>
            <p>Market Cap: {millify(currency.marketCap)}</p>
            <p>Daily Change: <Badge count={`${currency.change}%`} color={currency.change < 0 ? "#f5222d" : "#156C23"} /></p>
            {/* <Badge count={currency.symbol} color={currency.change <0 ? "#f5222d":"#52c41a" }/> */}

          </Card></NavLink>

      </Col>

    </>
  )
}

export default CryptoCards