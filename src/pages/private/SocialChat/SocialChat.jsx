import React, { useState } from 'react';

function SocialChat() {
    const [step, setStep] = useState(1);

    return (
        <>
            {step === 1 && (
                <div>
                    <h1>Contacts</h1>
                </div>


            )}

            {step === 2 && (
                <div>
                    <h1>Kovaliov Kuznetsova</h1>
                </div>
            )}
        </>
    )
}

export default SocialChat