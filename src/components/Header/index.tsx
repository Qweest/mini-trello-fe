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

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const initials = useMemo(() => user?.username.charAt(0).toUpperCase(), [
    user?.username,
  ]);

  return (
    <Wrapper>
      <Content position="left">
        <Button onClick={() => {}} Icon={<CgMenuGridO {...iconProps} />} />
        <Button onClick={() => {}} Icon={<HiOutlineHome {...iconProps} />} />
        <Button
          onClick={() => {}}
          Icon={<FaTrello {...iconProps} size={18} />}
          text="Boards"
        />
      </Content>
      <TrelloLogo color="hsla(0, 0%, 100%, 0.4)" size={24} />
      <Content position="right">
        <Button onClick={() => {}} Icon={<HiPlus {...iconProps} />} />
        <Button
          onClick={() => {}}
          Icon={<AiOutlineInfoCircle {...iconProps} />}
        />
        <Button onClick={() => {}} Icon={<HiOutlineBell {...iconProps} />} />
        <MemberButton onClick={() => {}}>{initials}</MemberButton>
      </Content>
    </Wrapper>
  );
};

export default Header;
