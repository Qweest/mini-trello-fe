import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../../components/Header';
import { RootState } from '../../../store/entities';
import BoardSection from '../components/BoardSection';
import { fetchBoardsAction } from '../thunks';
import { Wrapper } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { boards } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchBoardsAction());
  }, []);

  return (
    <Wrapper>
      <Header />
      <BoardSection name="Personal Boards" boards={boards} />
    </Wrapper>
  );
};

export default Home;
