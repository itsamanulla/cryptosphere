import { Card } from 'antd'
import React from 'react'
import CryptoCards from './CryptoCards'
import { useGetCoinsQuery } from '../services/cryptoApi'
import { Row, Col, Input, Spin, Alert } from 'antd'
import { useState, useEffect } from 'react'
import Search from './Search'
import Exchanges from './Exchanges'

function Home() {
  const { data, isLoading, isFetching, error } = useGetCoinsQuery();
  const [search, setSearch] = React.useState("");
  const [cryptos, setCryptos] = useState();
  useEffect(() => {
    setCryptos(data?.data?.coins);

    const filteredData = data?.data?.coins.filter((item) => item.name.toLowerCase().includes(search));

    setCryptos(filteredData);
  }, [data, search]);
  // console.log(data.data.stats);
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

  if (isFetching) return <div className="loader">
    <Spin />
  </div>;

  return (
    <>
      <Search setSearch={setSearch} />
      <Exchanges data={data.data.stats} />
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <CryptoCards data={currency} />

          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home