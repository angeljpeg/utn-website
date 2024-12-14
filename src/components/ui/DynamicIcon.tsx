import React, { lazy, Suspense } from 'react';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';


interface IconProps extends Omit<LucideProps, 'ref'> {
    name: keyof typeof dynamicIconImports;
}

export const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = lazy(dynamicIconImports[name]);
    const fallback = <div style={{ background: '#ddd', width: props.size, height: props.size }} className='rounded-full'/>
    
  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
}