import PropTypes from 'prop-types';
import styled from 'styled-components';

import Popularity from './Popularity';

const ItemList = styled.ol`
  ${(props) => props.theme.mixins.unstyledList}
`;

const Item = styled.li`
  display: flex;
  align-items: center;

  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

const Image = styled.img`
  height: 4.5rem;
  width: 4.5rem;
`;

const Rank = styled.div`
  position: absolute;

  align-self: flex-end;

  height: 1.5rem;
  width: 1.5rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  text-align: center;
`;

const TextWrapper = styled.div`
  flex: 1;
  min-width: 0; /* forces text to truncate */

  padding: 1rem;
`;

const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubText = styled.div`
  font-size: 0.75rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RankedItemList = ({
  items,
  getImageUrl,
  getText,
  getSubText,
  getPopularity
}) => {
  return (
    <ItemList>
      {items.map((item, index) => (
        <Item key={index}>
          <Image src={getImageUrl(item)} />
          <Rank>{index + 1}</Rank>
          <TextWrapper>
            <Text>{getText(item)}</Text>
            {getSubText && <SubText>{getSubText(item)}</SubText>}
          </TextWrapper>
          <Popularity score={getPopularity(item)} />
        </Item>
      ))}
    </ItemList>
  );
};

RankedItemList.propTypes = {
  items: PropTypes.array.isRequired,
  getImageUrl: PropTypes.func.isRequired,
  getText: PropTypes.func.isRequired,
  getSubText: PropTypes.func,
  getPopularity: PropTypes.func.isRequired
};

export default RankedItemList;
