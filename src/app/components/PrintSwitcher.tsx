'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import { MdOutlinePrint, MdOutlinePrintDisabled } from 'react-icons/md';
import { event } from '@/ga';

const PrintSwitcher: FC = () => {
  const [enablePrint, setEnablePrint] = useState(false);
  const handleToggle = useCallback(() => {
    setEnablePrint((prev) => !prev);
    event('click', {
      category: 'print',
      label: enablePrint ? 'disable' : 'enable',
    });
  }, [enablePrint]);

  useEffect(() => {
    if (enablePrint) {
      document.documentElement.classList.remove('print:hidden');
    } else {
      document.documentElement.classList.add('print:hidden');
    }
  }, [enablePrint]);

  return enablePrint ? (
    <MdOutlinePrint
      className="absolute bottom-1 left-1 print:hidden"
      onClick={handleToggle}
      role="button"
      aria-label="Disable printing"
      tabIndex={0}
    />
  ) : (
    <MdOutlinePrintDisabled
      className="absolute bottom-1 left-1 print:hidden"
      onClick={handleToggle}
      role="button"
      aria-label="Enable printing"
      tabIndex={0}
    />
  );
};

export default PrintSwitcher;
