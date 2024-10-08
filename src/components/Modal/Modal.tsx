import { ReactNode, useCallback, useEffect } from 'react';
import './Modal.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        opened: !!isOpen,
    };

    return (
        <Portal>
            <div className='Modal'>
                <div className="overlay" onClick={closeHandler}>
                    <div className="modal_content" onClick={onContentClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18.9999C5.74414 18.9999 5.48828 18.9022 5.29297 18.7069C4.90234 18.3163 4.90234 17.6835 5.29297 17.2929L17.293 5.29285C17.6836 4.90222 18.3164 4.90222 18.707 5.29285C19.0977 5.68348 19.0977 6.31629 18.707 6.70691L6.70703 18.7069C6.51172 18.9022 6.25586 18.9999 6 18.9999Z" fill="#B6B6B6" />
                            <path d="M18 18.9999C17.7441 18.9999 17.4883 18.9022 17.293 18.7069L5.29297 6.70691C4.90234 6.31628 4.90234 5.68347 5.29297 5.29285C5.6836 4.90223 6.31641 4.90222 6.70703 5.29285L18.707 17.2928C19.0977 17.6835 19.0977 18.3163 18.707 18.7069C18.5117 18.9022 18.2559 18.9999 18 18.9999Z" fill="#B6B6B6" />
                        </svg>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
