import React, {FC} from 'react'
import {Modal,Box} from "@mui/material";
import { IoCloseOutline } from 'react-icons/io5';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem:any;
    component: any;
    setRoute?: (route: string) => void;
    refetch?:any;
}

const CustomModal: FC<Props> = ({open,setOpen,setRoute,component:Component,refetch}) => {
  return (
    <Modal 
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box className="fixed inset-0 flex items-center justify-center p-6 ">
        <Box className="relative w-full max-w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
        <div className="w-full flex justify-end">
                <IoCloseOutline
                  size={30}
                  className="dark:text-white text-black cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
          <Component setOpen={setOpen} setRoute={setRoute} refetch={refetch} />
        </Box>
      </Box>

    </Modal>
  )
}

export default CustomModal