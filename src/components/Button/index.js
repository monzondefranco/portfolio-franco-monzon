import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const DefaultButtonComponent = styled.input`
    background: transparent;
    font-size: 18px;
    border: solid 2px #097eb5;
    border-radius: 0.25rem;
    color: #097eb5;
    margin: 0 auto;
    min-width: ${(props) => props.minWidth};
    padding: 0.5rem;
    &:hover {
        background: #097eb5;
        color: white;
        cursor: pointer;
    }
`;

const TransitionButtonComponent = styled(DefaultButtonComponent)`
    transition: padding 0.3s ease-in-out;
    &:hover {
        padding: 0.5rem 1rem;
    }
`;

export const DefaultButton = ({ value, type, minWidth }) => (
    <DefaultButtonComponent value={value} type={type} minWidth={minWidth} />
);

DefaultButton.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    minWidth: PropTypes.string,
};

DefaultButton.defaultProps = {
    type: 'submit',
    minWidth: 'auto',
};

export const TransitionButton = ({ value, type, minWidth }) => (
    <TransitionButtonComponent value={value} type={type} minWidth={minWidth} />
);

TransitionButton.propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    minWidth: PropTypes.string,
};

TransitionButton.defaultProps = {
    type: 'submit',
    minWidth: 'auto',
};
