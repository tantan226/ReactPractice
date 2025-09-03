import { Button, ButtonProps, styled } from "@mui/material";
import { background } from "storybook/internal/theming";
import { JsxElement } from "typescript";


type MyButtonProps = {
    highlight?: boolean;
} & ButtonProps;

const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "highlight",
})<MyButtonProps>(({ theme, highlight }) => ({
    backgroundColor: highlight ?
        "blue" : "red",
    color: "white",
    padding: theme.spacing(1),
    "&:hover": {
        backgroundColor: highlight ?
            theme.palette.secondary.dark
            : theme.palette.primary.dark,
    }
}))

export const MyButton: React.FC<MyButtonProps> = (props) => {
    return <StyledButton {...props} />
}