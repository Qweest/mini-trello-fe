import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconBaseProps } from 'react-icons';
import { HiOutlineClock, HiOutlineUser } from 'react-icons/hi';
import lodash from 'lodash';

import { RootState } from '../../../store/entities';
import BoardSection from '../components/BoardSection';
import { LAST_VIEW_LENGTH } from '../constants';
import { fetchBoardsAction } from '../thunks';
import { Wrapper, AllBoards } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { boards } = useSelector((state: RootState) => state.home);
  const iconDefaultProps = useMemo<IconBaseProps>(() => ({ size: 26 }), []);

  useEffect(() => {
    dispatch(fetchBoardsAction());
  }, []);

  const lastViewBoards = useMemo(
    () =>
      lodash(boards)
        .filter((board) => !!board.lastView)
        .orderBy((a) => a.lastView, ['desc'])
        .slice(0, LAST_VIEW_LENGTH)
        .value(),
    [boards],
  );

  return (
    <Wrapper>
      <AllBoards>
        <BoardSection
          Icon={<HiOutlineClock {...iconDefaultProps} />}
          name="Recently Viewed"
          boards={lastViewBoards}
        />
        <BoardSection
          Icon={<HiOutlineUser {...iconDefaultProps} />}
          name="Personal Boards"
          boards={boards}
        />
      </AllBoards>
    </Wrapper>
  );
};

export default Home;
