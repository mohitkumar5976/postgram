import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Notifications from "./Notifications";

export default function NotificationComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label="Notifications">
        <NotificationsActiveIcon className="cursor-pointer text-white" onClick={onOpen} />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notifications</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Notifications />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
