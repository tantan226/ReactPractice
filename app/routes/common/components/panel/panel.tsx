import { styled } from "@mui/material";
import React, { ReactNode } from "react";
import { grey } from "@mui/material/colors";

type PanelProps = {
    activeStatus: 'enabled' | 'disabled';
    children?: ReactNode;
    borderType?: 'lined' | 'none'
}

const StyledFieldSet = styled('fieldset')((props: PanelProps) => {
    const {
        borderType,
        activeStatus
    } = props;

    return {
        border: borderType === 'lined' ? '1px solid #ccc' : 'none',
        padding: '8px',
        borderRadius: '4px',
        backgroundColor: activeStatus === 'enabled' ? '#9370db' : grey[600]
    };
});

export const Panel = (props: PanelProps): React.ReactNode => {
    const {
        activeStatus,
        children,
        borderType
    } = props;

    return (
        <StyledFieldSet activeStatus={activeStatus} borderType={borderType}>{children}</StyledFieldSet>
    )
}