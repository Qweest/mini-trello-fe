import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FaTrello } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import { HiOutlineHome, HiPlus, HiOutlineBell } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { colors } from '../../styles';
import { RootState } from '../../store/entities';
import { Wrapper, Content, Button, MemberButton, TrelloLogo } from './styles';

const iconProps = { size: 20, color: colors.white };

interface Props {
  transparent?: boolean;
}

const Header: React.FC<Props> = (props) => {
  const { transparent = false } = props;
  const user = useSelector((state: RootState) => state.auth.user);
  const initials = useMemo(() => user?.username.charAt(0).toUpperCase(), [
    user?.username,
  ]);

  const stubFunc = () => ({});

  return (
    <Wrapper transparent={transparent}>
      <Content position="left">
        <Button onClick={stubFunc} Icon={<CgMenuGridO {...iconProps} />} />
        <Button onClick={stubFunc} Icon={<HiOutlineHome {...iconProps} />} />
        <Button
          onClick={stubFunc}
          Icon={<FaTrello {...iconProps} size={18} />}
          text="Boards"
        />
      </Content>
      <TrelloLogo color="hsla(0, 0%, 100%, 0.4)" size={24} />
      <Content position="right">
        <Button onClick={stubFunc} Icon={<HiPlus {...iconProps} />} />
        <Button
          onClick={stubFunc}
          Icon={<AiOutlineInfoCircle {...iconProps} />}
        />
        <Button onClick={stubFunc} Icon={<HiOutlineBell {...iconProps} />} />
        <MemberButton onClick={stubFunc}>{initials}</MemberButton>
      </Content>
    </Wrapper>
  );
};

export default Header;
