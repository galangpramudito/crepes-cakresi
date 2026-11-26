import { useEffect, useState } from 'react';
import { STORE_INFO } from '../data/storeData';
import { formatTime } from './utils';

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

// Jam sekarang di zona WIB, apa pun zona waktu perangkat pengunjung
const nowInWib = () => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  return (get('hour') % 24) * 60 + get('minute');
};

const getStatus = () => {
  const { openTime, closeTime } = STORE_INFO.location;
  const now = nowInWib();
  return {
    isOpen: now >= toMinutes(openTime) && now < toMinutes(closeTime),
    openLabel: formatTime(openTime),
    closeLabel: formatTime(closeTime),
  };
};

export function useOpenStatus() {
  const [status, setStatus] = useState(getStatus);

  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
