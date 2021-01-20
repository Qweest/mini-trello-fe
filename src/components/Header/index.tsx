import React from 'react';
import { FaTrello } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import { HiOutlineHome, HiPlus, HiOutlineBell } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { colors } from '../../styles';
import { Wrapper, Content, Button, MemberButton } from './styles';

const iconProps = { size: 20, color: colors.white };

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Content position="left">
        <Button>
          <CgMenuGridO {...iconProps} />
        </Button>
        <Button>
          <HiOutlineHome {...iconProps} />
        </Button>
        <Button>
          <FaTrello {...iconProps} size={18} />
          <span>Boards</span>
        </Button>
      </Content>
      <FaTrello color={colors.seagull} size={24} />
      <Content position="right">
        <Button>
          <HiPlus {...iconProps} />
        </Button>
        <Button>
          <AiOutlineInfoCircle {...iconProps} />
        </Button>
        <Button>
          <HiOutlineBell {...iconProps} />
        </Button>
        <MemberButton></MemberButton>
      </Content>
    </Wrapper>
  );
};

export default Header;
