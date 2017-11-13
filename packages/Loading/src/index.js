import React from 'react';
import './index.less';

const Loading = ({ text = '加载中...', style }) => {
    return (
        <div className="Loading spinner" style={style}>{text}</div>
    );
};

export default Loading;
