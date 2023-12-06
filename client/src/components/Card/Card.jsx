import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Card = ({ data }) => {
  console.log(data,"daa");
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="">
        <Listing data={data} open={openModal} />
        <AnimatePresence>
          {open && (
            <Overlay close={closeModal}>
              <Modal data={data} close={closeModal} />
            </Overlay>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Card;
