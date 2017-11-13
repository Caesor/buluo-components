import React from 'react';
import './index.less';

const Error = ({ text = '加载失败', errorCode, style, onRetry }) => {
    return (
        <div className="error" style={style} onTap={e => { onRetry && onRetry() }}>
            <div className="error-text">{errorCode ? text + '[' + errorCode + ']' : text}</div>
        </div>
    );
};

export default Error;
