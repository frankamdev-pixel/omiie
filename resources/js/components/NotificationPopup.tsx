import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface MessageType {
  type: 'success' | 'error' | 'info';
  text: string;
}

const icons = {
  success: <CheckCircle className="h-6 w-6 text-green-400" />,
  error: <XCircle className="h-6 w-6 text-red-400" />,
  info: <Info className="h-6 w-6 text-cyan-400" />,
};

export default function NotificationPopup() {
  const { props } = usePage() as any;
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const newMessages: MessageType[] = [];
    if (props?.flash?.success) newMessages.push({ type: 'success', text: props.flash.success });
    if (props?.flash?.error) newMessages.push({ type: 'error', text: props.flash.error });
    if (props?.flash?.info) newMessages.push({ type: 'info', text: props.flash.info });

    if (newMessages.length > 0) setMessages(newMessages);

    // auto-hide
    const timers = newMessages.map((_, i) =>
      setTimeout(() => {
        setMessages((prev) => prev.filter((_, index) => index !== i));
      }, 4000)
    );

    return () => timers.forEach(clearTimeout);
  }, [props?.flash]);

  if (messages.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-3">
      <AnimatePresence>
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className={`flex items-center gap-3 p-4 rounded-xl shadow-lg border ${
              msg.type === 'success'
                ? 'bg-green-50 border-green-200'
                : msg.type === 'error'
                ? 'bg-red-50 border-red-200'
                : 'bg-cyan-50 border-cyan-200'
            }`}
          >
            {icons[msg.type]}
            <span className="text-sm font-medium">{msg.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
