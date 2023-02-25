import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar, Card, Space } from 'antd';
// import HTMLReactParser from 'html-react-parser';

// import { useGetExchangesQuery } from '../services/cryptoApi';
// import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = ({ data }) => {
  //   const { data, isFetching } = useGetExchangesQuery();
  //   const exchangesList = data?.data?.exchanges;

  // if (isFetching) return <Loader />;
  // console.log(data);
  const gridStyle = {
    width: 'auto',
    textAlign: 'center',

  };

  return (
    <>
      <Space direction="horizontal" style={{ width: '100%', marginBottom: "20px", justifyContent: 'center' }}>
        <Card title="Global Crypto Statistics">
          <Card.Grid style={gridStyle}>Total Cryptocurrencies: {data.totalCoins}</Card.Grid>
          <Card.Grid style={gridStyle}>Total Market Cap: {millify(data.totalMarketCap)}</Card.Grid>
          <Card.Grid style={gridStyle}>Total Market: {millify(data.totalMarkets)}</Card.Grid>
          <Card.Grid style={gridStyle}>Total Exchanges: {data.totalExchanges}</Card.Grid>
          <Card.Grid style={gridStyle}> Total 24H Volume: {millify(data.total24hVolume)}</Card.Grid>
          <Card.Grid style={gridStyle}>Total: {data.total}</Card.Grid>
        </Card></Space>
    </>
  );
};

export default Exchanges;

