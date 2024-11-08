import { useState, useRef } from 'react';
import { Modal, Button } from 'antd';
import c from './PrivacyModal.module.css';

interface PrivacyProps {
  buttonName: string;
  title?: string;
  text: string;
  className?: string;
}

export const PrivacyModal = ({ buttonName, title = 'Политика конфиденциальности', text, className }: PrivacyProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const textLenghtToCrop: number = 500;
  const textLenghtToScroll: number = 1000;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setIsExpanded(false);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Функция для скролла вниз к кнопке согласия
  const scrollToBottom = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCancel = () => {
    setIsExpanded(false);
    setIsModalOpen(false);
  };

  const getText = () => {
    return isExpanded ? text : text.slice(0, textLenghtToCrop) + '...';
  };

  return (
    <>
      <Button className={`${c.privacyButton} ${className || ''}`} onClick={showModal}>
        {buttonName}
      </Button>
      <Modal
        closable={false}
        maskClosable={false}
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            disabled={!isExpanded}
          >
            Прочитал и согласен
          </Button>,
        ]}
      >
        {isExpanded && text.length > textLenghtToScroll && (
          <div className={c.scrollButtonWrapper}>
            <Button type="link" onClick={scrollToBottom}>
              Прокрутить вниз
            </Button>
          </div>
        )}

        <div>
          <p>{getText()}</p>
          {text.length > textLenghtToCrop && (
            <Button type="link" onClick={handleToggle}>
              {isExpanded ? 'Свернуть' : 'Развернуть'}
            </Button>
          )}
        </div>

        <div ref={footerRef} />
      </Modal>
    </>
  );
};
