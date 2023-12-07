"use client"

import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton } from 'antd';
// import FeatherIcon from 'feather-icons-react';
import { CardBarChart2, EChartCard } from "../style"
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from "../../styled"
import Heading from '../../components/heading/heading';
import { ChartjsBarChartTransparent } from '../../components/charts/chartjs';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const TotalRevenue = lazy(() => import("../overview/ecommerce/TotalRevenue"));
const RevenueGenerated = lazy(() => import('../overview/ecommerce/RevenueGenerated'));
const TopSellingProduct = lazy(() => import('../overview/ecommerce/TopSellingProduct'));
const SalesByLocation = lazy(() => import('../overview/ecommerce/SalesByLocation'));
const RevenueByDevice = lazy(() => import('../overview/ecommerce/RevenueByDevice'));

const chartOptions = {
    legend: {
        display: false,
        labels: {
            display: false,
        },
    },
    scales: {
        yAxes: [
            {
                stacked: true,
                gridLines: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        ],
        xAxes: [
            {
                stacked: true,
                gridLines: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        ],
    },
};

function Ecommerce() {
    return (
        <>
            {/* <PageHeader
        ghost
        title="Ecommerce Dashboard"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      /> */}
            <Main>
                <Row gutter={25}>
                    <Col xxl={6} md={12} sm={12} xs={24}>
                        <Cards headless>
                            <EChartCard>
                                <div className="card-chunk">
                                    <CardBarChart2>
                                        <Heading as="h1">7,461</Heading>
                                        <span>Orders</span>
                                        <p>
                                            <span className="growth-upward">
                                                {/* <FeatherIcon icon="arrow-up" /> */}
                                                25%
                                            </span>
                                            <span>Since last week</span>
                                        </p>
                                    </CardBarChart2>
                                </div>
                                <div className="card-chunk">
                                    <ChartjsBarChartTransparent
                                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                                        datasets={[
                                            {
                                                data: [20, 60, 50, 45, 50, 60, 70],
                                                backgroundColor: '#EFEFFE',
                                                hoverBackgroundColor: '#5F63F2',
                                                label: 'Orders',
                                                barPercentage: 1,
                                            },
                                        ]}
                                        options={chartOptions}
                                    />
                                </div>
                            </EChartCard>
                        </Cards>
                    </Col>
                    <Col xxl={6} md={12} sm={12} xs={24}>
                        <Cards headless>
                            <EChartCard>
                                <div className="card-chunk">
                                    <CardBarChart2>
                                        <Heading as="h1">$28,947</Heading>
                                        <span>Revenue</span>
                                        <p>
                                            <span className="growth-downward">
                                                {/* <FeatherIcon icon="arrow-down" />  */}
                                                25%
                                            </span>
                                            <span>Since last week</span>
                                        </p>
                                    </CardBarChart2>
                                </div>
                                <div className="card-chunk">
                                    <ChartjsBarChartTransparent
                                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                                        datasets={[
                                            {
                                                data: [20, 60, 50, 45, 50, 60, 70],
                                                backgroundColor: '#FFF0F6',
                                                hoverBackgroundColor: '#FF69A5',
                                                label: 'Revenue',
                                                barPercentage: 1,
                                            },
                                        ]}
                                        options={chartOptions}
                                    />
                                </div>
                            </EChartCard>
                        </Cards>
                    </Col>

                    <Col xxl={6} md={12} sm={12} xs={24}>
                        <Cards headless>
                            <EChartCard>
                                <div className="card-chunk">
                                    <CardBarChart2>
                                        <Heading as="h1">$3,241</Heading>
                                        <span>Avg. order value</span>
                                        <p>
                                            <span className="growth-upward">
                                                {/* <FeatherIcon icon="arrow-up" /> */}
                                                25%
                                            </span>
                                            <span>Since last week</span>
                                        </p>
                                    </CardBarChart2>
                                </div>
                                <div className="card-chunk">
                                    <ChartjsBarChartTransparent
                                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                                        datasets={[
                                            {
                                                data: [20, 60, 50, 45, 50, 60, 70],
                                                backgroundColor: '#E8FAF4',
                                                hoverBackgroundColor: '#20C997',
                                                label: 'Avg Orders',
                                                barPercentage: 1,
                                            },
                                        ]}
                                        options={chartOptions}
                                    />
                                </div>
                            </EChartCard>
                        </Cards>
                    </Col>
                    <Col xxl={6} md={12} sm={12} xs={24}>
                        <Cards headless>
                            <EChartCard>
                                <div className="card-chunk">
                                    <CardBarChart2>
                                        <Heading as="h1">45.2k</Heading>
                                        <span>Unique visitors</span>
                                        <p>
                                            <span className="growth-upward">
                                                {/* <FeatherIcon icon="arrow-up" /> */}
                                                25%
                                            </span>
                                            <span>Since last week</span>
                                        </p>
                                    </CardBarChart2>
                                </div>
                                <div className="card-chunk">
                                    <ChartjsBarChartTransparent
                                        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                                        datasets={[
                                            {
                                                data: [20, 60, 50, 45, 50, 60, 70],
                                                backgroundColor: '#E9F5FF',
                                                hoverBackgroundColor: '#2C99FF',
                                                label: 'Visitors',
                                                barPercentage: 1,
                                            },
                                        ]}
                                        options={chartOptions}
                                    />
                                </div>
                            </EChartCard>
                        </Cards>
                    </Col>
                </Row>

                <Row gutter={25}>
                    <Col xxl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <TotalRevenue />
                        </Suspense>
                    </Col>
                    <Col xxl={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <RevenueGenerated />
                        </Suspense>
                    </Col>

                    <Col xxl={8} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <TopSellingProduct />
                        </Suspense>
                    </Col>

                    <Col xxl={8} md={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <SalesByLocation />
                        </Suspense>
                    </Col>
                    <Col xxl={8} md={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <RevenueByDevice />
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default Ecommerce;
