/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable unused-imports/no-unused-vars */
'use client';
import { Modal, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { io } from 'socket.io-client';
const linkDownloadPolygonIDWalletApp =
  'https://0xpolygonid.github.io/tutorials/wallet/wallet-overview/#quick-start';

function PolygonIDVerifier({
  credentialType,
  issuerOrHowToLink,
  onVerificationResult,
  publicServerURL,
  localServerURL,
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };
  const [sessionId, setSessionId] = useState('');
  const [qrCodeData, setQrCodeData] = useState();
  const [isHandlingVerification, setIsHandlingVerification] = useState(false);
  const [verificationCheckComplete, setVerificationCheckComplete] =
    useState(false);
  const [verificationMessage, setVerfificationMessage] = useState('');
  const [socketEvents, setSocketEvents] = useState([]);

  // serverUrl is localServerURL if not running in prod
  // Note: the verification callback will always come from the publicServerURL
  const serverUrl = localServerURL;
  // if (window && window?.location.href.startsWith('https')) {
  //   serverUrl = publicServerURL;
  // }

  const getQrCodeApi = (sessionId: string) =>
    serverUrl + `/api/get-auth-qr?sessionId=${sessionId}`;

  const socket = io(serverUrl);

  useEffect(() => {
    socket.on('connect', () => {
      setSessionId(socket.id);

      // only watch this session's events
      socket.on(socket.id, (arg) => {
        // @ts-ignore
        setSocketEvents((socketEvents) => [...socketEvents, arg]);
      });
    });
  }, []);

  useEffect(() => {
    const fetchQrCode = async () => {
      const response = await fetch(getQrCodeApi(sessionId));
      const data = await response.text();
      return JSON.parse(data);
    };

    if (sessionId) {
      fetchQrCode().then(setQrCodeData).catch(console.error);
    }
  }, [sessionId]);

  // socket event side effects
  useEffect(() => {
    if (socketEvents.length) {
      const currentSocketEvent = socketEvents[socketEvents.length - 1] as any;

      if (currentSocketEvent.fn === 'handleVerification') {
        if (currentSocketEvent.status === 'IN_PROGRESS') {
          setIsHandlingVerification(true);
        } else {
          setIsHandlingVerification(false);
          setVerificationCheckComplete(true);
          if (currentSocketEvent.status === 'DONE') {
            setVerfificationMessage('✅ Verified proof');
            setTimeout(() => {
              reportVerificationResult(true);
            }, 2000);
            socket.close();
          } else {
            setVerfificationMessage('❌ Error verifying VC');
          }
        }
      }
    }
  }, [socketEvents]);

  // callback, send verification result back to app
  const reportVerificationResult = (result: any) => {
    onVerificationResult(result);
  };

  function openInNewTab(url: string) {
    const win = window?.open(url, '_blank');
    win?.focus();
  }
  console.log('qrCodeData', qrCodeData);

  return (
    <div>
      <button
        className='bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 block w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
        onClick={() => props.setOpenModal('qrCode')}
      >
        Sign in with Polygon ID
      </button>
      <Modal
        // show={props.openModal === 'qrCode'}
        size='lg'
        show={props.openModal === 'qrCode'}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>
          Scan this QR code from your Polygon ID Wallet App
        </Modal.Header>
        <Modal.Body>
          <div className='flex justify-center'>
            {qrCodeData &&
            !isHandlingVerification &&
            !verificationCheckComplete ? (
              <div className='bg-white p-4'>
                <QRCode size={300} value={JSON.stringify(qrCodeData)} />
              </div>
            ) : (
              <div className='flex flex-col items-center justify-center gap-4'>
                <Spinner size='xl' />
                <p className='text-gray-300'>Authenticating...</p>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PolygonIDVerifier;
