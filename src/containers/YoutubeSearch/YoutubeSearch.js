import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import PageHeader from '../../components/pageHeader';
import Box from '../../components/box';
import LayoutWrapper from '../../components/layoutWrapper';
import { notification, Input } from 'antd';
import YoutubeResult from './Result';
import basicStyle from '../../assets/styles/constants';
import actions from '../../redux/YoutubeSearch/actions';
import NoAPIKey from '../../components/noApiKey';
import youtubeSearchApi from '../../config/youtube.config';

const { youtubeSearch, onPageChange } = actions;
const { Search } = Input;

export default function YoutubeSearch() {
  const YoutubeSearch = useSelector(state => state.YoutubeSearch);
  const dispatch = useDispatch();
  const onSearch = React.useCallback(
    value => {
      if (value && value.length > 0) {
        dispatch(youtubeSearch(value));
      } else {
        notification('error', 'Please type something');
      }
    },
    [dispatch]
  );
  const handlePageChange = React.useCallback(
    (text, token) => {
      dispatch(onPageChange(text, token));
    },
    [dispatch]
  );
  React.useEffect(() => {
    onSearch(YoutubeSearch.searcText);
  }, [onSearch, YoutubeSearch.searcText]);
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <>
      <PageHeader>
        <Search
          placeholder="Search on Youtube"
          defaultValue={YoutubeSearch.searcText}
          onSearch={onSearch}
          className="headerSearch"
        />
      </PageHeader>
      <LayoutWrapper>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            {youtubeSearchApi ? (
              <Box style={{ minHeight: 220 }}>
                  <YoutubeResult
                      YoutubeSearch={YoutubeSearch}
                      onPageChange={handlePageChange}
                  />
              </Box>
            ) : (
              <NoAPIKey />
            )}
          </Col>
        </Row>
      </LayoutWrapper>
    </>
  );
}
