import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconBaseProps } from 'react-icons';
import { HiOutlineClock, HiOutlineUser } from 'react-icons/hi';

import { RootState } from '../../../store/entities';
import BoardSection from '../components/BoardSection';
import { fetchBoardsAction } from '../thunks';
import { Wrapper, AllBoards } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { boards } = useSelector((state: RootState) => state.home);
  const iconDefaultProps = useMemo<IconBaseProps>(() => ({ size: 26 }), []);

  useEffect(() => {
    dispatch(fetchBoardsAction());
  }, []);

  return (
    <Wrapper>
      <AllBoards>
        <BoardSection
          Icon={<HiOutlineClock {...iconDefaultProps} />}
          name="Recently Viewed"
          boards={boards}
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
