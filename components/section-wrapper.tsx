import React, { ReactNode } from 'react';

const SectionWrapper = ({ heading, children }: { heading?: string, children?: ReactNode }) => {
    return (
        <section className="flex flex-col md:flex-row  p-4 w-full " >
            <div className="md:w-1/3 capitalize" id={heading}>
                <h2 className="text-3xl md:text-right font-semibold pr-8 pb-4">
                    {heading}
                </h2>
            </div>
            <div className='w-full'>
                {children}
            </div>
        </section>
    )
}

export default SectionWrapper