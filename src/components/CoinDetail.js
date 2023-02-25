import React from 'react'
import { useGetCoinQuery } from '../services/cryptoApi';
import { useParams } from 'react-router-dom';
import { Card, Alert } from 'antd';
import { useState } from 'react';
import millify from 'millify';

const CoinDetail = () => {
  const { coinId } = useParams();
  const { data, isLoading, error } = useGetCoinQuery(coinId);


  const coin = data?.data?.coin;
  // console.log(coin);
  // console.log(new Intl.DateTimeFormat(['ban', 'id']).format(Date.now()));
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState('app');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };



  if (error) {
    return (
      <>
        <Alert
          message="Error"
          description={error.data.message}
          type="error"
          showIcon
        />
      </>)
  }

  const tabList = [
    {
      key: 'tab1',
      tab: 'Detials',
    },
    {
      key: 'tab2',
      tab: 'About',
    },
  ];

  const gridStyle = {
    width: 'auto',
    textAlign: 'center',
  };
  const contentList = {
    tab1: <Card >
      <Card.Grid style={gridStyle}>Rank: {coin?.rank}</Card.Grid>
      <Card.Grid style={gridStyle}>Fully Diluted Marketcap: {millify(coin?.fullyDilutedMarketCap)}</Card.Grid>
      <Card.Grid style={gridStyle}>All Time High: {millify(coin?.allTimeHigh.price)}</Card.Grid>
      <Card.Grid style={gridStyle}>Number of Exchange: {coin?.numberOfExchanges}</Card.Grid>
      <Card.Grid style={gridStyle}>No of Market: {coin?.numberOfMarkets}</Card.Grid>
      <Card.Grid style={gridStyle}>24H Volume: {millify(coin?.["24hVolume"])}</Card.Grid>
      <Card.Grid style={gridStyle}>Market Cap: {millify(coin?.marketCap)}</Card.Grid>
      <Card.Grid style={gridStyle}><a href={coin?.websiteUrl} target="_blank">{coin?.name} website</a></Card.Grid>

    </Card>,
    tab2: <p dangerouslySetInnerHTML={{ __html: coin?.description }}></p>,
  };


  return (
    <>
      <Card
        style={{
          width: '100%',
        }}
        title={coin?.name}
        extra={<img className="crypto-image" style={{ width: "55px" }} src={coin?.iconUrl} />}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>


    </>
  );
};

export default CoinDetail