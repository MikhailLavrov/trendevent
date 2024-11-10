import { useState } from 'react';
import { Button, Modal } from 'antd';
import c from './CallBackModal.module.css';
import { CallbackForm } from './../CallBackForm/CallBackForm';

interface CallBackModalProps {
  buttonText?: string;
  className?: string;
}

export const CallBackModal: React.FC<CallBackModalProps> = ({
  buttonText = 'Заказать звонок',
  className,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <Button onClick={handleModalOpen} className={className || c.callMeBack__button}>
        {buttonText}
      </Button>
      <Modal
        className={`${c.callMeBack__modal} callMeBack__modal`}
        title="Заявка на обратный звонок"
        centered
        footer={null}
        open={modalOpen}
        onCancel={handleModalClose}
        onOk={handleModalClose}
      >
        <div className={c.callMeBack__wrapper}>
          <CallbackForm
            title='Заполните поля'
            subtitle='и мы перезвоним в ближайшее время'
            outerHandler={() => setTimeout(handleModalClose, 1500)}
          />
        </div>
      </Modal>
    </>
  );
};
