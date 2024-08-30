import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { FiMapPin } from 'react-icons/fi'; 

const MarkerDetails = ({ title, description, latitude, longitude }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCodeData = `https://maps.google.com/?q=${latitude},${longitude}`;
        const qrCodeUrl = await QRCode.toDataURL(qrCodeData);
        setQrCodeUrl(qrCodeUrl);
        setQrCodeLink(qrCodeData);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, [latitude, longitude]);

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md max-w-xs">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Navigate using your mobile</h2>
      {qrCodeUrl && (
        <div className="mb-4">
          <img 
            src={qrCodeUrl} 
            alt={`${title} QR Code`} 
            className="w-full h-auto object-contain rounded-lg mb-2" 
          />
          <a 
            href={qrCodeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
          >
            <FiMapPin className="mr-1" /> Navigate
          </a>
        </div>
      )}
      <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default MarkerDetails;
