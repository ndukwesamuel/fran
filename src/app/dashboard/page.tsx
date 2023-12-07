"use client";
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
// import FeatherIcon from 'feather-icons-react';

import { Main } from "../styled"
import { Suspense, lazy } from 'react';
import { Cards } from "../components/cards/frame/cards-frame"
import { PageHeader } from "../components/page-headers/page-headers"

// '../ ../../ ../../components/page-headers/page-headers';

// import SocialMediaOverview from "./overview/index/SocialMediaOverview"
// import FacebookOverview from "./overview/index/FacebookOverview"
import { ShareButtonPageHeader } from '../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from "../components/buttons/calendar-button/calendar-button"
import { Button } from '../components/buttons/buttons';

const SocialMediaOverview = lazy(() => import('./overview/index/SocialMediaOverview'));
const FacebookOverview = lazy(() => import('./overview/index/FacebookOverview'));
const YoutubeSubscribers = lazy(() => import('./overview/index/YoutubeSubscribers'));
const TwitterOverview = lazy(() => import('./overview/index/TwitterOverview'));
const InstagramOverview = lazy(() => import('./overview/index/InstagramOverview'));
const LinkedinKeyMetrics = lazy(() => import('./overview/index/LinkedinKeyMetrics'));
const SocialTrafficMetrics = lazy(() => import('./overview/index/SocialTrafficMetrics'));

export default function Home() {
  const data = useSelector((state: any) => state)
  console.log({ data });
  console.log("sjkdsdkj");

  return (
    <>

      {/* <PageHeader
        ghost
        title="Social Media Dashboard"
        buttons={[
          <div key="6" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      /> */}

      <Main>
        <p>sam</p>

        <Row justify="center" gutter={25}>
          <Col xxl={8} lg={24} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SocialMediaOverview />
            </Suspense>
          </Col>

          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <FacebookOverview />
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
              <YoutubeSubscribers />
            </Suspense>
          </Col>
          <Col xxl={8} md={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <TwitterOverview />
            </Suspense>
          </Col>

          <Col xxl={8} md={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <InstagramOverview />
            </Suspense>
          </Col>


          <Col xxl={8} md={8} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <LinkedinKeyMetrics />
            </Suspense>
          </Col>
          <Col xxl={16} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <SocialTrafficMetrics />
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  )
}
