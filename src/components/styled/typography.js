import React from 'react';
import { Typography } from 'antd';
import styled from '@emotion/styled';
import { shade as shadeFunc, tint as tintFunc } from 'polished';
import PropTypes from 'prop-types';

const { Title: AntTitle, Text: AntText, Paragraph: AntParagraph } = Typography;

function getColor(color, shadeValue, tintValue) {
  if (shadeValue) {
    return shadeFunc(shadeValue, color);
  }
  if (tintValue) {
    return tintFunc(tintValue, color);
  }
  return tintFunc(0.1, color);
}

const AntTitleStyled = styled(AntTitle)`
  &&& {
    color: ${props => {
      return getColor(props.theme.text[props.color], props.shade, props.tint);
    }};
  }
`;

const AntTextStyled = styled(AntText)`
  &&& {
    color: ${props => {
      return getColor(props.theme.text[props.color], props.shade, props.tint);
    }}
    font-family: 'Cera Pro', sans-serif;
  }
`;

const AntParaStyled = styled(AntParagraph)`
  &&& {
    color: ${props =>
      getColor(props.theme.text[props.color], props.shade, props.tint)};
    font-family: 'Cera Pro', sans-serif;
    font-size: 1.6rem;
  }
`;

export function Title({ color = 'primary', shade, tint, ...rest }) {
  return <AntTitleStyled color={color} shade={shade} tint={tint} {...rest} />;
}

export function Text({ color = 'primary', shade, tint, ...rest }) {
  return <AntTextStyled color={color} shade={shade} tint={tint} {...rest} />;
}

export function Paragraph({ color = 'primary', shade, tint, ...rest }) {
  return <AntParaStyled color={color} shade={shade} tint={tint} {...rest} />;
}

Title.propTypes = {
  color: PropTypes.string,
  shade: PropTypes.number,
  tint: PropTypes.number,
};

Text.propTypes = {
  color: PropTypes.string,
  shade: PropTypes.number,
  tint: PropTypes.number,
};

Paragraph.propTypes = {
  color: PropTypes.string,
  shade: PropTypes.number,
  tint: PropTypes.number,
};
