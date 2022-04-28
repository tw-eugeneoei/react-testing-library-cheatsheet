import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type DialogProps = {
    isOpen: boolean;
    closeDialog: () => void;
};

const RoleDialog = ({ isOpen, closeDialog }: DialogProps) => {
    return (
        <Dialog onClose={closeDialog} open={isOpen}>
            <DialogTitle>
                Lorem Ipsum Dialog
                <IconButton
                    aria-label="close"
                    onClick={closeDialog}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </DialogContent>
        </Dialog>
    );
};

export { RoleDialog };
