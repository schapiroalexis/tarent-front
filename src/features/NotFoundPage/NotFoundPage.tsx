import * as React from 'react';
import styled from 'styled-components/macro';
import { P } from './P';
import { Link } from 'components/Link';
import { StyleConstants } from 'styles/StyleConstants';
import { useTranslation } from 'react-i18next';
import { notFound } from './translations';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <head>
        <title>{t(notFound.headMsg())}</title>
        <meta name="description" content="Page not found" />
      </head>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>{t(notFound.bodyMsg())}</P>
        <Link to={'/'}>{t(notFound.bodyMsg2())}</Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

export default NotFoundPage;
