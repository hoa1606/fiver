import { useState } from "react";

const useOpen = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = (): void => {
    setOpen(false);
  };

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  return { open, onClose, handleClickOpen };
};

export default useOpen;
