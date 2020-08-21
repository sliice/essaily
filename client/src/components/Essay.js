import React from 'react';
import styled from 'styled-components';
import './fonts/font-face.css'

export const Essay = () => {
    const Title = styled.h2`
        font-family: 'Hauss-Bold-Italic';
        font-size: 20pt;  
        line-height: 1.4;
        color: #323232;
        font-weight: 100;
    `;

    const P = styled.p`
        font-family: 'Hauss-Book';
        line-height: 1.6;
        color: #323232;             
        font-size: 13pt;  
        margin-bottom: 30px;
    `;

    const Block = styled.div`
        margin-bottom: 60px;
    `;


    return (
        <div>
            <Block>
                <Title>‘Afterland,’ by Lauren Beukes: An Excerpt</Title>
                <P>
                    “Look at me,” Cole says. “Hey.”
                    Checking Miles’s pupils, which are still huge.
                    Shock and fear and the drugs working their way out of his system.
                    Scrambling to remember her first-aid training.
                    Checklist as life buoy. He’s able to focus, to speak without slurring.
                    He was groggy in the car, getting away.
                    But soon he’ll be capable of asking difficult questions she is not ready to answer.
                    About the blood on her shirt, for example.
                </P>
                <P>
                    “Hey,” she says again, keeping her voice as even as she can. But she’s shaky too, with the comedown of adrenaline. Seeing Billie hauling his body like a broken punching bag, thinking he was dead. But he’s not. He’s alive. Her son is alive, and she needs to hold it together. “It’s going to be all right,” she says. “I love you.”
                </P>
                <P>
                    “Love you too,” he manages. An automatic call-and-response, like an invocation in church.
                    Except their cathedral is an abandoned gas station restroom, where the rows of empty stalls gape like broken teeth in the predawn light, toilet seats long since wrenched off by vandals.
                </P>
                <P>
                    [ Return to the review of “Afterland.” ]
                </P>
                <P>
                    Miles is still shaking, his thin arms wrapped around his rib cage, shoulders hunched, teeth clicking like castanets, and his eyes keep jerking back to the door, which has been kicked in before this, judging by the scuffs and dents in the plywood. She, too, is expecting that door to burst open. It feels inevitable that they’ll be found and dragged back. She’ll be arrested. Miles will be taken away. In America, they steal kids from their parents. This was true even before all this.
                </P>
            </Block>

            <Block>

                <Title>Time for a Literary Road Trip</Title>
                <P>
                    In a typical year, when the thick summer heat descends, you might plot an escape from everyday life. But this is not a typical year, and whether you’re trapped in your home office or on your couch, the urge to get away from it all is likely stronger than ever. A road trip — one way to take a cautious vacation — might be the answer to this malaise. But if you’ll be staying put, these books offer the thrills of the open road, of driving fast into a new reality, far from the safety of your own home.
                </P>
                <P>
                    The title of Mona Simpson’s first novel, “Anywhere But Here,” might capture your current mood. But hopefully you have it better than Ann, the 12-year-old daughter of the charismatic yet impulsive Adele. The pair flee Wisconsin for California in the hopes of making Ann a child star, yet their path is littered with Adele’s emotional detritus. The story’s rich details, our reviewer wrote in 1987, are “generous irrelevances — the author taking time out from her characters and their battling to enjoy the world that contains them and us.”
                </P>
                <P>
                    “Love you too,” he manages. An automatic call-and-response, like an invocation in church.
                    Except their cathedral is an abandoned gas station restroom, where the rows of empty stalls gape like broken teeth in the predawn light, toilet seats long since wrenched off by vandals.
                </P>
                <P>
                    [ Return to the review of “Afterland.” ]
                </P>
                <P>
                    Miles is still shaking, his thin arms wrapped around his rib cage, shoulders hunched, teeth clicking like castanets, and his eyes keep jerking back to the door, which has been kicked in before this, judging by the scuffs and dents in the plywood. She, too, is expecting that door to burst open. It feels inevitable that they’ll be found and dragged back. She’ll be arrested. Miles will be taken away. In America, they steal kids from their parents. This was true even before all this.
                </P>
            </Block>
        </div>
    )
}

export default Essay;