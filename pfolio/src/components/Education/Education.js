import React from 'react'
import '../Education/edu.css'

function Education() {
    return (
        <div className='gamedismain'>
            <div className='mbee5 '>
                <h1 className='text-center' style={{ textDecoration: 'underline' }}>Disclaimer</h1>
                <h5 className='pt-4'>This quiz game is for entertainment purposes only and is not intended to provide
                    professional advice or recommendations. The information contained in this game may
                    not be accurate or up-to-date. Participants should always consult a professional in
                    the relevant field for any specific questions or concerns. The creators of this game
                    cannot be held responsible for any damage or loss resulting from the use of this game
                    or the information contained therein. By participating in this game, you acknowledge that
                    you have read and understand this disclaimer and release the creators of this game from
                    any and all liability.</h5>


                    <h5 className='pt-4'>This quiz game is for entertainment purposes only and is not intended to provide
                    professional advice or recommendations. The information contained in this game may
                    not be accurate or up-to-date. Participants should always consult a professional in
                    the relevant field for any specific questions or concerns. The creators of this game
                    cannot be held responsible for any damage or loss resulting from the use of this game
                    or the information contained therein. By participating in this game, you acknowledge that
                    you have read and understand this disclaimer and release the creators of this game from
                    any and all liability.</h5>

                {/* <div className="OneByOneText">
            <p className="OneByOneText-word">{currentWord}</p>
            </div> */}

                {/* <div className="OneByOneText">
                <p className="OneByOneText-word">{currentWord}</p>
                </div> */}




                <hr></hr>
                <h4 className='text-center pt-4'>Avilable Token in your Account : 0.1</h4>
                <h4 className='text-center'>Token to be Deductive for this Game : 0.1</h4>
                <h4 className='text-center'>For Every Right Question you will Earn : 0.01</h4>
                <div className='text-center pt-4'>
                    <button className='bor1'  >Start</button>
                </div>
            </div>

            {/* <button onClick={() => quizzes.length ? setStart(true) : alert('No quizzes available')}>Start</button> */}
        </div>
    )
}

export default Education
